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
		console.log('load');
		try {
			const response = await fetch('/api/socials');
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
		{#each data as social}
			<div class="my-2 flex flex-row items-center justify-center">
				<Button.Root
					on:click={() => openLink(social.link)}
					class="flex items-center justify-center rounded-lg bg-[#002379] px-4 py-2 transition hover:bg-[#002379]/95 active:scale-95"
				>
					<img
						src={social.icon}
						alt={social.social}
						class="mr-4 h-6 w-6 object-contain"
						style="width: 36px; height: 36px;"
					/>
					<span class="text-[#FF9F66]">{social.title}</span>
				</Button.Root>
			</div>
		{/each}
	{/if}
</div>
