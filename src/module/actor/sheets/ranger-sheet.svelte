<script lang="ts">
  import Profile from "../components/common/profile-image.svelte";
  import { rangerLoc as loc } from "../../../lang/constants/ranger";
  import type { RangerObject } from "./ranger-types";
  import type { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";
  import Health from "../components/common/Health.svelte";
  
  export let sheetData: { actor: ActorData; data: RangerObject };
 
  const { actor, data } = sheetData;
  const localize = (value: string) => (game as Game).i18n.localize(value);
</script>

<div class="standard-information">
  <div class="cage">
    <Profile actorImage={actor.img} actorName={actor.name} />
	<button>Ranger Stats</button>
  </div>

  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="level"
        >{localize(loc.level)}</label
      >
      <input
        type="text"
        id="level"
        name="data.level"
        bind:value={data.level}
      />
    </div>
  </div>
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="pronouns"
        >{localize(loc.pronouns)}</label
      >
      <input
        type="text"
        id="pronouns"
        name="data.pronouns"
        bind:value={data.pronouns}
      />
    </div>
  </div>
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="origin"
        >{localize(loc.origin)}</label
      >
      <input
        type="text"
        id="origin"
        name="data.origin"
        bind:value={data.origin}
      />
    </div>
  </div>
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="role"
        >{localize(loc.role)}</label
      >
      <input
        type="text"
        id="role"
        name="data.role"
        bind:value={data.role}
      />
    </div>
  </div>
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="languages"
        >{localize(loc.languages)}</label
      >
      <input
        type="text"
        id="languages"
        name="data.languages"
        bind:value={data.languages}
      />
    </div>
  </div>
</div>

<div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="description"
        >{localize(loc.description)}</label
      >
      <input
        type="text"
        id="description"
        name="data.description"
        bind:value={data.description}
      />
    </div>
  </div>

<div>
	<div>Personal Power</div>
	<Health healthData={data.health}></Health>
</div>

<nav />

<style>
  :global(.character) {
    background: green;
  }

  :global(.character > .window-content) {
    background: #fff;
  }

  label {
    color: #ff3e00;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>
