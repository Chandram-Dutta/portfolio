<script lang="ts">
	import { onMount } from 'svelte';
	import toast from 'svelte-hot-french-toast';

	let data: Resources[] = $state([]);

	type Resources = {
		title: string;
		link: string;
	};

	async function load() {
		try {
			const response = await fetch('/api/resources');

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

here are some resources that i have enjyed reading and learning from. i hope you find them useful
too!

{#if data === null}
	Loading...
{:else}
	{#each data as resource}
		<div class="mt-4 flex flex-col items-start">
			<a class="transition hover:underline" target="_blank" href={resource.link}>
				- {resource.title}</a
			>
		</div>
	{/each}
{/if}
