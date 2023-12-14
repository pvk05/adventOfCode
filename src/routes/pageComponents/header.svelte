<script>
    import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

    const themes = [
        "skeleton",
        "crimson",
        "wintry",
        "gold-nouveau",
        "hamlindigo",
        "modern",
        "rocket",
        "sahara",
        "seafoam",
        "vintage",
    ];

    import { popup } from "@skeletonlabs/skeleton";

    const theme = {
        // Represents the type of event that opens/closed the popup
        event: "click",
        // Matches the data-popup value on your popup element
        target: "theme",
        // Defines which side of your trigger the popup will appear
        placement: "bottom",
    };
</script>

<AppBar>
    <h1 class="h1">Advent of Code</h1>
    <svelte:fragment slot="trail">
        <LightSwitch />
        <button use:popup={theme}> Theme </button>
        <nav
            data-popup="theme"
            class=" bg-surface-100-800-token p-4 border-2 rounded"
        >
            <ul>
                {#each themes as theme}
                    <li class=" mt-1">
                        <button
                            on:click={() =>
                                document.body.setAttribute("data-theme", theme)}
                            class="btn variant-ghost-primary w-full"
                            >{theme}</button
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </svelte:fragment>
</AppBar>
