<script>
  export let propValue

  import { onMount, getContext } from 'svelte';
  import schema from '../schema/form.js';
  import data from '../schema/data.js';

  let bf;
  const { updateNode } = getContext('node'); // From parent

  const handleClick = ({ detail }) => {
    const data = bf.getData();

    if(!data.name) return;

    updateNode(data);
  }

  onMount(() => {
    if (window.brutusin) {
      // Initialize
      const BrutusinForms = brutusin["json-forms"];
      const container = document.getElementById('brutusinForms');

      bf = BrutusinForms.create(schema);
      bf.render(container, propValue);
    }
  });
</script>

<div id="brutusinForms">
  <button on:click={handleClick}>Update</button>
  &nbsp;
</div>