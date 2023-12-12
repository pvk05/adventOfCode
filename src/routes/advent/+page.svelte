<script>
    export let data
    
    let years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
</script>

{#each data.years as { slug }}
		<li><a href="/advent/{slug}">{slug}</a></li>
{/each}

<!--
{#each years as year, index (index)}
    <a href="/advent/{year}">{year}</a>
    <br>
{/each}-->