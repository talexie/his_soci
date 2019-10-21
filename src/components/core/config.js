//    '$schema': 'http://json-schema.org/draft-07/schema#',
//    $id:'https://engine.diteqafrica.com/schemas/lrs.json',
export const frsSchema = {
  schemas:{
    $id:'hisengine',
    definitions:{
      type:'object',
      identity:{
        type:'object',
          properties:{
            type:{
              type:'string'
            },
            value:{
              type:'string'
            }
          }
      },
      value: {
        type: 'object',
        properties:{
          value: { type: 'string' }
        }
      },
      systems: {
        type: 'object',
        properties:{
          type : { type: 'string' },
          fields: {
              type: 'array',
              items:[]
          },
          identifier: { type: 'object',
            properties:{
              value: { type : 'string' },
              format: { type: 'string' }
            }
          }
        }
      },
      commodity:{
        $id: "#commodity",
        type:'object',
        properties: {
          commodityId:{ type:'string'},
          commodityCategory: {
            type: 'string',
            enum: [
              'Test Kits',
              'TB Drugs',
              'ARV Drugs',
              'Other'
            ]},
          commodity:{ type:'string'},
          package: { type: 'string'},
          code: { type: 'string'},
          openingBalance: { type: 'string'},
          closingBalance: { type: 'string'},
          lossAdjustment: { type: 'string'},
          Quantity: { type: 'string'},
          comments: { type: 'string'},
        }
      }
    },
    dataExchange:{
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        id: { type: 'string' },
        source: { type: 'string',enum:['DHIS2','Other','SQL']},
        destination: { type: 'string',enum:['DHIS2','Other','SQL'] },
        metaDataType: { type: 'string' },
        dataType: { type: 'string' ,
          enum:['DataSets','Program','Program and Stages','Program Stage'],
        },
        format: { type: 'string',enum:['XML','CSV','EXCEL','JSON','ADX'] },
        enabled: { type: 'boolean' },
      },
    },
    hisstages:{
      type: 'object',
      properties:{
        tech1_current: { type: 'string'},
        tech1_future: { type: 'string'},
        tech2_current: { type: 'string'},
        tech2_future: { type: 'string'},
      }
    },
    connections:{
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string'},
        id: { type: 'string',readOnly: true },
        platform: { type: 'string',
        enum: [
          'DHIS2',
          'openMRS',
          'Custom'
        ]},
        hostname: { title:'Host Name',type: 'string' },
        protocol: { type: 'string',
        enum: [
          'REST',
          'SQL',
        ]},
        port: { title:'Port',type: 'string',contentMediaType:'application/json' },
        urlpath: { title:'URL path', type: 'string' },
        resourceType: { type: 'string',
          enum: [
            'Location',
            'Terminology',
            'Client',
            'HealthWorker',
            'Other'
          ],
        },
        format: { type: 'string',enum:['JSON','XML','ADX','QUERY'] },
        enabled: { type: 'boolean' },
        dataExchange: {
          type:'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              id: { type: 'string' },
              source: { type: 'string',enum:['DHIS2','Other','SQL']},
              destination: { type: 'string',enum:['DHIS2','Other','SQL'] },
              metaDataType: { type: 'string' },
              dataType: { type: 'string' ,
                enum:['DataSets','Program','Program and Stages','Program Stage'],
              },
              format: { type: 'string',enum:['XML','CSV','EXCEL','JSON','ADX'] },
              enabled: { type: 'boolean' },
            },
          }
        }

      },
      required: ['id','name','description','hostname','platform','protocol'],
      dependencies: {
        resourceType: ["dataExchange"],
        dataExchange: ["resourceType"]
      }
    },
    frs:{
      type:'object',
      properties:{
        identity:{
          '$ref':'#/schemas/definitions/identity'
        },
        location:{
          type:'object',
          properties: {
            current:{
              '$ref':'#/schemas/definitions/identity'
            },
            historic:{
              '$ref':'#/schemas/definitions/identity'
            }
          }
        }
      },
      required: ['identity']
    },
    elmis:{
      type:'object',
      properties: {
        id:{ 'title':'Order No',type:'string',readOnly: true },
        cycle: { type: 'string'},
        orderDate: { type: 'string'},
        orderDeadline: { type: 'string'},
        commodityType: { type: 'string'},
        emergency: { type: 'boolean'},
        location: { type: 'string'},
        commodities: {
          type: 'array',
          items: {
            type:'object',
            properties: {
              commodityId:{ type:'string'},
              commodityCategory: {
                type: 'string',
                enum: [
                  'Test Kits',
                  'TB Drugs',
                  'ARV Drugs',
                  'Other'
                ]},
              commodity:{ type:'string'},
              package: { type: 'string'},
              code: { type: 'string'},
              openingBalance: { type: 'string'},
              closingBalance: { type: 'string'},
              lossAdjustment: { type: 'string'},
              Quantity: { type: 'string'},
              comments: { type: 'string'},
            }
          }
        },
        approve:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              approveId:{ type:'string'},
              approveDate: { type: 'string'},
              approvedBy: { type: 'string'},
              approved: { type: 'boolean'},
              comments: { type: 'string'},
            }
          }
        },
        submit:{
          type:'object',
          properties: {
            submittedDate: { type: 'string'},
            submittedBy: { type: 'string'}
          }
        }
      }
    },
    eidsr:{
      type:'object',
      properties: {
        id:{ 'title':'Case No',type:'string',readOnly: true },
        symptomsDate: { type: 'string',format:'date'},
        notificationDate: { type: 'string',format:'date'},
        caseType: { type: 'string', enum:['Index','Contact','Suspect']},
        caseName: { type: 'string'},
        location: { type: 'string'},
        disease: { type: 'string'},
        vaccinated: { type: 'boolean'},
        updates: {
          type: 'array',
          items: {
            type:'object',
            properties: {
              statusId:{ type:'string'},
              outcome: {
                type: 'string',
                enum: [
                  'Referred in',
                  'Referred out',
                  'Died',
                  'Discharged'
                ]},
              referral:{ type:'string'},
              referralDate: { type: 'string',format:'date'},
              statusDate: { type: 'string',format:'date'},
              comments: { type: 'string'},
            }
          }
        },
        labRequest:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              labRequestId:{ type:'string'},
              labRequestDate: { type: 'string',format:'date'},
              labTestType: { type: 'string'},
              labTest: { type: 'boolean'},
              comments: { type: 'string'},
            }
          }
        },
        labResult:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              labResultId: { type: 'string'},
              labResultDate: { type: 'string',format:'date'},
              labResultType: { type: 'string'},
              labResult: { type: 'string'},
              labResultValue: { type: 'string'},
              labResultStatus: { type: 'string',enum:['Preliminary','Final']},
              confirmedDisease: { type: 'string'},
              comments: { type: 'string'}
            }
          }
        },
        contactTracing:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              contactDate: { type: 'string',format:'date'},
              contactName: { type: 'string'},
              contactLocation: { type: 'string'},
            }
          }
        },
        otherInvestigation:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              specialTreatment: { type: 'string'},
              submittedDate: { type: 'string'},
              submittedBy: { type: 'string'}
            }
          }
        },
        vaccination:{
          type: 'array',
          items: {
            type:'object',
            properties: {
              vaccinationDate: { type: 'string'},
              vaccine: { type: 'string'},
              dosage: { type: 'string'}
            }
          }
        }
      }
    },
  },
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
              label: 'System ID',
              options:{
                custom: true,
                generated: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/name',
              label: 'Connection Name',
              options:{
                custom: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/description',
              options:{
                custom: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/platform',
              options:{
                custom: false,
                variant: 'outlined',
                trim: true,
              }
            },
            {
              type: 'Control',
              scope: '#/properties/hostname',
              options:{
                custom: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/port',
              options:{
                fileInput: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/protocol',
              options:{
                custom: false,
                variant: 'outlined',
                format: 'radio'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/urlpath',
              options:{
                custom: true,
                variant: 'outlined'
              }
            },
            {
              type: 'Control',
              scope: '#/properties/resourceType',
              options:{
                custom: false,
                variant: 'outlined',
              }
            },
            {
              type: 'Control',
              scope: '#/properties/format',
              options:{
                custom: false,
                variant: 'outlined'
              },
              rule: {
                effect: 'DISABLE',
                condition: {
                  type: 'OR',
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
              label:"Test",
              scope: '#/properties/dataExchange',
              options:{
                tableLayout: false
              }
            }
          ]
        }]
      },
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
                scope: '#/properties/id'
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
                scope: '#/properties/id'
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

};
