<script lang="ts">
	import { Button } from 'bits-ui';

	function openLink(link: string) {
		window.open(link, '_blank');
	}
</script>

<div class="flex flex-col lg:flex-row">
	<img
		style="max-width: 300px"
		class="object-contain"
		src="images/fib_ss.png"
		alt="Flutter Icon Browser Screenshot"
	/>
	<div class="flex flex-col items-center justify-center p-8">
		<!-- <div class="flex flex-row items-center p-8">
			<img class="h-6 w-6" src="icons/fib.svg" alt="Flutter Icon Browser Logo" />
			<div class="pl-4 text-center text-xl lg:text-4xl">Flutter Icon Browser</div>
		</div> -->
		<div class="flex flex-col items-center justify-center lg:flex-row">
			<Button.Root
				on:click={() => openLink('https://links.onlychan.xyz/fib-playstore')}
				class="my-2 mr-4 flex items-center rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
				>Play Store</Button.Root
			>
			<Button.Root
				on:click={() => openLink('https://links.onlychan.xyz/fib')}
				class="my-2 mr-4 flex items-center rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
				>Web</Button.Root
			>
			<Button.Root
				on:click={() => openLink('https://www.onlychan.xyz/fluttericonbrowser/privacy-policy')}
				class="my-2 mr-4 flex items-center rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
				>Privacy Policy</Button.Root
			>
			<Button.Root
				on:click={() =>
					openLink('https://www.onlychan.xyz/fluttericonbrowser/terms-and-conditions')}
				class="my-2 mr-4 flex items-center rounded-lg bg-[#FF9F66] px-4 py-2 transition hover:bg-[#FF9F66]/95 active:scale-95"
				>Terms & Conditions</Button.Root
			>
		</div>
	</div>
</div>
