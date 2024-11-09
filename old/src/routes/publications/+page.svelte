<!-- <script>
	import { onMount } from 'svelte';

	/**
	 * @type {Map<String, any>?}
	 */
	let data = null;
	async function load() {
		const response = await fetch('/api/publications');
		data = await response.json();
	}

	onMount(load);
</script>

<div class="flex flex-col">
	{#if data === null}
		Loading...
	{:else}
		{#each data as publication}
			<div class="flex flex-col items-start p-2">
				<h2 class="font-bold text-2xl text-primary">{publication.title}</h2>
				<div class="flex flex-col text-sm text-secondary">
					{#if publication.conference != null}
						{publication.conference}
					{/if}
				</div>
				{#if publication.publisher != null}
					<div class="text-sm text-secondary">Published by {publication.publisher}</div>
				{/if}
				<div class="flex flex-row">
					{#if publication.link != null}
						<a class="pr-2 pt-2 pb-2" href={publication.link}
							><button class="btn btn-secondary">Article</button></a
						>
					{/if}
					{#if publication.google_scholar_link != null}
						<a class="pr-2 pt-2 pb-2" href={publication.google_scholar_link}
							><button class="btn btn-secondary">Google Scholar Link</button></a
						>
					{/if}
				</div>
			</div>
		{/each}
	{/if}
</div> -->
