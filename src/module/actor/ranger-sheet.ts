import FormApp from "./sheets/ranger-sheet.svelte";
import type { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";
import type { RangerObject } from "./sheets/ranger-types";

export class RangerSheet extends ActorSheet {
	app: any;
	constructor(data, options) {
		super(data, options);
		this.app = null;
	}

	/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: ["character", "sheet", "actor"],
		});
	}

	/** @override */
	get template() {
		return `systems/prrpg/dist/templates/character.hbs`;
	}

	get actorData() {
		return this.actor.data;
	}

	getDataObject(): { actor: ActorData; data: RangerObject } {
		return {
		  actor: this.actorData,
		  data: this.actorData.toObject().data,
		};
	  }

	// Injects Svelte app when initializing HTML
	async _injectHTML(html) {
		await super._injectHTML(html);
		this.app = new FormApp({
			target: html.find("form")[0],
			props: {
				sheetData: this.getDataObject(),
			},
		});
	}

	// Injects Svelte app when replacing innerHTML
	async _replaceHTML(element, html) {
		await super._replaceHTML(element, html);
		this.app = new FormApp({
			target: html.find("form")[0],
			props: {
				sheetData: this.getDataObject(),
			},
		});
	}
}
