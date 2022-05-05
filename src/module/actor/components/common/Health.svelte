<script lang="ts">
  export let healthData: { current: number; total: number; damage: number };

  function updateHealth(value: number) {
    healthData.damage = value;
    if (value <= healthData.current) {
      healthData.current = value;
    } else {
      const difference = value - healthData.current;
      healthData.current = healthData.current + difference;
    }
  }
</script>

<div class="health-flex">
  <span>Health</span>
  <input
    type="number"
    id="strength"
    name="data.health.current"
    value={healthData.current}
    style="display:none;width:1%;"
  />
  <label for="total">Total Health</label>
  <input id="total" name="data.health.total" value={healthData.total} />
  <ul>
    {#each Array(healthData.total) as i, index}
      {#if healthData.damage >= index + 1}
        <li class="health-fill" on:click={() => updateHealth(index + 1)}>x</li>
      {:else}
        <li class="health-fill" on:click={() => updateHealth(index + 1)} />
      {/if}
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    list-style-type: none;
    margin-top: 0;
  }
  li {
    border: solid black;
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.1em;
    margin-left: 0.1em;
    border-radius: 50%;
  }
  .health-fill {
    background-color: red;
  }
  .health-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.2em;
  }
</style>
