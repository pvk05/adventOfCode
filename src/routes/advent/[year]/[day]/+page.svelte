<script>
    export let data;
    const imports = {
        day1: () => import( /* @vite-ignore */ "$lib/advent/2023/js/01.js"),
        day2: () => import( /* @vite-ignore */ "$lib/advent/2023/js/02.js"),
        day3: () => import( /* @vite-ignore */ "$lib/advent/2023/js/03.js"),
        day4: () => import( /* @vite-ignore */ "$lib/advent/2023/js/04.js"),
        day5: () => import( /* @vite-ignore */ "$lib/advent/2023/js/05.js"),
        day6: () => import( /* @vite-ignore */ "$lib/advent/2023/js/06.js"),
        day7: () => import( /* @vite-ignore */ "$lib/advent/2023/js/07.js"),
        day8: () => import( /* @vite-ignore */ "$lib/advent/2023/js/08.js"),
        day9: () => import( /* @vite-ignore */ "$lib/advent/2023/js/09.js"),
        day10: () => import( /* @vite-ignore */ "$lib/advent/2023/js/10.js"),
        day11: () => import( /* @vite-ignore */ "$lib/advent/2023/js/11.js"),
        day12: () => import( /* @vite-ignore */ "$lib/advent/2023/js/12.js"),
        day13: () => import( /* @vite-ignore */ "$lib/advent/2023/js/13.js"),
        day14: () => import( /* @vite-ignore */ "$lib/advent/2023/js/14.js"),
        day15: () => import( /* @vite-ignore */ "$lib/advent/2023/js/15.js"),
        day16: () => import( /* @vite-ignore */ "$lib/advent/2023/js/16.js"),
        day17: () => import( /* @vite-ignore */ "$lib/advent/2023/js/17.js"),
        day18: () => import( /* @vite-ignore */ "$lib/advent/2023/js/18.js"),
        day19: () => import( /* @vite-ignore */ "$lib/advent/2023/js/19.js"),
        day20: () => import( /* @vite-ignore */ "$lib/advent/2023/js/20.js"),
        day21: () => import( /* @vite-ignore */ "$lib/advent/2023/js/21.js"),
        day22: () => import( /* @vite-ignore */ "$lib/advent/2023/js/22.js"),
        day23: () => import( /* @vite-ignore */ "$lib/advent/2023/js/23.js"),
        day24: () => import( /* @vite-ignore */ "$lib/advent/2023/js/24.js"),
    }
</script>

<h1 class="h3">{data.day.title}</h1>

<br>

<div>
    {@html data.day.content}
</div>

<br>

{#await imports[data.day.js]() then day}
    <div>
        <h2>Part 1</h2>
        <p>Answer: {day.task()[0]}</p>
        <h2>Part 2</h2>
        <p>Answer: {day.task()[1]}</p>
    </div>
{/await}