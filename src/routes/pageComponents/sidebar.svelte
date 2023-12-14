<script>
    import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
    import { years } from "../advent/years.js";
    import { page } from "$app/stores";

    let currentTile = 0;
</script>

<div class=" h-full">
    <AppRail>
        {#each years as year, index}
            <AppRailTile
                bind:group={currentTile}
                name="tile-{index}"
                value={index}
                title="tile-{index}"
            >
                <AppRailAnchor
                    href={`/advent/${year.slug}`}
                    selected={$page.url.pathname === `/advent/${year.slug}`}
                >
                    {year.slug}
                </AppRailAnchor>
            </AppRailTile>
        {/each}
    </AppRail>
</div>
