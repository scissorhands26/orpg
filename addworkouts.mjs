import fs from 'fs';
const PocketBase = (await import('pocketbase')).default;

async function run() {
	const pb = new PocketBase('http://127.0.0.1:8090');

	let email = 'admin@admin.com';
	let password = '1234567890';

	const admin = await pb.admins.authWithPassword(email, password);

	console.log(admin);

	fs.readFile('exercises.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		let parsed = JSON.parse(data);

		const plainText = parsed[0].Instructions.join('\n');
		console.log(parsed[0].SecondaryMuscles);

		console.log(plainText);

		parsed.forEach(async (e) => {
			console.log(e);

			let plainTextInstructions = e.Instructions.join('\n');

			let sm = '[]';

			if (JSON.stringify(e.SecondaryMuscles) === JSON.stringify(['None'])) {
				sm = '[]';
			} else {
				sm = e.SecondaryMuscles;
				console.log(sm);
			}

			const a = {
				name: e.ExerciseName,
				targetMuscleGroup: e.TargetMuscleGroup,
				type: e.ExerciseType,
				equipmentRequired: e.EquipmentRequired,
				mechanics: e.Mechanics,
				forceType: e.ForceType,
				experienceLevel: e.ExperienceLevel,
				secondaryMuscles: sm,
				instructions: plainTextInstructions
			};

			setTimeout(async () => {
				const record = await pb.collection('exercises').create(a, { $autoCancel: false });
			}, 500);
		});
	});
}

run();
