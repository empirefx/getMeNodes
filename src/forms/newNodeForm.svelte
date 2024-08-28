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

    console.log(detail);
    const { valid, touched, ...res } = detail;
    console.log(res);

    addNode(res);
    event.target.reset(); // reset form
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