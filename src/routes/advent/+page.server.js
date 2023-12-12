import { years } from './years.js';

export function load() {
	return {
		years: years.map((year) => ({
			slug: year.slug
		}))
	};
}
