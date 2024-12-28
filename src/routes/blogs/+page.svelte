<script lang="ts">
	import { gql, request } from 'graphql-request';
	import { onMount } from 'svelte';

	type Post = {
		title: string;
		publishedAt: Date;
		slug: string;
	};

	type PublicationsData = {
		publication: {
			posts: {
				edges: {
					node: Post;
				}[];
			};
		};
	};

	const publicationsQuery = gql`
		query Publication {
			publication(host: "blogs.onlychan.xyz") {
				posts(first: 50) {
					edges {
						node {
							title
							publishedAt
							slug
						}
					}
				}
			}
		}
	`;

	async function getPublications(): Promise<PublicationsData> {
		return await request('https://gql.hashnode.com', publicationsQuery);
	}

	let data: PublicationsData;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			data = await getPublications();
		} catch (err) {
			console.error(err);
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
	{#each data.publication.posts.edges as { node }}
		<a href="/blogs/{node.slug}" class="mb-4">
			<h2 class="font-doto text-xl font-bold">{node.title}</h2>
			<p>{new Date(node.publishedAt).toLocaleDateString()}</p>
		</a>
	{/each}
{/if}
