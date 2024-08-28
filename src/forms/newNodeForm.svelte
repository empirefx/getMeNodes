<script>
  import { getContext } from 'svelte';
  import { Formly } from 'svelte-formly';
  
  const { addNode } = getContext('node'); // From parent
  const form_name = 'new_node_name';
  const fields = 
  [
    {
      type: 'input', // required
      name: 'name', // required
      attributes: {
        type: 'text',
        id: 'firstname', // required
        classes: ['form-control'],
        placeholder: 'A new node name',
        label: 'Name',
        autocomplete: 'off'
      },
    },
    {
      type: 'select',
      name: 'type',
      attributes: {
        id: 'type-select',
        classes: ['form-control'],
        label: 'Type',
      },
      extra: {
        options: [
          {
            value: 1,
            title: 'City'
          },
          {
            value: 2,
            title: 'Village'
          },
          {
            value: 3,
            title: 'Town'
          },
          {
            value: 4,
            title: 'Camp'
          }
        ]
      }
    },
  ];

  const onSubmit = ({ detail }) => {
    if(!detail.name) return;                                            // Need to actually reset
    const input = event.target.closest('form').querySelector('input');  // instead of doing this

    console.log(detail);
    const { valid, touched, ...res } = detail;

    addNode(res);
    input.value = '';
  };
</script>

{#key form_name}
<Formly 
  {form_name}
  {fields} 
  btnReset={{"text":"","classes":['invisible']}}
  on:submit={onSubmit}
/>
{/key}