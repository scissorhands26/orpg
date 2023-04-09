import type { PageServerLoad } from './$types';
import { serializeNonPOJOs } from '$lib/utils';

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		const exercises = await locals.pb.collection('exercises').getFullList();

		const userID = locals.pb.authStore.model?.id;

		if (userID) {
			const currentUser = await locals.pb.collection('users').getOne(userID);

			if (currentUser.currentlyActive === false) {
				let createWorkoutData = {
					user: userID
				};
				let updateUserData = {
					currentlyActive: true
				};
				const createWorkout = await locals.pb.collection('workouts').create(createWorkoutData);
				const updateUser = await locals.pb.collection('users').update(userID, updateUserData);
			}
			if (currentUser.currentlyActive === true) {
				const fetchCurrentWorkout = await locals.pb
					.collection('workouts')
					.getFirstListItem(`user="${userID}"`);
			}
		}

		return {
			exercises: serializeNonPOJOs(exercises)
		};
	}
}) satisfies PageServerLoad;
