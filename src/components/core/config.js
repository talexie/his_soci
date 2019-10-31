//    '$schema': 'http://json-schema.org/draft-07/schema#',
export const frsSchema = {
  schemas:{
    definitions:{
      assessment:{
        type:'object',
        properties:{
          evidence: { type:'string'},
          comments: { type:'string'},
          current: { type: 'string',
          enum:['0 = Not Applicable', 
            '1 = Emerging/Ad hoc',
            '2 = Repeatable',
            '3 = Defined',
            '4 = Managed',
            '5 = Optimized']},
          future: { type: 'string',
          enum:['0 = Not Applicable', 
            '1 = Emerging/Ad hoc',
            '2 = Repeatable',
            '3 = Defined',
            '4 = Managed',
            '5 = Optimized']},
        }
      }
    },
    background:{
      type:'object',
      properties:{
        hisType: { type: 'string'},
        purpose: { type: 'string'},
        mainChallenge: { type: 'string'},
        coverage:{
          type:'array',
          items:{
            type: 'object',
            properties:{
              level: { type: 'string', enum:['Region','District/Subcounty','Facility']},
              totalNumber: { type: 'integer'},
              hisCoverageNumber: { type: 'integer'},
              hisStaff: { type: 'integer'},
              comments: { type: 'string'}
            }
          }
        },
        stakeholders:{
          type: 'array',
          items: {
            type: 'object',
            properties:{
              id:{ type: 'string'},
              surname: { type: 'string'},
              firstname: { type: 'string'},
              organization: { type: 'string'},
              domain: { type: 'string'},
              comments: { type: 'string'}
            }
          }
        }
      }
    },
    hisstages:{
      type: 'object',
      properties:{
        tech1_evidence: { type:'string'},
        tech1_comments: { type:'string'},
        tech1_current: { type: 'string',
        enum:['0 = Not Applicable', 
          '1 = Emerging/Ad hoc',
          '2 = Repeatable',
          '3 = Defined',
          '4 = Managed',
          '5 = Optimized']},
        tech1_future: { type: 'string',
        enum:['0 = Not Applicable', 
          '1 = Emerging/Ad hoc',
          '2 = Repeatable',
          '3 = Defined',
          '4 = Managed',
          '5 = Optimized']},
        tech2_evidence: { type:'string'},
        tech2_comments: { type:'string'},
        tech2_current: { type: 'string',
        enum:['0 = Not Applicable', 
          '1 = Emerging/Ad hoc',
          '2 = Repeatable',
          '3 = Defined',
          '4 = Managed',
          '5 = Optimized']},
        tech2_future: { type: 'string',
        enum:['0 = Not Applicable', 
          '1 = Emerging/Ad hoc',
          '2 = Repeatable',
          '3 = Defined',
          '4 = Managed',
          '5 = Optimized']},
      },
      me_plan:{
        "$ref":"#/definitions/assessment"
      },
      his_strategic_planning:{
        "$ref":"#/definitions/assessment"
      },
      his_policy_regulation:{
        "$ref":"#/definitions/assessment"
      },
      policy_compliance_enforcement:{
        "$ref":"#/definitions/assessment"
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
      label: 'Assessment Background',
      elements:[
        {
          type:'VerticalLayout',
          elements:[
            {
              type:'Control',
              scope: '#/properties/hisType',
              options:{
                custom: true,
                variant: 'outlined'
              }
            },
            {
              type:'Control',
              scope: '#/properties/purpose',
              options:{
                custom: true,
                multi: true,
                rows:2,
                variant: 'outlined'
              }
            },
            {
              type:'Control',
              scope: '#/properties/mainChallenge',
              options:{
                custom: true,
                multi: true,
                rows: 2,
                variant: 'outlined'
              }
            },
            {
              type:'Group',
              label:  false ,
              elements:[
                {
                  type:'Control',
                  label: false,
                  extraText: 'Please provide the following information regarding the area covered by the HIS to be assessed.Only complete the boxes that apply to this HIS.',
                  scope:'#/properties/coverage',
                  options:{
                    tableLayout: false,
                    detail:{
                      type:'HorizontalLayout',
                      elements:[
                        {
                          type:'Control',
                          scope: '#/properties/level',
                          options:{
                            select: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/totalNumber',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/hisCoverageNumber',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/hisStaff',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/comments',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                      ]
                    }
                  },
                },
                {
                  type:'Control',
                  label: false,
                  extraText:"Identify key organizations and stakeholders that should be included in the assessment process (e.g., relevant ministries, donors, nongovernmental organizations [NGOs], etc.).Names of individuals will not be included in the final analysis or report.",
                  scope:'#/properties/stakeholders',
                  options:{
                    tableLayout: false,
                    detail:{
                      type:'HorizontalLayout',
                      elements:[
                        {
                          type:'Control',
                          scope: '#/properties/id',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/surname',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/firstname',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/organization',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/domain',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                        {
                          type:'Control',
                          scope: '#/properties/comments',
                          options:{
                            custom: true,
                            variant: 'outlined'
                          }
                        },
                      ]
                    }
                  }
                }
              ]
            }

          ]
        }
      ]
    },
    {
        type: 'Category',
        label: "I. HIS Leadership and Governance",
        elements:[
        {
          type: 'Group',
          label: 'I.A HIS Strategic Plan or HIS Strategy',
          level: 1,
          elements:[
          {
            type:"Group",
            label:"I.A.1 HIS Strategic planning",
            level: 2,
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
              {
                type: 'Control',
                label: "Current Status",
                scope: '#/properties/his_strategic_planning/properties/current',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                label: "Goal Status",
                scope: '#/properties/his_strategic_planning/properties/future',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                label: "Evidence",
                scope: '#/properties/his_strategic_planning/properties/evidence',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2
                }
              },
              {
                type: 'Control',
                label:"Comments",
                scope: '#/properties/his_strategic_planning/properties/comments',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2,
                }
              }]
            }]
          },
          {
            type:"Group",
            label:"I.A.2 M&E Plan",
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/me_plan/properties/current',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/me_plan/properties/future',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/me_plan/properties/evidence',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2,
                }
              },
              {
                type: 'Control',
                scope: '#/properties/me_plan/properties/comments',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2
                }
              }]
            }]
          },]
        },
        {
          type: 'Group',
          label: 'I.B Policy, Legal, and Regulatory Framework, and Compliance',
          level: 1,
          elements:[
          {
            type:"Group",
            label:"I.B.1 Existence of HIS policies and legislation",
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/his_policy_regulation/properties/current',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/his_policy_regulation/properties/future',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/his_policy_regulation/properties/evidence',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2,
                }
              },
              {
                type: 'Control',
                scope: '#/properties/his_policy_regulation/properties/comments',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2
                }
              }]
            }]
          },
                    {
            type:"Group",
            label:"I.B.2 Policy compliance enforcement",
            elements:[
            {
              type: 'HorizontalLayout',
              elements: [
              {
                type: 'Control',
                scope: '#/properties/policy_compliance_enforcement/properties/current',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/policy_compliance_enforcement/properties/future',
                options:{
                  custom: false,
                  select: true,
                  variant: 'outlined'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/policy_compliance_enforcement/properties/evidence',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2,
                }
              },
              {
                type: 'Control',
                scope: '#/properties/policy_compliance_enforcement/properties/comments',
                options:{
                  custom: true,
                  variant: 'outlined',
                  multi: true,
                  rows: 2
                }
              }]
            }]
          },]
      }]
    },
    {
        type: 'Category',
        label: "II.HIS Management and Workforce",
        elements:[
          {
            type: 'Group',
            label: 'II.A HIS Workforce Capacity and Development',
            elements:[
            {
              type:"Group",
              label:"II.A.1 HIS competencies (knowledge, skills, and abilities)",
              elements:[
              {
                type: 'HorizontalLayout',
                elements: [
                  {
                    type: 'Control',
                    scope: '#/properties/tech1_current',
                    options:{
                      select: true,
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
              label:"II.A.2 HIS training and education (includes continuous professional development)",
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
    },]
  },
};
