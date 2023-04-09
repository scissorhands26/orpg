<script lang="ts">
	export let data: any;
</script>

<h1 class="text-3xl font-bold">
	<div>
		Welcome to the SvelteKit & PocketBase Project, {data?.user.name || ''}! 👋
	</div>
	{#if data?.user}
		<a href="/fitness/workout" class="btn btn-outline">Workout</a>
		<a href="/fitness/exercises" class="btn btn-outline">Exercises</a>
	{/if}
</h1>
