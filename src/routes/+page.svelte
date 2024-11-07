<script>
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	onMount(() => {
		toast('Hello Darkness!', {
			position: 'top-right',
			icon: '👏',
			style: 'border-radius: 200px; background: #333; color: #fff;'
		});
	});
</script>

<Toaster />
<span class="text-[#002379] text-center block">
	Hi, I am <h1 class="inline text-[#FF5F00] text-7xl font-bold">Chandram</h1>
	, a
	<h3 class="inline text-[#FF5F00] text-2xl font-bold">developer</h3>
	& a
	<h3 class="inline text-[#FF5F00] text-2xl font-bold">student</h3>
	.
</span>
