<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	const birthDate = new Date(2004, 1, 11); 
	const today = new Date();
	
	let age = today.getFullYear() - birthDate.getFullYear();
	
	const hasBirthdayOccurred = 
		today.getMonth() > birthDate.getMonth() || 
		(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
	
	if (!hasBirthdayOccurred) {
		age--;
	}
</script>

<p class="mb-4">- hi, i am chandram. i should be {age} years old.</p>

<p class="mb-4">
	- rn i am majoring in electrical and electronics engineering at
	<ExternalLink href="https://vit.ac.in">vellore institute of technology</ExternalLink>.
</p>

<p class="mb-4">- i am working at <ExternalLink href="https://adora-app.com">adora inc.</ExternalLink> as a sde intern.</p>

<p>
	- in my free time, i play guitar, swim, cycle and <ExternalLink href="https://links.onlychan.xyz/x">
		post stuff on x</ExternalLink
	>.
</p>
