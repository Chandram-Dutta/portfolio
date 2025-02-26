<script lang="ts">
	import { Button } from 'bits-ui';
	import { onMount } from 'svelte';
	import toast from 'svelte-hot-french-toast';
	let data: Project[] = $state([]);

	type Project = {
		title: string;
		designation?: string;
		date?: string;
		location?: string;
		description: string;
		skills: string[];
		links: Links[];
	};

	type Links = {
		url: string;
		title: string;
		icon: string;
	};

	async function load() {
		try {
			const response = await fetch('/api/projects');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			data = await response.json();
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
	{#if data.length === 0}
		Loading...
	{:else}
		{#each data as work}
			<div class="flex flex-col items-start">
				<h2 class="mb-2 font-doto text-2xl font-bold">{work.title}</h2>
				<div class="flex flex-row text-sm font-bold">
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
				<div>{work.description}</div>
			</div>
			<div class="mb-4 flex flex-wrap">
				{#each work.links as link}
					<Button.Root
						on:click={() => openLink(link.url)}
						class="my-2 mr-4 flex items-center rounded-lg bg-white px-4 py-2 text-black transition hover:scale-105 active:scale-95"
					>
						<img src={link.icon} alt={link.title} class="mr-2 h-6 w-6 object-contain" />
						{link.title}
					</Button.Root>
				{/each}
			</div>
		{/each}
	{/if}
</div>
