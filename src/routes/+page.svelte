<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import ExpandableText from '$lib/components/ExpandableText.svelte';

	const birthDate = new Date(2004, 2, 11);
	const age = new Date().getFullYear() - birthDate.getFullYear();
</script>

<p class="mb-4">hi, i am chandram. i should be {age} years old.</p>
<p class="mb-4">
	rn i am majoring in electrical and electronics engineering at
	<ExternalLink href="https://vit.ac.in">vellore institute of technology</ExternalLink>.
</p>

<ExpandableText></ExpandableText>

<p>
	in my free time, i play guitar, swim, cycle and <ExternalLink href="https://links.onlychan.xyz/x">
		post stuff on x</ExternalLink
	>.
</p>
