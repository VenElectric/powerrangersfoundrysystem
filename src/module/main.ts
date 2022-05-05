import { PowerRanger } from "./actor/ranger.js"
import { RangerSheet } from "./actor/ranger-sheet.js"
import { preloadTemplates } from "./preloadTemplates.js";

const SYSTEM_NAME = "svelte";

Hooks.once("init", async () => {
	console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

	game[SYSTEM_NAME] = {
		PowerRanger,
	};
	CONFIG.Actor.documentClass = PowerRanger;

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("Character", RangerSheet, { makeDefault: true });

	await preloadTemplates(SYSTEM_NAME);
});
