<script>
  import { onMount } from 'svelte';
  import JTabular from '../lib/jtabular.js';

  export let node;
  
  let content;

  // Call the function when the component mounts
  onMount(() => {
    loadTable(node);
  });

  $: {
    loadTable(node); // load table if another node is selected
  }

  function loadTable(data) {
    if (content) {
       // Clear existing content
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      content.appendChild(JTabular(data, 'vertical', ['resources', 'buildings', 'production', 'actions'], ['connections']));
    }
  }
</script>

<div class="show" id="table-container" bind:this={content}></div>
