//    '$schema': 'http://json-schema.org/draft-07/schema#',
export const frsSchema = {
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
  type:'object',
  properties:
  {
    hisstages:{
      type: 'object',
      properties:{
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
        me_plan:{
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
        },
        his_strategic_planning:{
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
        },
        his_policy_regulation:{
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
        },
        policy_compliance_enforcement:{
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
        },
        his_leadership_coordination:{
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
        },
        his_organization_structure_function:{
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
        },
        hr_policy:{
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
        },
        his_financing_plan:{
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
        },
        resource_mobilization:{
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
        },
        reliable_power_electricity:{
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
        },
        ict_business_infrastructure:{
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
        },
        hardware:{
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
        },
      },
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
                scope: '#/properties/background/properties/hisType',
                options:{
                  custom: true,
                  variant: 'outlined'
                }
              },
              {
                type:'Control',
                scope: '#/properties/background/properties/purpose',
                options:{
                  custom: true,
                  multi: true,
                  rows:2,
                  variant: 'outlined'
                }
              },
              {
                type:'Control',
                scope: '#/properties/background/properties/mainChallenge',
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
                    scope:'#/properties/background/properties/coverage',
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
                    scope:'#/properties/background/properties/stakeholders',
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
              code:"I.A.1",
              label:"HIS Strategic planning",
              extraText:"An HIS strategic plan sets out, in the context of the health priorities of the country, a vision for management and use of health information (electronic or other), a plan of action for delivering the vision, and arrangements for M&E. A country/organization may have either an eHealth strategy specific to electronic HIS, a broader HIS strategy, or documented strategies for each (eHEalth and HIS). ",
              options:{
                customGroup: true,
                grid:true
              },
              elements:[
              {
                type: 'HorizontalLayout',
                elements: [
                {
                  type: 'Control',
                  label: "Current Status",
                  scope: '#/properties/his_strategic_planning/properties/current',
                  options:{
                    select: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  label: "Goal Status",
                  scope: '#/properties/his_strategic_planning/properties/future',
                  options:{
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
              code:"I.A.2",
              label:"M&E Plan",
              extraText:"A framework for regular evaluation (both formative and summative) of HIS activities and implementations to measure progress on milestones and goals in the delivery of healthcare services and to ensure alignment of HIS activities with HIS strategy and the desired impact on service delivery.",
              options:{
                customGroup: true,
                grid:true
              },
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
              code:'I.B.1',
              label:"Existence of HIS policies and legislation",
              extraText:"Documented HIS policies and legislation that outline a deliberate system of principles to guide decisions and achieve HIS outcomes. This framework designates an appropriate entity to oversee adherence to procedures and policies related to data management, data sharing and use, privacy and security, and business process continuity.",
              options:{
                customGroup: true,
                grid:true
              },
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
              code: "I.B.2",
              label:"I.B.2 Policy compliance enforcement",
              extraText:"Specified mechanisms and regulatory agency to ensure adherence to organizational policies, procedures, and best practices related to HIS, including standards for data exchange, messaging, and security. It also means adherence to applicable laws, relevant industry standards, and internal policies (e.g., codes of conduct).",
              options:{
                customGroup: true,
                grid:true
              },
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
          },
          {
            type: 'Group',
            label: 'I.C HIS Leadership and Governance Organizational Structures and Functions',
            level: 1,
            elements:[
            {
              type:"Group",
              code: "I.C.1",
              label:"HIS leadership and coordination",
              extraText:"The exercise of technical, political, and administrative authority to manage national HIS affairs at all levels of a country’s health system. The governance structure consists of the mechanisms, processes, and institutions through which actors and stakeholders articulate their interests, exercise their rights, meet their obligations, mediate their differences, and oversee the functioning of the HIS.",
              options:{
                customGroup: true,
                grid:true
              },
              elements:[
              {
                type: 'HorizontalLayout',
                elements: [
                {
                  type: 'Control',
                  scope: '#/properties/his_leadership_coordination/properties/current',
                  options:{
                    custom: false,
                    select: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_leadership_coordination/properties/future',
                  options:{
                    custom: false,
                    select: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_leadership_coordination/properties/evidence',
                  options:{
                    custom: true,
                    variant: 'outlined',
                    multi: true,
                    rows: 2,
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_leadership_coordination/properties/comments',
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
              code:"I.C.2",
              label:"HIS organization structure and function",
              extraText:"Defined organizational structures and process, including job titles and clear descriptions of duties and responsibilities.",
              options:{
                customGroup: true,
                grid:true
              },
              elements:[
              {
                type: 'HorizontalLayout',
                elements: [
                {
                  type: 'Control',
                  scope: '#/properties/his_organization_structure_function/properties/current',
                  options:{
                    custom: false,
                    select: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_organization_structure_function/properties/future',
                  options:{
                    custom: false,
                    select: true,
                    variant: 'outlined'
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_organization_structure_function/properties/evidence',
                  options:{
                    custom: true,
                    variant: 'outlined',
                    multi: true,
                    rows: 2,
                  }
                },
                {
                  type: 'Control',
                  scope: '#/properties/his_organization_structure_function/properties/comments',
                  options:{
                    custom: true,
                    variant: 'outlined',
                    multi: true,
                    rows: 2
                  }
                }]
              }]
            },]
          }
        ]
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
                        label: "Current Status",
                        scope: '#/properties/his_leadership_coordination/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_leadership_coordination/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_leadership_coordination/properties/evidence',
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
                        scope: '#/properties/his_leadership_coordination/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
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
                        label: "Current Status",
                        scope: '#/properties/his_organization_structure_function/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_organization_structure_function/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_organization_structure_function/properties/evidence',
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
                        scope: '#/properties/his_organization_structure_function/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type:"Group",
                label:"II.A.3 HR policy",
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/hr_policy/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/hr_policy/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/hr_policy/properties/evidence',
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
                        scope: '#/properties/hr_policy/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'Group',
            label: 'II.B Financial Management',
            elements:[
              {
                type:"Group",
                label:"II.B.1 HIS financing plan",
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/his_financing_plan/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_financing_plan/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_financing_plan/properties/evidence',
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
                        scope: '#/properties/his_financing_plan/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type:"Group",
                label:"II.B.2 Resource mobilization",
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/resource_mobilization/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/resource_mobilization/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/resource_mobilization/properties/evidence',
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
                        scope: '#/properties/resource_mobilization/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'Category',
        label: "III.HIS Information and Communication Technologies (ICT) Infrastructure",
        elements:[
          {
            type: 'Group',
            label: 'III.A Operations and Maintenance',
            elements:[
              {
                type:"Group",
                label:"Reliable power/electricity",
                code:"III.A.1",
                extraText:"Supply of power for relevant offices to enable use of health information systems for management and use of health (individual, population, and program) data.",
                options:{
                  customGroup: true,
                  grid:true
                },
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/reliable_power_electricity/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/reliable_power_electricity/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/reliable_power_electricity/properties/evidence',
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
                        scope: '#/properties/reliable_power_electricity/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type:"Group",
                label:"ICT business infrastructure",
                code:"III.A.2",
                extraText:"Design and planning, operations management, and technical support for HIS ICT infrastructure maintenance.",
                options:{
                  customGroup: true,
                  grid:true
                },
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/ict_business_infrastructure/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/ict_business_infrastructure/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/ict_business_infrastructure/properties/evidence',
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
                        scope: '#/properties/ict_business_infrastructure/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type:"Group",
                label:"Hardware",
                code:"III.A.3",
                extraText:"An assembly of tangible physical parts of a system of computers, including servers and virtual private networks (VPNs), which forms the foundation upon which activities for HIS and electronic exchange across services and geographic and health sector boundaries are implemented. ",
                options:{
                  customGroup: true,
                  grid:true
                },
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/hardware/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/hardware/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/hardware/properties/evidence',
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
                        scope: '#/properties/hardware/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'Group',
            label: 'III.B Communication Network (LAN and WAN)',
            elements:[
              {
                type:"Group",
                label:"Networks and Internet connectivity",
                code:"III.B.1",
                extraText:"Use of necessary components such as routers, switches, and gateways to connect the parts of a network to one another.",
                options:{
                  customGroup: true,
                  grid:true
                },
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/networks_internet_connectivity/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/networks_internet_connectivity/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/networks_internet_connectivity/properties/evidence',
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
                        scope: '#/properties/networks_internet_connectivity/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            type: 'Group',
            label: 'III.C Business Continuity',
            elements:[
              {
                type:"Group",
                label:"Business continuity and processes and policies",
                code:"III.C.1",
                extraText:"Business continuity is about devising plans and strategies that enable an organization to continue business operations and enable it to recover quickly and effectively from any type of disruption, whatever its size or cause.",
                options:{
                  customGroup: true,
                  grid:true
                },
                elements:[
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: "Current Status",
                        scope: '#/properties/business_continuity_processes_policies/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/business_continuity_processes_policies/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/business_continuity_processes_policies/properties/evidence',
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
                        scope: '#/properties/business_continuity_processes_policies/properties/comments',
                        options:{
                          custom: true,
                          variant: 'outlined',
                          multi: true,
                          rows: 2,
                        }
                      }
                    ]
                  }
                ]
              },
            ]
          },
        ]
      },
      {
        type: 'Category',
        label: "IV.HIS Standards and Interoperability",
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
                      label: "Current Status",
                      scope: '#/properties/his_leadership_coordination/properties/current',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Goal Status",
                      scope: '#/properties/his_leadership_coordination/properties/future',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Evidence",
                      scope: '#/properties/his_leadership_coordination/properties/evidence',
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
                      scope: '#/properties/his_leadership_coordination/properties/comments',
                      options:{
                        custom: true,
                        variant: 'outlined',
                        multi: true,
                        rows: 2,
                      }
                    }
                  ]
                }
              ]
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
                      label: "Current Status",
                      scope: '#/properties/his_organization_structure_function/properties/current',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Goal Status",
                      scope: '#/properties/his_organization_structure_function/properties/future',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Evidence",
                      scope: '#/properties/his_organization_structure_function/properties/evidence',
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
                      scope: '#/properties/his_organization_structure_function/properties/comments',
                      options:{
                        custom: true,
                        variant: 'outlined',
                        multi: true,
                        rows: 2,
                      }
                    }
                  ]
                }
              ]
            }
          ]
          }
        ]
      },
      {
        type: 'Category',
        label: "V.HIS Data Quality and Use",
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
                      label: "Current Status",
                      scope: '#/properties/his_leadership_coordination/properties/current',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Goal Status",
                      scope: '#/properties/his_leadership_coordination/properties/future',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Evidence",
                      scope: '#/properties/his_leadership_coordination/properties/evidence',
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
                      scope: '#/properties/his_leadership_coordination/properties/comments',
                      options:{
                        custom: true,
                        variant: 'outlined',
                        multi: true,
                        rows: 2,
                      }
                    }
                  ]
                }
              ]
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
                      label: "Current Status",
                      scope: '#/properties/his_organization_structure_function/properties/current',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Goal Status",
                      scope: '#/properties/his_organization_structure_function/properties/future',
                      options:{
                        select: true,
                        variant: 'outlined'
                      }
                    },
                    {
                      type: 'Control',
                      label: "Evidence",
                      scope: '#/properties/his_organization_structure_function/properties/evidence',
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
                      scope: '#/properties/his_organization_structure_function/properties/comments',
                      options:{
                        custom: true,
                        variant: 'outlined',
                        multi: true,
                        rows: 2,
                      }
                    }
                  ]
                }
              ]
            }
          ]
          }
        ]
      },
    ]
  },
};
