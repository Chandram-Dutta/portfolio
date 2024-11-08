<script lang="ts">
	import toast, { Toaster } from 'svelte-hot-french-toast';

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

	let data: Work[] = [];

	const makeToast = () => {
		toast.success('Hello, World!');
	};

	// async function load() {
	// 	toast.error("This didn't work.");

	// 	try {
	// 		const response = await fetch('/api/work');
	// 		if (!response.ok) {
	// 			throw new Error('Failed to fetch data');
	// 		}
	// 		data = await response.json();
	// 	} catch (err) {
	// 		console.error(err);
	// 		// toast.error("This didn't work.");
	// 		// if (err instanceof Error) {
	// 		// 	error.set(err.message);
	// 		// } else {
	// 		// 	error.set('An unknown error occurred');
	// 		// }
	// 	}
	// }

	// onMount(load);
</script>

<div class="flex flex-col">
	<button on:click={makeToast}>Toast</button>

	{#if data.length === 0}
		Loading...
	{:else}
		{#each data as work}
			<div class="flex flex-col items-start p-2">
				<h2 class="font-bold text-2xl">{work.title}</h2>
				<div class="flex flex-row text-sm">
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
