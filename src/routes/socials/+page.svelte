<script>
	import { onMount } from 'svelte';

	/**
	 * @type {Map<String, any>?}
	 */
	let data = null;
	async function load() {
		const response = await fetch('/api/socials');
		data = await response.json();
	}

	onMount(load);
</script>

<div class="flex flex-col">
	{#if data === null}
		Loading...
	{:else}
		{#each data as social}
			<div class="flex flex-row items-center p-2">
				{social.social}: &nbsp;<a class="underline" href={social.link}>{social.title}</a>
			</div>
		{/each}
	{/if}
</div>
