import * as days22 from './days_2022.js';
import * as days23 from './days_2023.js';
import { years } from '../years.js';

let days = {
	"2023": days23,
	"2022": days22
};

export function load( { params } ) {
	const year = years.find((year) => year.slug === params.year);

	return {
		days: days[params.year].data.map((day) => ({
			slug: day.slug,
			title: day.title,
			year: year.slug
		}))
	};
}
