export const HisSchemas = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  $id:'https://engine.diteqafrica.com/schemas/lrs.json',
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
      source: { type: 'string',enum:['DHIS2','Other','SQL'] },
      destination: { type: 'string',enum:['DHIS2','Other','SQL'] },
      metaDataType: { type: 'string' },
      dataType: { type: 'object' ,
        enum:['DataSets','Program','Program and Stages','Program Stage'],
      },
      format: { type: 'string',enum:['XML','CSV','EXCEL','JSON','ADX'] },
      enabled: { type: 'boolean' },
    },
  },
  connections:{
    type: 'object',
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      id: { type: 'string' },
      platform: { type: 'string',
      enum: [
        'DHIS2',
        'openMRS',
        'Custom'
      ]},
      hostname: { type: 'string' },
      protocol: { type: 'string',
      enum: [
        'REST',
        'SQL',
      ]},
      port: { type: 'string' },
      urlpath: { type: 'string' },
      resourceType: { type: 'string' ,
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
      orderId:{ type:'string'},
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
      caseId:{ type:'string',readOnly: true },
      symptomsDate: { type: 'string',format:'date'},
      notificationDate: { type: 'string',format:'date'},
      caseType: { type: 'string'},
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
}
