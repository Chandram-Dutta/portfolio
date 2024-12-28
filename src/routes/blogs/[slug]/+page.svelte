<script lang="ts">
	import { page } from '$app/state';
	import { gql, request } from 'graphql-request';
	import { onMount } from 'svelte';
	import { Carta, Markdown } from 'carta-md';
	import DOMPurify from 'isomorphic-dompurify';
	import { code } from '@cartamd/plugin-code';
	import { emoji } from '@cartamd/plugin-emoji';
	import { slash } from '@cartamd/plugin-slash';
	import { anchor } from '@cartamd/plugin-anchor';

	import '@cartamd/plugin-code/default.css';
	import '@cartamd/plugin-emoji/default.css';
	import '@cartamd/plugin-slash/default.css';
	import '@cartamd/plugin-anchor/default.css';
	import { goto } from '$app/navigation';
	import toast from 'svelte-hot-french-toast';

	type PostData = {
		publication: {
			post: {
				title: string;
				publishedAt: Date;
				content: {
					markdown: string;
					html: string;
				};
			};
		};
	};

	const carta = new Carta({
		sanitizer: DOMPurify.sanitize,
		theme: 'catppuccin-mocha',
		extensions: [
			code({
				theme: 'catppuccin-mocha'
			}),
			emoji(),
			slash(),
			anchor()
		]
	});

	const postQuery = gql`
		query Publication($slug: String!) {
			publication(host: "blogs.onlychan.xyz") {
				post(slug: $slug) {
					title
					publishedAt
					content {
						markdown
						html
					}
				}
			}
		}
	`;

	async function getPost(slug: string): Promise<PostData> {
		return await request('https://gql.hashnode.com', postQuery, { slug });
	}

	let data: PostData;
	let loading = true;
	let error: string | null = null;
	let renderedContent = '';

	$: if (data && !loading) {
		carta.render(data.publication.post.content.markdown).then((html) => {
			renderedContent = html;
		});
	}

	onMount(async () => {
		try {
			data = await getPost(page.params.slug);
			if (!data.publication.post) {
				throw new Error('Post not found.');
			}
		} catch (err) {
			toast.error('Error while loading post.');
			goto('/blogs');
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error: {error}</p>
{:else}
	<h1 class="font-doto text-2xl font-bold">{data.publication.post.title}</h1>
	<p class="mb-8">{new Date(data.publication.post.publishedAt).toLocaleDateString()}</p>
	<div class="mb-8 flex flex-col space-y-4" id="mdcontent">
		{@html renderedContent}
	</div>
{/if}

<style>
	#mdcontent :global {
		pre {
			padding: 1rem;
			border-radius: 0.5rem;
			overflow-x: auto;
		}
		a {
			color: #3182ce;
			text-decoration: underline;
		}
	}
</style>
