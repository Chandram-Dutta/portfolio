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
		<a class="mr-4 transition hover:underline" href="/projects">projects</a>
		<a class="mr-4 transition hover:underline" href="/socials">socials</a>
		<a class="mr-4 transition hover:underline" href="/publications">publications</a>
		<a class="mr-4 transition hover:underline" href="/blogs">blogs</a>
		<a class="mr-4 transition hover:underline" href="/resources">resources</a>
	</div>
	<h1 class="mt-4 font-doto text-4xl font-bold">
		<a class="transition hover:scale-110" href="/">chandram</a>
	</h1>
	<div class="mt-16"><slot /></div>
</div>
