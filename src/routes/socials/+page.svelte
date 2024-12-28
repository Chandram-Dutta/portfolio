<script lang="ts">
	import { Button } from 'bits-ui';
	import { onMount } from 'svelte';
	import toast from 'svelte-hot-french-toast';
	let data: Socials[] = $state([]);

	type Socials = {
		social: string;
		title: string;
		link: string;
		icon: string;
	};

	async function load() {
		try {
			const response = await fetch('/api/socials');

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
	{#if data === null}
		Loading...
	{:else}
		{#each data as social}
			<div class="my-2 flex flex-row">
				<a target="_blank" href={social.link}
					><p class="">
						<span class="font-doto text-2xl font-bold">{social.social}</span>:
						{social.title}
					</p>
				</a>
			</div>
		{/each}
	{/if}
</div>
