import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }: any) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}

	if (locals.pb.authStore.model && locals.pb.authStore.isValid) {
		return {
			user: serializeNonPOJOs(locals.pb.authStore.model)
		};
	}
};
