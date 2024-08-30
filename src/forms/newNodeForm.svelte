<script>
  import { onMount, getContext } from 'svelte';
  import schema from '../schema/form.js';
  import data from '../schema/data.js';

  let bf;
  const { addNode } = getContext('node'); // From parent

  const handleClick = ({ detail }) => {
    const data = bf.getData();

    if(!data.name) return;

    addNode(data);
  }

  onMount(() => {
    if (window.brutusin) {
      // Initialize
      const BrutusinForms = brutusin["json-forms"];
      const container = document.getElementById('brutusinForms');

      bf = BrutusinForms.create(schema);
      bf.render(container, data);
    }
  });
</script>

<div id="brutusinForms">
  <button on:click={handleClick}>Create</button>
  &nbsp;
</div>