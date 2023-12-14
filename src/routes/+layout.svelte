<script>
    import "../app.pcss";
    import { AppShell } from '@skeletonlabs/skeleton';
    import Header from "./pageComponents/header.svelte";
    import Sidebar from "./pageComponents/sidebar.svelte";
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header"><Header/></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>

<svelte:head>
  <title>Advent of code</title>
</svelte:head>