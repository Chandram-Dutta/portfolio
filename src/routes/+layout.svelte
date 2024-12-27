<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { Toaster } from 'svelte-hot-french-toast';
	injectSpeedInsights();
</script>

<Toaster />

<div class="m-8 flex flex-col">
	<div class="flex flex-wrap">
		<a
			target="_blank"
			class="mr-4 transition hover:underline"
			href="https://links.onlychan.xyz/resume">resume</a
		>
		<a class="mr-4 transition hover:underline" href="/work">work</a>
		<a class="mr-4 transition hover:underline" href="/socials">socials</a>
		<a class="mr-4 transition hover:underline" href="/publications">publications</a>
		<a
			target="_blank"
			class="mr-4 transition hover:underline"
			href="https://links.onlychan.xyz/blogs">blogs</a
		>
	</div>
	<h1 class="font-doto mt-4 text-4xl font-bold">
		<a class="transition hover:scale-110" href="/">chandram</a>
	</h1>
	<div class="mt-16"><slot /></div>
</div>

<!-- <div class="flex min-h-screen flex-col items-center justify-center p-4">
	<slot />

	<div class="fixed bottom-0 left-0 z-10 flex w-screen flex-row justify-center">
		<a href="/work">Work</a>
		<span class="mx-2">|</span>
		<a href="https://links.onlychan.xyz/resume">Resume</a>
		<span class="mx-2">|</span>
		<a href="/publications">Publications</a>
		<span class="mx-2">|</span>
		<a href="/socials">Socials</a>
		<span class="mx-2">|</span>
		<a href="https://links.onlychan.xyz/blogs">Blogs</a>
	</div>
</div> -->
