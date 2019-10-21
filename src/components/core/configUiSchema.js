export const HisSociUiSchema = {
  uiSchema: {
  type: 'Categorization',
  options: {
    variant: 'stepper'
  },
  elements: [
    {
      type: 'Category',
      label: "HIS Stage",
      elements:[
        {
          type: 'Group',
          label: 'Technology',
          elements:[
          {
            type:"Group",
            label:"MFL",
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
                {
                  type: 'Control',
                  scope: '#/properties/tech1_current',
                  options:{
                    custom: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/tech1_future',
                  options:{
                    custom: true,
                    variant: 'outlined'
                  }
                }
              ]
            }]
          },
          {
            type:"Group",
            label:"Data Exchange",
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
                {
                  type: 'Control',
                  scope: '#/properties/tech2_current',
                  options:{
                    custom: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/tech2_future',
                  options:{
                    custom: true,
                    variant: 'outlined'
                  }
                }
              ]
            }]
          }]
      }]
    },
  ]
  },
}
