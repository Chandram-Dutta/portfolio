<script lang="ts">
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

	onMount(load);
</script>

{#if data.length === 0}
	0
{:else}
	{#each data as work}
		{work.title}
	{/each}
{/if}
