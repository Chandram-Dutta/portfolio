<script lang="ts">
	import { onMount } from 'svelte';
	import toast from 'svelte-hot-french-toast';
	import { Button } from 'bits-ui';
	let data: Publications[] = $state([]);

	type Publications = {
		title: string;
		year: number;
		conference?: string;
		publisher: string;
		link: string;
		google_scholar_link: string;
	};

	async function load() {
		console.log('load');
		try {
			const response = await fetch('/api/publications');
			console.log(response);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			data = await response.json();
			console.log(data);
		} catch (err) {
			console.error(err);
			toast.error("This didn't work.");
		}
	}

	function openLink(link: string) {
		window.open(link, '_blank');
	}

	onMount(load);
</script>

<div class="flex flex-col">
	{#if data === null}
		Loading...
	{:else}
		{#each data as publication}
			<div class="flex flex-col items-start p-2">
				<h2 class="text-primary text-2xl font-bold text-[#FF5F00]">{publication.title}</h2>
				<div class="text-secondary flex flex-col text-sm">
					{#if publication.conference != null}
						{publication.conference}
					{/if}
				</div>
				{#if publication.publisher != null}
					<div class="text-secondary text-sm">Published by {publication.publisher}</div>
				{/if}
				<div class="flex flex-row">
					{#if publication.link != null}
						<Button.Root
							on:click={() => openLink(publication.link)}
							class="my-2 mr-4 rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
							>Article</Button.Root
						>
					{/if}
					<Button.Root
						on:click={() => openLink(publication.google_scholar_link)}
						class="my-2 mr-4 rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
						>Google Scholar Link</Button.Root
					>
				</div>
			</div>
		{/each}
	{/if}
</div>
