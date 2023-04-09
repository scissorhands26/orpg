<script lang="ts">
	export let data: any;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
	{#each data.exercises as exercise}
		<div
			class="bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-xl hover:bg-slate-900
			 hover:cursor-pointer text-white"
		>
			<h1 class="uppercase text-lg font-semibold truncate">{exercise.name}</h1>
			<div class="flex flex-row justify-between my-2">
				<div class="bg-blue-800 text-center rounded-lg p-2 text-xs font-semibold">
					{exercise.forceType}
				</div>
				<div class="bg-blue-700 text-center rounded-lg p-2 text-xs font-semibold">
					{exercise.type}
				</div>
				<div class="bg-blue-900 text-center rounded-lg p-2 text-xs font-semibold">
					{exercise.mechanics}
				</div>
				<div class="bg-cyan-600 text-center rounded-lg p-2 text-xs font-semibold">
					{exercise.experienceLevel}
				</div>
			</div>
			<div class="bg-cyan-600 text-center rounded-lg p-2 mb-2">
				Muscle Group: {exercise.targetMuscleGroup}
			</div>
			<div class="bg-cyan-600 text-center rounded-lg p-2 mb-2">
				Equipment: {exercise.equipmentRequired}
			</div>
			{#if exercise.secondaryMuscles.length > 0}
				<div class="bg-cyan-900 text-center rounded-lg p-2 mb-2">
					Secondary Muscles:
					<div class="flex justify-evenly">
						{#each exercise.secondaryMuscles.slice(0, 3) as secondaryMuscle}
							<div class="bg-cyan-700 rounded-lg p-2 my-2">{secondaryMuscle}</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="bg-cyan-900 text-center rounded-lg p-2 mb-2">Secondary Muscles: None</div>
			{/if}
		</div>
	{/each}
</div>
