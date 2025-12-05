export const load = ({ url }: { url: { pathname: string } }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
