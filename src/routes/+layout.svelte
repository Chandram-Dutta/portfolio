<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { Toaster } from 'svelte-hot-french-toast';
	injectSpeedInsights();
</script>

<Toaster />

<div class="flex min-h-screen flex-col items-center justify-center p-4">
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
</div>
