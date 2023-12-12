import * as days22 from '../days_2022.js';
import * as days23 from '../days_2023.js';

let days = {
	"2023": days23,
	"2022": days22
};

export function load( { params } ) {
    const day = days[params.year].data.find((day) => day.slug === params.day);

	return {
		day: day
	};
}
