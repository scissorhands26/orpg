import type { PageServerLoad } from './$types';
import { serializeNonPOJOs } from '$lib/utils';

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		const records = await locals.pb.collection('exercises').getFullList({
			sort: '-created'
		});

		return {
			exercises: serializeNonPOJOs(records)
		};
	}
}) satisfies PageServerLoad;
