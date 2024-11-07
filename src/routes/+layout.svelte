<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<div class="min-h-screen flex justify-center items-center p-4 flex-col">
	<slot />

	<div class="fixed bottom-0 left-0 z-10 flex flex-row w-screen justify-center">
		<a href="/work">Work</a>
		<span class="mx-2">|</span>
		<a href="/resume">Resume</a>
		<span class="mx-2">|</span>
		<a href="/publications">Publications</a>
		<span class="mx-2">|</span>
		<a href="/socials">Socials</a>
	</div>
</div>
