export const HisUiSchema: {
  setupUiSchema: {
    type: 'Categorization',
    options: {
      variant: 'stepper'
    },
    elements: [
      {
        type: 'Category',
        label: 'Connections',
        elements:[{
          type: 'VerticalLayout',
          elements:[
            {
              type: 'Control',
              scope: '#/properties/id',
            },
            {
              type: 'Control',
              scope: '#/properties/name',
            },
            {
              type: 'Control',
              scope: '#/properties/description',
            },
            {
              type: 'Control',
              scope: '#/properties/platform',
            },
            {
              type: 'Control',
              scope: '#/properties/hostname',
            },
            {
              type: 'Control',
              scope: '#/properties/protocol',
            },
            {
              type: 'Control',
              scope: '#/properties/urlpath',
            },
            {
              type: 'Control',
              scope: '#/properties/resourceType',
            },
            {
              type: 'Control',
              scope: '#/properties/format',
              rule: {
                effect: 'DISABLE',
                condition: {
                  type: 'AND',
                  conditions:[
                  {
                    scope: '#/properties/enabled',
                    schema: {
                      const: true
                    },
                  }]
                }
              }
            },
            {
              type: 'Control',
              scope: '#/properties/enabled',
            },
          ]
        }]
      },
      {
        type: 'Category',
        label: "Other Parameters",
        elements:[
          {
          type: 'HorizontalLayout',
          label: 'dataExchange',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/id',
            },
            {
              type: 'Control',
              scope: '#/properties/name',
            },
            {
              type: 'Control',
              scope: '#/properties/description',
            },
            {
              type: 'Control',
              scope: '#/properties/source',
            },
            {
              type: 'Control',
              scope: '#/properties/destination',
            },
            {
              type: 'Control',
              scope: '#/properties/metaDataType',
            },
            {
              type: 'Control',
              scope: '#/properties/dataType',
            },
            {
              type: 'Control',
              scope: '#/properties/format',
            },
            {
              type: 'Control',
              scope: '#/properties/enabled',
            },
          ]
        }]
      },
    ]
  },
  elmisUiSchema: {
    type: 'Categorization',
    options: {
      variant: 'stepper'
    },
    elements: [
      {
        type: 'Category',
        label: 'Order',
        elements:[{
          type: 'VerticalLayout',
          elements:[
          {
            type: 'HorizontalLayout',
            elements:[
            {
              type: 'VerticalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/orderId'
              },
              {
                type: 'Control',
                scope: '#/properties/location'
              },
              {
                type: 'Control',
                scope: '#/properties/commodityType'
              },
              {
                type: 'Control',
                scope: '#/properties/emergency'
              }]
            },
            {
              type: 'VerticalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/orderDate'
              },
              {
                type: 'Control',
                scope: '#/properties/orderDeadline'
              },
              {
                type: 'Control',
                scope: '#/properties/cycle'
              }]
            }]
          },
          {
            type: 'HorizontalLayout',
            label: ' Order Details',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/commodities',
              }
            ]
          }]
        }]
      },
      {
        type: 'Category',
        label: "Checkout",
      },
      {
        type: 'Category',
        label: "Approval",
        elements:[
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/approve'
              }
            ]
          }
        ]
      },
      {
        type: 'Category',
        label: "Payment",
      },
      {
        type: 'Category',
        label: "Tracking",
      },
    ]
  },
  eidsrUiSchema: {
    type: 'Categorization',
    options: {
      variant: 'stepper'
    },
    elements: [
      {
        type: 'Category',
        label: 'Registration',
        elements:[{
          type: 'VerticalLayout',
          elements:[
          {
            type: 'HorizontalLayout',
            elements:[
            {
              type: 'VerticalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/caseId'
              },
              {
                type: 'Control',
                scope: '#/properties/disease'
              },
              {
                type: 'Control',
                scope: '#/properties/location'
              },
              {
                type: 'Control',
                scope: '#/properties/caseType'
              }]
            },
            {
              type: 'VerticalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/symptomsDate'
              },
              {
                type: 'Control',
                scope: '#/properties/notificationDate'
              },
              {
                type: 'Control',
                scope: '#/properties/caseName'
              }]
            }]
          },
          {
            type: 'HorizontalLayout',
            label: 'Case Updates',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/updates',
              }
            ]
          }]
        }]
      },
      {
        type: 'Category',
        label: "Lab Request",
        elements:[{
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/labRequest',
            }
          ]
        }]
      },
      {
        type: 'Category',
        label: "Lab Result",
        elements:[{
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/labResult',
            }
          ]
        }]
      },
      {
        type: 'Category',
        label: "Contact Tracing",
        elements:[{
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/contactTracing',
            }
          ]
        }]
      },
      {
        type: 'Category',
        label: "Other Investigation",
        elements:[{
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/otherInvestigation',
            }
          ]
        }]
      },
      {
        type: 'Category',
        label: "Vaccines",
        elements:[
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/vaccination',
            }
          ]
        }]
      },
    ]
  },

}
