<script lang="ts">
	import ExternalLink from './ExternalLink.svelte';
	import { fade, slide } from 'svelte/transition';

	let expanded = false;
</script>

<div class="relative mb-4">
	{#if expanded}
		<p transition:slide|local={{ duration: 300 }}>
			i started programming in around 2016 learning basic
			<ExternalLink href="https://en.wikipedia.org/wiki/HTML">html</ExternalLink>
			&
			<ExternalLink href="https://en.wikipedia.org/wiki/QBasic">QBasic</ExternalLink>. around 2018,
			i started learning
			<ExternalLink href="https://en.wikipedia.org/wiki/Java_(programming_language)"
				>java</ExternalLink
			>
			and absolutely fell in love with it. from basic cli stuff, i explored
			<ExternalLink href="https://en.wikipedia.org/wiki/Swing_(Java)">java swing</ExternalLink> & <ExternalLink
				href="https://en.wikipedia.org/wiki/JavaFX">javafx</ExternalLink
			>. around this time, i also picked up <ExternalLink href="https://www.python.org"
				>python</ExternalLink
			> and stuff like <ExternalLink href="https://en.wikipedia.org/wiki/Tkinter"
				>tkinter</ExternalLink
			>
			& . i also switched to a
			<ExternalLink href="https://elementary.io">linux machine</ExternalLink> and explored <ExternalLink
				href="https://vala.dev">vala</ExternalLink
			> and <ExternalLink href="https://www.gtk.org">gtk</ExternalLink>. from there in 2020, i was
			introduced to <ExternalLink href="https://www.flutter.dev">flutter</ExternalLink> and <ExternalLink
				href="https://www.dart.dev">dart</ExternalLink
			> and started my journey as an app dev. i developed 5+ apps as an <ExternalLink
				href="https://links.onlychan.xyz/playstore">indie dev</ExternalLink
			> and a few more as a <ExternalLink href="/work">freelancer</ExternalLink>. i also started
			<ExternalLink href="/work">interning</ExternalLink> around this time. during my time at university,
			i learned <ExternalLink href="https://swift.org">swift</ExternalLink>, <ExternalLink
				href="https://developer.apple.com/xcode/swiftui/">swiftui</ExternalLink
			>, <ExternalLink href="https://svelte.dev">sveltekit</ExternalLink>, and a few more languages
			and frameworks. in 2024, i won apple's <ExternalLink
				href="https://developer.apple.com/swift-student-challenge/"
				>swift student challenge</ExternalLink
			>. i have also <ExternalLink href="/publications">published a few research paper</ExternalLink
			> in the field of electronics and computer science. i continue to learn and explore new technologies
			and frameworks and am always open to new opportunities.
			<button class="inline-block text-blue-600" on:click={() => (expanded = false)}>
				show less
			</button>
		</p>
	{:else}
		<span transition:fade|local={{ duration: 200 }}>
			<p>
				i started programming in around 2016 learning basic
				<ExternalLink href="https://en.wikipedia.org/wiki/HTML">html</ExternalLink> &
				<ExternalLink href="https://en.wikipedia.org/wiki/QBasic">QBasic</ExternalLink>. around
				2018, i started learning java and absolutely fell in love with it...
				<button class="inline-block text-blue-600" on:click={() => (expanded = true)}
					>read more</button
				>
			</p>
		</span>
	{/if}
</div>
