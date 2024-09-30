<script>
	import { onMount } from 'svelte';

	/**
	 * @type {Map<String, any>?}
	 */
	let data = null;
	async function load() {
		const response = await fetch('/api/work');
		data = await response.json();
	}

	onMount(load);
</script>

<div class="flex flex-col">
	{#if data === null}
		Loading...
	{:else}
		{#each data as work}
			<div class="flex flex-col items-start p-2">
				<h2 class="font-bold text-2xl text-primary">{work.title}</h2>
				<div class="flex flex-row text-sm text-secondary">
					{#if work.designation != null}
						{work.designation} |
					{/if}
					{#if work.date != null}
						{work.date} |
					{/if}
					{#if work.location != null}
						{work.location}
					{/if}
				</div>
				<div class="text-sm">{work.description}</div>
			</div>
		{/each}
	{/if}
</div>
