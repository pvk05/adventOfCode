<script>
    export let data
    console.log(data)
</script>

{#each data.days as { slug, title, year }}
		<li><a href="/advent/{year}/{slug}">{title}</a></li>
{/each}