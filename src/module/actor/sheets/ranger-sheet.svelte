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
  <div class="cage-justify">
    <Profile actorImage={actor.img} actorName={actor.name} />
	  <button>Ranger Stats</button>
    <!-- <div class="flex-group-center">
      <label class="resource-label" for="description"
        >{localize(loc.description)}</label
      > 
      <textarea
        id="description"
        name="data.description"
        value={data.description}
      />
    </div> -->
  </div>
 <!-- description should probably be a popup????-->
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="level"
        >{localize(loc.level)}</label
      >
      <input
        type="text"
        id="level"
        name="data.level"
        value={data.level}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="pronouns"
        >{localize(loc.pronouns)}</label
      >
      <input
        type="text"
        id="pronouns"
        name="data.pronouns"
        value={data.pronouns}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="origin"
        >{localize(loc.origin)}</label
      >
      <input
        type="text"
        id="origin"
        name="data.origin"
        value={data.origin}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="role"
        >{localize(loc.role)}</label
      >
      <input
        type="text"
        id="role"
        name="data.role"
        value={data.role}
      />
    </div>
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

<div class="trackers-cage">
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
  :global(.cage) {
    display: flex;
    flex-direction: column;
  }
  :global(.cage-grid-2){
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1em;
  }
  label {
    color: #ff3e00;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 100;
  }
  .flex-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1em;
  }
  .standard-information {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1em;
  }
  .trackers-cage {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1em;
    margin-top: 2em;
  }
  /*.roll-button {
    background-color: #F72119;
    box-shadow: 2px 2px 3px #f72119, -2px -2px 3px red, -1px 3px 5px red, 1px -3px 4px red;
    border: 0.4em red solid;
  }
  .roll-button:hover {
    box-shadow: 2px 2px 3px rgb(116, 10, 10), -2px -2px 3px rgb(116, 10, 10), -1px 3px 5px rgb(116, 10, 10), 1px -3px 4px rgb(116, 10, 10);
  } */
</style>
