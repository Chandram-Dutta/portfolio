<script lang="ts">
	export let href: string;
</script>

<a {href} class="underline" target="_blank">
	<slot />
</a>
