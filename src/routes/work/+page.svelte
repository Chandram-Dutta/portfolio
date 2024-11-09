<script lang="ts">
	import { Button } from 'bits-ui';
	import { onMount } from 'svelte';
	import toast from 'svelte-hot-french-toast';
	let data: Work[] = $state([]);

	type Work = {
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
		console.log('load');
		try {
			const response = await fetch('/api/work');
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
	{#if data.length === 0}
		Loading...
	{:else}
		{#each data as work}
			<div class="flex flex-col items-start p-2">
				<h2 class="text-2xl font-bold text-[#FF5F00]">{work.title}</h2>
				<div class="flex flex-row text-sm font-bold text-[#002379]">
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
			<div class="flex flex-wrap">
				{#each work.links as link}
					<Button.Root
						on:click={() => openLink(link.url)}
						class="my-2 mr-4 flex items-center rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
					>
						<img src={link.icon} alt={link.title} class="mr-2 h-6 w-6 object-contain" />
						{link.title}
					</Button.Root>
				{/each}
			</div>
		{/each}
	{/if}
</div>
