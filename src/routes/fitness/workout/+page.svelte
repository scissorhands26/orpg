<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	export let data: any;

	let minutes = 0;
	let seconds = 0;
	let sets = 0;
	let volume = 0;

	let exercises: any = writable([]);

	let showSelectExerciseModal = false;

	function startTimer() {
		const interval = setInterval(() => {
			seconds++;
			if (seconds >= 60) {
				seconds = 0;
				minutes++;
			}
		}, 1000);
	}

	async function addExercise(exerciseID: string) {
		exercises.update((exercises: string | any[]) => {
			if (exercises.length === 0) {
				return [exerciseID];
			} else {
				return [...exercises, exerciseID];
			}
		});
		console.log($exercises);
	}

	async function selectExercise() {
		console.log(showSelectExerciseModal);
		if (showSelectExerciseModal === true) {
			showSelectExerciseModal = false;
		} else {
			showSelectExerciseModal = true;
		}
	}

	onMount(() => {
		startTimer();
	});
</script>

<!-- 
<div>
	{JSON.stringify(data.exercises)}
</div> -->

{#if showSelectExerciseModal === true}
	<div class="fixed z-20 inset-0 overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
			<div class="bg-white rounded-lg p-4 relative z-30">
				<button
					on:click={selectExercise}
					class="absolute top-0 right-0 p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
				>
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span class="sr-only">Close</span>
					<div>asdf</div>
				</button>
				asdfasdfasdf
			</div>
		</div>
	</div>
{/if}

<div>
	<div class="flex flex-row justify-between">
		<div>
			<div class="mr-1">Duration:</div>
			<div class="flex flex-row">
				{#if minutes < 10}
					<div>0{minutes}</div>
				{:else}
					<div>{minutes}</div>
				{/if}
				<div>:</div>
				{#if seconds < 10}
					<div>0{seconds}</div>
				{:else}
					<div>{seconds}</div>
				{/if}
			</div>
		</div>
		<div>
			<div class="mr-1">Sets:</div>
			<div>{sets}</div>
		</div>
		<div>
			<div class="mr-1">Volume:</div>
			<div>{volume}</div>
		</div>
	</div>
	<div class="flex flex-row my-4">
		<button on:click={selectExercise} class="btn btn-primary w-full">Add Exercise</button>
	</div>
	<div class="flex flex-col">
		{#each $exercises as exercise}
			<div class="bg-slate-700 rounded-xl my-2">
				<div class="flex flex-row">
					{exercise}
				</div>
			</div>
		{/each}
	</div>
</div>
