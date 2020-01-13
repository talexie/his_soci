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
    hissetup:{
      type:'object',
      properties:{
        id:{ type: 'string',readOnly:true},
        status: { type: 'string'},
        date: { type: 'string', format:'date'},
        period:{  type: 'string',enum:['2018','2019','2020']},
        location: { type: 'string',enum:['Uganda','Kenya','Rwanda','Burundi','Tanzania']},
        hisType: { type: 'string'},
        purpose: { type: 'string'},
        mainChallenge: { type: 'string'},
        respondentType: { type: 'string',readOnly:true,enum:['Consensus']},
        respondents:{
          type:'array',
          items:{
            type:'object',
            properties:{
              id:{ type: 'string'},
              surname: { type: 'string'},
              firstname: { type: 'string'},
              emailAddress: { type: 'string'},
              phoneNumber: { type: 'string'},
              organization: { type: 'string'},
              domain: { type: 'string'},
              comments: { type: 'string'}
            }
          }
        },            
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
      },
      required:['id','period','location','date','status']
    },
    hisstages:{
      type: 'object',
      properties:{
        tracking:{
          type:'object',
          properties:{
            id:{ type: 'string',readOnly:true},
            status: { type: 'string',readOnly:true},
            username: { type: 'string',readOnly:true},
            userid: { type: 'string',readOnly:true},
            respondentType: { type: 'string',readOnly:true, enum:['Self', 'Consensus'],default:"Self"},
            date: { type: 'string', format:'date',readOnly:true},
            period:{  type: 'string',readOnly:true,enum:['2018','2019','2020']},
            location: { type: 'string',readOnly:true,enum:['Uganda','Kenya','Rwanda','Burundi','Tanzania']},
          }
        },
        background:{
          type:'object',
          properties:{
            event: { type: 'string',readOnly:true},
            reference: { type: 'string',readOnly:true},
            hisType: { type: 'string',readOnly:true},
            purpose: { type: 'string',readOnly:true},
            mainChallenge: { type: 'string',readOnly:true},
            coverage:{
              type:'array',
              items:{
                type: 'object',
                properties:{
                  level: { type: 'string',readOnly:true, enum:['Region','District/Subcounty','Facility']},
                  totalNumber: { type: 'integer',readOnly:true},
                  hisCoverageNumber: { type: 'integer',readOnly:true},
                  hisStaff: { type: 'integer',readOnly:true},
                  comments: { type: 'string',readOnly:true}
                }
              }
            },
            stakeholders:{
              type: 'array',
              items: {
                type: 'object',
                properties:{
                  id:{ type: 'string',readOnly:true},
                  surname: { type: 'string',readOnly:true},
                  firstname: { type: 'string',readOnly:true},
                  emailAddress: { type: 'string',readOnly:true},
                  phoneNumber: { type: 'string',readOnly:true},
                  organization: { type: 'string',readOnly:true},
                  domain: { type: 'string',readOnly:true},
                  comments: { type: 'string',readOnly:true}
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
              '5 = Optimized']
            },
            future:{ 
              type: 'string',
              enum:[
                '0 = Not Applicable',
                '1 = Emerging/Ad hoc',
                '2 = Repeatable',
                '3 = Defined',
                '4 = Managed',
                '5 = Optimized'
              ],
              allOf:
              [
                {
                  if:
                  {
                    properties:{
                      current:{
                        const: '0 = Not Applicable'
                      }
                    }
                  },
                  then:
                  {
                    properties:{
                      future:{
                        enum:[
                          '0 = Not Applicable',
                          '1 = Emerging/Ad hoc',
                          '2 = Repeatable',
                          '3 = Defined',
                          '4 = Managed',
                          '5 = Optimized'
                        ],
                      }
                    }
                  },
                  else:
                  {
                    properties:{
                      future:{
                        enum:[
                          '0 = Not Applicable',
                          '1 = Emerging/Ad hoc',
                          '2 = Repeatable',
                          '3 = Defined',
                          '4 = Managed',
                          '5 = Optimized'
                        ],
                      }
                    }
                  }
                },
                {
                  if:
                  {
                    properties:{
                      current:{
                        const: '1 = Emerging/Ad hoc'
                      }
                    }
                  },
                  then:
                  {
                    properties:{
                      future:{
                        type: 'string',
                        enum:[
                          '1 = Emerging/Ad hoc',
                          '2 = Repeatable',
                          '3 = Defined',
                          '4 = Managed',
                          '5 = Optimized'
                        ],
                      }
                    }
                  },
                  else:{
                    properties:{
                      future:{
                        type:'string',
                        enum:[
                          '1 = Emerging/Ad hoc',
                          '2 = Repeatable',
                          '3 = Defined',
                          '4 = Managed',
                          '5 = Optimized'
                        ],
                      }
                    }
                  }
                }
              ]
            }
          },
          allOf:
          [
            {
              if:
              {
                properties:{
                  current:{
                    const: '0 = Not Applicable'
                  }
                }
              },
              then:
              {
                properties:{
                  future:{
                    enum:[
                      '0 = Not Applicable',
                      '1 = Emerging/Ad hoc',
                      '2 = Repeatable',
                      '3 = Defined',
                      '4 = Managed',
                      '5 = Optimized'
                    ],
                  }
                }
              },
              else:
              {
                properties:{
                  future:{
                    enum:[
                      '0 = Not Applicable',
                      '1 = Emerging/Ad hoc',
                      '2 = Repeatable',
                      '3 = Defined',
                      '4 = Managed',
                      '5 = Optimized'
                    ],
                  }
                }
              }
            },
            {
              if:
              {
                properties:{
                  current:{
                    const: '1 = Emerging/Ad hoc'
                  }
                }
              },
              then:
              {
                properties:{
                  future:{
                    type: 'string',
                    enum:[
                      '1 = Emerging/Ad hoc',
                      '2 = Repeatable',
                      '3 = Defined',
                      '4 = Managed',
                      '5 = Optimized'
                    ],
                  }
                }
              },
              else:{
                properties:{
                  future:{
                    type:'string',
                    enum:[
                      '1 = Emerging/Ad hoc',
                      '2 = Repeatable',
                      '3 = Defined',
                      '4 = Managed',
                      '5 = Optimized'
                    ],
                  }
                }
              }
            }
          ]
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
        his_competencies:{
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
        his_training_education:{
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
        networks_internet_connectivity:{
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
        business_continuity_processes_policies:{
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
        his_standard_guidelines:{
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
        dataset_definitions:{
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
        data_exchange_standards:{
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
        master_facility_list:{
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
        indicator_registry:{
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
        terminology_management:{
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
        unique_person_identity_management:{
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
        enterprise_architecture:{
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
        person_data_exchange:{
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
        aggregate_data_exchange:{
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
        commodity_management_data_exchange:{
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
        data_security_exchange:{
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
        data_quality_assurance_quality_control:{
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
        data_management:{
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
        data_use_availability_strategy:{
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
        information_data_availability:{
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
        data_use_competencies:{
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
        user_stakeholder_engagement:{
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
        data_synthesis_communication:{
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
        reporting_analytics_features:{
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
        data_use_impact:{
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
        data_collection_alignment_workflow:{
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
        decision_support_clinical_other:{
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
  setupUiSchema:{
    type:'VerticalLayout',
    elements:[
      {
        type:'HorizontalLayout',
        elements:[
          {
            type:'Control',
            label:'Assessment ID',
            scope: '#/properties/id',
            options:{
              custom: true,
              generated: true,
              readOnly:true,
              variant: 'outlined'
            }
          },
          {
            type:'Control',
            label:'Location',
            scope: '#/properties/location',
            options:{
              select: true,
              variant: 'outlined'
            }
          },
          {
            type:'Control',
            label:'Period',
            scope: '#/properties/period',
            options:{
              select: true,
              variant: 'outlined'
            }
          },
          {
            type:'Control',
            label:'Respondent',
            scope: '#/properties/respondentType',
            options:{
              select: true,
              variant: 'outlined'
            },
          }
        ]
      },
      {
        type:'Control',
        label: 'Which HIS are you assessing?',
        scope: '#/properties/hisType',
        options:{
          custom: true,
          variant: 'outlined'
        }
      },
      {
        type:'Control',
        label:'What is the purpose of the HIS you will assess (e.g., to monitor and review implementation of maternal and child health [MCH] services)?Please attach any supporting documentation describing the HIS purpose.',
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
        label:'What is the main challenge you hope to address with this assessment (e.g., to improve monitoring and review of MCH services)?',
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
                    label:'Total Number in the Country',
                    scope: '#/properties/totalNumber',
                    options:{
                      custom: true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    label:'Approximate Number Covered by the HIS',
                    scope: '#/properties/hisCoverageNumber',
                    options:{
                      custom: true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    label:'Approximate Number of Staff* Associated with HIS at Each Level (as applicable)',
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
            }
          },
          {
            type:'Control',
            label: false,
            extraText:"Identify key organizations and stakeholders that should be included in the assessment process (e.g., relevant ministries, donors, nongovernmental organizations [NGOs], etc.).Names of individuals will not be included in the final analysis or report.",
            scope:'#/properties/respondents',
            options:{
              tableLayout: false,
              detail:{
                type:'HorizontalLayout',
                elements:[
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
                    scope: '#/properties/emailAddress',
                    options:{
                      custom: true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    scope: '#/properties/phoneNumber',
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
  },
  assessmentUiSchema: {
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
                type:'HorizontalLayout',
                elements:[
                  {
                    type:'Control',
                    label:'Assessment ID',
                    scope: '#/properties/tracking/properties/id',
                    options:{
                      custom: true,
                      generated: true,
                      readOnly:true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    label:'Location',
                    scope: '#/properties/tracking/properties/location',
                    options:{
                      select: true,
                      readOnly:true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    label:'Period',
                    scope: '#/properties/tracking/properties/period',
                    options:{
                      select: true,
                      readOnly:true,
                      variant: 'outlined'
                    }
                  },
                  {
                    type:'Control',
                    label:'Respondent',
                    scope: '#/properties/tracking/properties/respondentType',
                    options:{
                      select: true,
                      readOnly:true,
                      variant: 'outlined'
                    },
                  }
                ]
              },
              {
                type:'Control',
                label: 'Which HIS are you assessing?',
                scope: '#/properties/background/properties/hisType',
                options:{
                  custom: true,
                  readOnly:true,
                  variant: 'outlined'
                },
              },
              {
                type:'Control',
                label:'What is the purpose of the HIS you will assess (e.g., to monitor and review implementation of maternal and child health [MCH] services)?Please attach any supporting documentation describing the HIS purpose.',
                scope: '#/properties/background/properties/purpose',
                options:{
                  custom: true,
                  multi: true,
                  readOnly:true,
                  rows:2,
                  variant: 'outlined'
                },
              },
              {
                type:'Control',
                label:'What is the main challenge you hope to address with this assessment (e.g., to improve monitoring and review of MCH services)?',
                scope: '#/properties/background/properties/mainChallenge',
                options:{
                  custom: true,
                  multi: true,
                  readOnly:true,
                  rows: 2,
                  variant: 'outlined'
                },
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
                      readOnly: true,
                      detail:{
                        type:'HorizontalLayout',
                        elements:[
                          {
                            type:'Control',
                            scope: '#/properties/level',
                            options:{
                              select: true,
                              readOnly:true,
                              variant: 'outlined'
                            },
                          },
                          {
                            type:'Control',
                            label:'Total Number in the Country',
                            scope: '#/properties/totalNumber',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            },
                          },
                          {
                            type:'Control',
                            label:'Approximate Number Covered by the HIS',
                            scope: '#/properties/hisCoverageNumber',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            },
                          },
                          {
                            type:'Control',
                            label:'Approximate Number of Staff* Associated with HIS at Each Level (as applicable)',
                            scope: '#/properties/hisStaff',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/comments',
                            options:{
                              custom: true,
                              readOnly:true,
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
                      readOnly: true,
                      detail:{
                        type:'HorizontalLayout',
                        elements:[
                          {
                            type:'Control',
                            scope: '#/properties/id',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/surname',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/firstname',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/emailAddress',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/phoneNumber',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/organization',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/domain',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                          {
                            type:'Control',
                            scope: '#/properties/comments',
                            options:{
                              custom: true,
                              readOnly:true,
                              variant: 'outlined'
                            }
                          },
                        ]
                      }
                    },
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
                code:"II.A.1",
                label:"HIS competencies (knowledge, skills, and abilities)",
                extraText:"Availability of adequate personnel with characteristics, attributes, and capabilities to perform a task/set of tasks to achieve clearly defined results.",
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
                        scope: '#/properties/his_competencies/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_competencies/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_competencies/properties/evidence',
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
                        scope: '#/properties/his_competencies/properties/comments',
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
                code:"II.A.2",
                label:"HIS training and education (includes continuous professional development)",
                extraText:"An organized activity with clear learning outcomes that aims to impart knowledge and skills, shape attitudes, and develop specific competencies and capabilities in personnel.",
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
                        scope: '#/properties/his_training_education/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_training_education/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_training_education/properties/evidence',
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
                        scope: '#/properties/his_training_education/properties/comments',
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
                code:"II.A.3",
                label:"HR policy",
                extraText:"A set of principles, guidelines, and norms that an organization adopts to help manage its employees.",
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
                code:"II.B.1",
                label:"HIS financing plan",
                extraText:"The legal and administrative systems and procedures in place that permit a government ministry and its agencies and organizations to conduct activities that ensure the correct use of public funds and that meet defined standards of probity and regularity. Activities include management and control of public expenditures, financial accounting, reporting, and asset management, in some cases.",
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
                code:"II.B.2",
                label:"Resource mobilization",
                extraText:"All activities involved in securing new and additional financial resources for an organization (in this case, the HIS). It also involves making better use of and maximizing existing financial resources.",
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
            label: 'IV.A Standards and Guidelines',
            elements:[
              {
                type:"Group",
                label:"HIS standard guidelines",
                code:"IV.A.1",
                extraText:"Standards and guidelines to enable consistent and accurate definition, collection, and exchange of health information across HIS and services.",
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
                        scope: '#/properties/his_standard_guidelines/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/his_standard_guidelines/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/his_standard_guidelines/properties/evidence',
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
                        scope: '#/properties/his_standard_guidelines/properties/comments',
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
                label:"Data set definitions (clinical and indicator)",
                code:"IV.A.2",
                extraText:"Common data sets, such as those defining clinical care, surveillance, and/or M&E programs, are defined along with distinct data elements.",
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
                        scope: '#/properties/dataset_definitions/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/dataset_definitions/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/dataset_definitions/properties/evidence',
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
                        scope: '#/properties/dataset_definitions/properties/comments',
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
                label:"Data exchange standards",
                code:"IV.A.3",
                extraText:"A data exchange standard is a widely adopted model for organizing electronic information in a common format, such as XML, so that systems (e.g., databases, applications, etc.) not directly linked to one another can share information with others using the same model.",
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
                        scope: '#/properties/data_exchange_standards/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_exchange_standards/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_exchange_standards/properties/evidence',
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
                        scope: '#/properties/data_exchange_standards/properties/comments',
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
            label: 'IV.B HIS Core Services',
            elements:[
              {
                type:"Group",
                label:"Master facility lists",
                code:"IV.B.1",
                extraText:"A master facility list (MFL) is a complete list of health facilities (both public and private) in a country and comprises administrative information and information that identifies each facility (signature domain).",
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
                        scope: '#/properties/master_facility_list/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/master_facility_list/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/master_facility_list/properties/evidence',
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
                        scope: '#/properties/master_facility_list/properties/comments',
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
                label:"Indicator registry",
                code:"IV.B.2",
                extraText:"A list of core health indicators helps track progress. Availability of indicators and information on definitions, data sources, and data collection methods are indicative of HIS performance and organization. Data should be comprehensive and cover all categories of health indicators: determinants, inputs, outputs, outcomes, and health status. A core list of indicators can be part of the health sector M&E plan.",
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
                        scope: '#/properties/indicator_registry/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/indicator_registry/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/indicator_registry/properties/evidence',
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
                        scope: '#/properties/indicator_registry/properties/comments',
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
                label:"Terminology management",
                code:"IV.B.3",
                extraText:"The process through which clinical terminology is collected, managed, and stored.",
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
                        scope: '#/properties/terminology_management/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/terminology_management/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/terminology_management/properties/evidence',
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
                        scope: '#/properties/terminology_management/properties/comments',
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
                label:"Unique person identity management",
                code:"IV.B.4",
                extraText:"The source of assigning identifiers to uniquely identify persons receiving or providing services in different programs.",
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
                        scope: '#/properties/unique_person_identity_management/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/unique_person_identity_management/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/unique_person_identity_management/properties/evidence',
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
                        scope: '#/properties/unique_person_identity_management/properties/comments',
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
                label:"Enterprise architecture",
                code:"IV.B.5",
                extraText:"The source of assigning identifiers to uniquely identify persons receiving or providing services in different programs.",
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
                        scope: '#/properties/enterprise_architecture/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/enterprise_architecture/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/enterprise_architecture/properties/evidence',
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
                        scope: '#/properties/enterprise_architecture/properties/comments',
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
          }
          ,
          {
            type: 'Group',
            label: 'IV.C Interoperability (Data Exchange)',
            elements:[
              {
                type:"Group",
                label:"Person data exchange",
                code:"IV.C.1",
                extraText:"Standards-based patient data exchange between systems.",
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
                        scope: '#/properties/person_data_exchange/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/person_data_exchange/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/person_data_exchange/properties/evidence',
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
                        scope: '#/properties/person_data_exchange/properties/comments',
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
                label:"Aggregate data exchange",
                code:"IV.C.2",
                extraText:"Standards-based exchange of consolidated data between systems.",
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
                        scope: '#/properties/aggregate_data_exchange/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/aggregate_data_exchange/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/aggregate_data_exchange/properties/evidence',
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
                        scope: '#/properties/aggregate_data_exchange/properties/comments',
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
                label:"Commodity management data exchange",
                code:"IV.C.3",
                extraText:"Standards-based exchange of data on such healthcare commodities as medical supplies and medications.",
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
                        scope: '#/properties/commodity_management_data_exchange/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/commodity_management_data_exchange/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/commodity_management_data_exchange/properties/evidence',
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
                        scope: '#/properties/commodity_management_data_exchange/properties/comments',
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
                label:"Data security exchange",
                code:"IV.C.4",
                extraText:"Adherence to organizational policies, procedures, and best practices related to HIS, including standards for data exchange, messaging, and security. It also means adherence to applicable laws, relevant industry standards, and internal policies (e.g., codes of conduct).",
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
                        scope: '#/properties/data_security_exchange/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_security_exchange/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_security_exchange/properties/evidence',
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
                        scope: '#/properties/data_security_exchange/properties/comments',
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
          }
        ]
      },
      {
        type: 'Category',
        label: "V.HIS Data Quality and Use",
        elements:[
          {
            type: 'Group',
            label: 'V.A Data Quality Assurance',
            elements:[
              {
                type:"Group",
                label:"Data quality assurance and quality control",
                code:"V.A.1",
                extraText:"Efforts or activities aimed at ensuring that reported data and results accurately reflect actual health system outputs. This includes data quality assessments and data quality assurance practices.",
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
                        scope: '#/properties/data_quality_assurance_quality_control/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_quality_assurance_quality_control/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_quality_assurance_quality_control/properties/evidence',
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
                        scope: '#/properties/data_quality_assurance_quality_control/properties/comments',
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
                label:"Data management",
                code:"V.A.2",
                extraText:"The existence and implementation of such processes as standard operating procedures for data collection, data management guidance, development and production of data collection tools, and supportive supervision procedures.",
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
                        scope: '#/properties/data_management/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_management/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_management/properties/evidence',
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
                        scope: '#/properties/data_management/properties/comments',
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
            label: 'V.B Data Use',
            elements:[
              {
                type:"Group",
                label:"Data use availability strategy",
                code:"V.B.1",
                extraText:"Based on information needs, includes procedures and policies for data reporting, data dissemination, and production of targeted information products for use in decision making and health sector planning.",
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
                        scope: '#/properties/data_use_availability_strategy/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_use_availability_strategy/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_use_availability_strategy/properties/evidence',
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
                        scope: '#/properties/data_use_availability_strategy/properties/comments',
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
                label:"Information/data availability",
                code:"V.B.2",
                extraText:"The process through which data are made accessible and through which platforms are able to support analysis and use of data to support decision making.",
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
                        scope: '#/properties/information_data_availability/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/information_data_availability/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/information_data_availability/properties/evidence',
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
                        scope: '#/properties/information_data_availability/properties/comments',
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
                label:"Data use competencies",
                code:"V.B.3",
                extraText:"A measurable pattern of knowledge, skills, abilities, behaviors, and other characteristics that a person needs to perform work roles or occupational functions related to the use of data.",
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
                        scope: '#/properties/data_use_competencies/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_use_competencies/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_use_competencies/properties/evidence',
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
                        scope: '#/properties/data_use_competencies/properties/comments',
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
                label:"User/stakeholder engagement",
                code:"V.B.4",
                extraText:"Guidance (methods, processes, and practices) for user engagement in data-based progress review and performance monitoring and assessments.",
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
                        scope: '#/properties/user_stakeholder_engagement/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/user_stakeholder_engagement/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/user_stakeholder_engagement/properties/evidence',
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
                        scope: '#/properties/user_stakeholder_engagement/properties/comments',
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
                label:"Data synthesis and communication",
                code:"V.B.5",
                extraText:"Document outlining the purpose, type (e.g., technical report, policy brief, table, chart), target audience (level of health system), and intended result of information products and dissemination/feedback plans.",
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
                        scope: '#/properties/data_synthesis_communication/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_synthesis_communication/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_synthesis_communication/properties/evidence',
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
                        scope: '#/properties/data_synthesis_communication/properties/comments',
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
                label:"Reporting and analytics features",
                code:"V.B.6",
                extraText:"Established systems and guidelines to report against priority health indicators.",
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
                        scope: '#/properties/reporting_analytics_features/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/reporting_analytics_features/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/reporting_analytics_features/properties/evidence',
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
                        scope: '#/properties/reporting_analytics_features/properties/comments',
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
                label:"Data use impact",
                code:"V.B.7",
                extraText:"Clearly defined impact measurement parameters for data use.",
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
                        scope: '#/properties/data_use_impact/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_use_impact/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_use_impact/properties/evidence',
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
                        scope: '#/properties/data_use_impact/properties/comments',
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
                label:"Data collection alignment with workflow",
                code:"V.B.8",
                extraText:"The extent to which data collection processes and tools are aligned with the existing workflow. ",
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
                        scope: '#/properties/data_collection_alignment_workflow/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/data_collection_alignment_workflow/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/data_collection_alignment_workflow/properties/evidence',
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
                        scope: '#/properties/data_collection_alignment_workflow/properties/comments',
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
                label:"Decision support (clinical or other)",
                code:"V.B.9",
                extraText:"Decision support (DS) provides program and resource managers, clinicians, staff, patients, or other people with knowledge and program-specific and/or person-specific information, intelligently filtered or presented at appropriate times, to enhance health and healthcare. DS encompasses a variety of tools to enhance decision making in the program and/or clinical workflow. These tools include computerized alerts and reminders to managers, care providers, and patients; clinical guidelines; condition-specific order sets; focused patient data reports and summaries; documentation templates; diagnostic support; and contextually relevant reference information, among other tools.",
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
                        scope: '#/properties/decision_support_clinical_other/properties/current',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Goal Status",
                        scope: '#/properties/decision_support_clinical_other/properties/future',
                        options:{
                          select: true,
                          variant: 'outlined'
                        }
                      },
                      {
                        type: 'Control',
                        label: "Evidence",
                        scope: '#/properties/decision_support_clinical_other/properties/evidence',
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
                        scope: '#/properties/decision_support_clinical_other/properties/comments',
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
    ]
  },
};
