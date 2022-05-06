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
  <h2>Health</h2>
  <input
    type="number"
    name="data.health.current"
    value={healthData.current}
    style="display:none;width:1%;"
  />
  <input
    type="number"
    name="data.health.damage"
    value={healthData.damage}
    style="display:none;width:1%;"
  />
  <div class="cage-grid-2">
    <div class="health-label">
      <label for="total">Total Health</label>
      <input
        id="total"
        name="data.health.total"
        value={healthData.total}
        style:width="10vw"
        on:change={() => (healthData.total = this.value)}
      />
    </div>
    <ul>
      {#each Array(10) as i, index}
        {#if healthData.damage >= index + 1}
          <li class="health-fill" on:click={() => updateHealth(index + 1)}>
            x
          </li>
        {:else}
          <li class="health-fill" on:click={() => updateHealth(index + 1)} />
        {/if}
      {/each}
    </ul>
  </div>
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    /* display: flex;
    flex-wrap: wrap; */
    list-style-type: none;
    margin-top: 0;
    margin-left: 0;
    padding-left: 0;
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
  .health-cage {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }
  .health-label {
    margin: 1em;
    margin-left: 0
  }
</style>
