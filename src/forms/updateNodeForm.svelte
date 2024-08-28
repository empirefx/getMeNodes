<script>
  export let propValue

  import { getContext } from 'svelte';
  import { Formly } from 'svelte-formly';
  
  const { updateNode } = getContext('node'); // From parent
  const form_name = 'update_node_name';
  const fields = [
    {
      type: 'input', // required
      name: 'name', // required
      value: propValue,
      attributes: {
        type: 'text',
        id: 'firstname', // required
        classes: ['form-control'],
        autocomplete: 'off'
      },
    }
  ];

  const onUpdate = ({ detail }) => {
    updateNode(detail.name);
  };
</script>

<Formly 
  {form_name}
  {fields} 
  btnReset={{"text":"","classes":['invisible']}}
  btnSubmit={{"text":``,"classes":['invisible']}} 
  on:update={onUpdate}
  realtime={true}
/>