<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<div class="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
	<a href="/" class="btn btn-ghost text-xl">@chandram</a>
</div>
<div class="min-h-screen flex justify-center items-center">
	<div class="px-7 py-24"><slot /></div>
</div>
<!-- <div
	class="fixed bottom-0 left-0 w-full z-10 p-2 text-sm text-secondary-content flex flex-col md:flex-row justify-between bg-secondary items-center"
>
	<div class="text-center">Built using SvelteKit, Tailwind & DaisyUI. Deployed on Vercel.</div>
	<div>© Chandram Dutta 2024</div>
</div> -->
