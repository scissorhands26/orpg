import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }: any) => {
	if (locals.pb.authStore.model && locals.pb.authStore.isValid) {
		return {
			user: serializeNonPOJOs(locals.pb.authStore.model)
		};
	}
};
