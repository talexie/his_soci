export const HisSociUiSchema = {
  type: 'Categorization',
  options: {
    variant: 'customStepper'
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
              grid:true,
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"There is awareness of the need to develop an HIS and/or eHealth strategic plan or update the existing one, but the planning process is at an early stage. Planning is mostly focused on small or short-term projects"
                },
                {
                  "Repeatable (2)":"Strategic plans are current and developed by subject matter experts but not vetted with all key stakeholders. Strategic plans are developed by different bodies focusing on specific domains and may not include all relevant HIS activities.There is an established strategic planning process that involves key HIS/eHealth stakeholders and is formally approved by the Ministry of Health"
                },
                {
                  "Defined (3)":"There is a current HIS/eHealth strategic plan that includes standards, legislation, and appropriate technical and service delivery aspects, that are developed using a gender-equity lens, as well as ensuring that there are financial and human resources to deliver them.A budgeted eHealth and/or HIS strategy is aligned with and integrated in the national health plan/strategy and is aligned with the health sector M&E plan"
                },
                {
                  "Managed (4)":"Implementation is monitored, and there is a set schedule for periodic review and update for corrective action by a designated government led work group"
                },
                {
                  "Optimized (5)":"A continuous improvement planning process is maintained. HIS/eHealth strategic planning is responsive to changing health domain needs/priorities reflected in the health sector plan and the M&E plan"
                }
              ]
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
                scope: '#/properties/his_strategic_planning/properties/goal',
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
              grid:true,              
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"There is awareness of the need to monitor and evaluate HIS activities and implementation to ensure alignment with HIS strategy and compliance with standards and guidelines. HIS evaluations are conducted on an ad hoc basis. Tools for monitoring and evaluating HIS activities and implementation are not harmonized with planning."
                },
                {
                  "Repeatable (2)":"An organizational structure is in place to monitor, evaluate, and measure results for major HIS activities and implementation. Processes to monitor, evaluate, and measure HIS activities and implementation are project-based or lack institutional support. There are efforts to coordinate and harmonize evaluation tools within the same domain."
                },
                {
                  "Defined (3)":"There are defined and standardized processes and tools for evaluating HIS activities and a relevant governing authority is established. Data collected during evaluations are consistently used to prioritize and align HIS activities and implementation."
                },
                {
                  "Managed (4)":"There is ongoing M&E to ensure alignment of HIS activities with HIS strategy and desired impact on healthcare service delivery. Performance reports are shared with the relevant HIS leadership groups."
                },
                {
                  "Optimized (5)":"Feedback from evaluation is used for continuous improvement of M&E systems, processes, and capabilities for alignment with the current HIS strategy and best practices. Ongoing impact analysis is based on evaluations to optimize resource allocation and project future investments."
                }
              ]
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
                scope: '#/properties/me_plan/properties/goal',
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
              grid:true,
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"Some legislation, regulations, and policies exist, but most are based on general information technology (IT) rather than HIS needs. The need for policies and regulations that govern HIS has been identified."
                },
                {
                  "Repeatable (2)":"Some policies and regulations (for data management, data sharing and use, privacy and security, and business process continuity) that govern HIS are implemented and are used in managing HIS activities in selected settings. "
                },
                {
                  "Defined (3)":"Comprehensive HIS legislation, regulation, and policies are created by a clearly defined body constituted of people/organizations from a wide variety of backgrounds. Core HIS policies and regulations are being used and monitored following established guidance nationally and/or regionally for managing HIS activities."
                },
                {
                  "Managed (4)":"Explicit national policies addressing data standards and interoperability, privacy and security, information and communication technologies (ICT) infrastructure, data stewardship, and data use agreements are widely available, used, and integrated in strategic HIS/health planning, and compliance is monitored by the designated government department/unit."
                },
                {
                  "Optimized (5)":"Policies and legislation are regularly enforced and actively reviewed and updated by a designated government authority, as necessary, to reflect changes within the health domain."
                }
              ]
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
                scope: '#/properties/his_policy_regulation/properties/goal',
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
              grid:true,              
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"Some processes and procedures for enforcing compliance with policies, legislation, and regulation exist, but are mostly based on general IT. There are no structured processes to address noncompliance."
                },
                {
                  "Repeatable (2)":"Some processes and procedures for enforcing compliance exist but are limited to specific domains or activities. Some processes for remediation of noncompliance issues may exist but are not standard or regular."
                },
                {
                  "Defined (3)":"A clearly defined body and process and procedures is in place to ensure compliance with standards, policies, and regulations. A structured process exists for remediation if noncompliance is identified."
                },
                {
                  "Managed (4)":"A process to review, validate, and enforce implementation of policies, legislation, and regulations in HIS is followed regularly. Metrics on compliance and noncompliance are collected, recorded, and reported."
                },
                {
                  "Optimized (5)":"Processes and procedures for enforcing compliance with policies and legislation are actively reviewed and updated, as necessary, to reflect changes within the health domain."
                }
              ]
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
                scope: '#/properties/policy_compliance_enforcement/properties/goal',
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
              grid:true,
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"Where leadership exists, it is exercised within programs or units at the local level. Programs and units manage HIS based on their independent needs; there is no central oversight or guidance. The HIS leadership and coordination body's functions are not clearly defined. Meetings happen infrequently or on an ad hoc basis."
                },
                {
                  "Repeatable (2)":"There are efforts to formalize HIS leadership and coordination with a clearly defined scope of work and operational structure. An HIS leadership and coordination body provides oversight and coordinates management of HIS activities in selected cases or activities."
                },
                {
                  "Defined (3)":"A national-level cross-agency coordination group exists to oversee policies, scope of work, roles, and responsibilities for coordinating HIS activities centrally. This coordination group includes management and subject-matter experts and meets on a regular basis to identify, prioritize, and coordinate HIS activities."
                },
                {
                  "Managed (4)":"Coordinated national-level oversight is integrated in the HIS/health strategy as an institutional structure and facilitates the implementation of HIS strategy. The group meets regularly (at least annually, depending on organizational needs), and there is an established process for sharing and reviewing HIS information with all HIS stakeholders."
                },
                {
                  "Optimized (5)":"There is ongoing review by the national-level coordination group of HIS activities, purpose, process, resources, team composition, attention to gender and equity, and communications for continuous improvement to meet changing HIS strategy and/or health goals."
                }
              ]
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
                scope: '#/properties/his_leadership_coordination/properties/goal',
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
              grid:true,
              toolTip:[
                {
                  "Emerging/Ad Hoc (1)":"An organizational chart with defined HIS roles may exist but is limited to certain domains. There is no defined or formal process for review, updates, or alignment of the HIS organizational structure or functions."
                },
                {
                  "Repeatable (2)":"An organizational chart with job titles and corresponding job descriptions exists but there is no formal process for regular updates and alignment."
                },
                {
                  "Defined (3)":"An established, standardized process is in place for developing and reviewing job titles, series/cadres, functions, and responsibilities."
                },
                {
                  "Managed (4)":"A formal process exists for review and updates of organizational structure and job descriptions and is aligned with the HIS/health strategy. There is an established plan for career training and retention for each job series/cadre."
                },
                {
                  "Optimized (5)":"The HIS organizational structure and functions are reviewed regularly for continuous improvement and to ensure alignment with the strategic plan."
                }
              ]
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
                scope: '#/properties/his_organization_structure_function/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Relevant HIS and/or health informatics competencies for cadres of HIS users are not defined or documented. The competencies (knowledge, skills, and abilities) required to accomplish HIS tasks exist locally or for specific HIS activities."
                  },
                  {
                    "Repeatable (2)":"Some workforce competencies necessary to accomplish HIS implementation activities are documented and are used to develop clear descriptions of duties and responsibilities for each job cadre in limited facilities."
                  },
                  {
                    "Defined (3)":"There is an established and disseminated national HIS organizational chart with clear descriptions of duties and responsibilities for each job cadre. Workforce competencies are aligned with the HIS strategic plans, as well the organizational mission, vision, values, and business strategy. Informatics and project management concepts are used in developing, implementing, and managing HIS activities and projects."
                  },
                  {
                    "Managed (4)":"Capability assessments and analyses are conducted regularly to explore opportunities for competency improvement. HIS training program courses are aligned with established core competencies, to meet training needs. There is an established career path for HIS, which incorporates a strategy for capacity building."
                  },
                  {
                    "Optimized (5)":"There is an established schedule for reviewing HIS competencies, to ensure continuous performance improvement and alignment with healthcare goals."
                  }
                ]
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
                      scope: '#/properties/his_competencies/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Training and education programs for HIS competencies are at the initial stages of development. The HIS training curriculum is not standardized. Trainings are conducted on an ad hoc basis and they mostly focus on specific software."
                  },
                  {
                    "Repeatable (2)":"Training is regarded as critical, and processes to identify relevant courses for different HIS staff cadres exist in limited settings. HIS-related academic courses are available for specific HIS domains or activities."
                  },
                  {
                    "Defined (3)":"Training, academic curricula, and processes for developing training and education programs to build HIS skills and competencies nationally are standardized, and include a gender-related component. Clear and measurable learning outcomes are defined for training courses. A designated government authority to oversee training and curricula exists. "
                  },
                  {
                    "Managed (4)":"Training and education plans are integrated in HIS implementation plans and the results are measurable. Training and education programs  conducted periodically at government-designated institutions to refresh existing skills and impart new skills are reviewed on a regular basis by the designated authority to ensure alignment with HIS needs and technology.There is sufficient infrastructure to support different modes of training, including distance learning."
                  },
                  {
                    "Optimized (5)":"Regular feedback from systematic curriculum review, training, and piloting innovative ideas are used for continuous improvement. The training approach is proactive and student-centric, with reusable content driven by the implementation plans and revised to meet emerging health-sector needs. "
                  }
                ]
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
                      scope: '#/properties/his_training_education/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Workforce planning is conducted on an ad hoc basis in response to more immediate operational needs in local settings or specific implementation. An HR policy recognizing HIS needs is nonexistent or under development. Data on vacant HIS positions and staffing needs are not collected or are collected on paper and must be integrated with other information for planning and allocation manually. Adequate staff exists only in some locations, typically in large cities, and HIS roles and responsibilities are not well defined."
                  },
                  {
                    "Repeatable (2)":"Workforce planning tends to focus on recruitment. Data on HIS vacant positions are collected and managed using a human resources information system (HRIS) in limited settings, and some HIS competencies, roles, and responsibilities of staff are clearly documented."
                  },
                  {
                    "Defined (3)":"Data on vacant HIS positions are collected and managed using HRIS nationally. Numbers are sufficient to meet HIS workforce needs at national but not subnational levels. Reports generated from HRIS are disaggregated by cadre and location for HIS workforce planning and allocation. Hiring mechanisms distribute staff to some subnational facilities. HIS competencies, roles, and responsibilities of staff performing HIS functions are clearly documented and disseminated to the concerned staff."
                  },
                  {
                    "Managed (4)":"Data on vacancies and staffing needs are collected and managed in the HRIS on a regular basis and used to inform hiring, distribution of staff, and  training and education needs, and to advocate for budgets to meet HIS needs nationally. Staffing needs are met at subnational levels. Workforce analysis is conducted to forecast future demands. Hiring mechanisms distribute staff to all locations where they are needed. Human capacity needs are integrated in the HIS and/or health plan and monitored by a designated government authority."
                  },
                  {
                    "Optimized (5)":"Workforce planning, human capacity requirements, and availability are continuously improved based on a national HIS strategic plan and focus on long-term interventions in areas such as competency management, employee engagement, skills acquisition, and capability development."
                  }
                ]
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
                      scope: '#/properties/hr_policy/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"HIS financing and investments are limited to specific projects. The HIS is not included in the healthcare budget as a separate requirement."
                  },
                  {
                    "Repeatable (2)":"HIS financing and investments are allocated on a case-by-case basis and  focus on short-term projects, not long-term strategic priorities. The need for a designated HIS budget has been recognized but may not yet exist."
                  },
                  {
                    "Defined (3)":"Standard processes for qualifying HIS projects for funding and monitoring of expenditures are documented and disseminated. The HIS is a line item in the healthcare budget, and budgets are developed for national and/or subnational HIS in the country. HIS is funded through capital financing or alternative financing models, such as public-private partnerships."
                  },
                  {
                    "Managed (4)":"There is a multi-year HIS financing strategy aligned with healthcare and HIS strategic priorities, and sources are identified for sustained HIS activities. HIS implementation is funded using various types of financing, such as capital financing, revenue, public-private partnerships, and grants. Expenditure reports are shared with the relevant HIS team/unit. Financial audit processes are in place and regularly carried out to promote accountability in HIS spending"
                  },
                  {
                    "Optimized (5)":"An established financial management system is owned, reviewed, tracked, and revised by the government. HIS investments consider different healthcare priorities and goals and strategically invest in capabilities to support future initiatives. Financial planning is done for the entire HIS implementation lifecycle and includes sustainability."
                  }
                ]
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
                      scope: '#/properties/his_financing_plan/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"A resource mobilization plan for HIS activities is under development or occurs in an ad hoc manner. "
                  },
                  {
                    "Repeatable (2)":"A resource mobilization plan exists for specific HIS domains or activities. The need for a standard HIS resource mobilization plan for HIS activities is recognized and such a plan is under development."
                  },
                  {
                    "Defined (3)":"The resource mobilization plan for HIS is documented and disseminated, and progress is approved and monitored by a designated government department/team at the appropriate level of implementation (national, subnational)."
                  },
                  {
                    "Managed (4)":"The resource mobilization plan for HIS activities is integrated in the HIS and/or health plan at the appropriate level of implementation (national,  subnational). Review processes are standard and happen regularly, and findings are shared with relevant stakeholders."
                  },
                  {
                    "Optimized (5)":"The resource mobilization plan is periodically reviewed/revised to accommodate financial requirements needed to support evolving HIS activities and emerging health sector needs at the appropriate level of implementation (national, subnational)."
                  }
                ]
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
                      scope: '#/properties/resource_mobilization/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Information on electricity/power access, sources and reliability at healthcare facilities, and subnational and national level offices is limited and only collected when planning for specific HIS activities. Procedures for maintaining power infrastructure exist in limited settings."
                  },
                  {
                    "Repeatable (2)":"Data are collected on electricity/power access, sources, and reliability to support HIS infrastructure but is not harmonized across healthcare facilities, or subnational- and national-level offices. Some procedures for maintaining power infrastructure exist."
                  },
                  {
                    "Defined (3)":"An established governing body oversees standardized procedures for tracking and maintenance of electricity/power access, sources and reliability supporting HIS infrastructure at healthcare facilities and subnational- and national-level offices. Standardized metrics for measuring power outages and the duration of outage are defined. "
                  },
                  {
                    "Managed (4)":"Electricity/power access, sources, and reliability profiles for healthcare facilities and subnational- and national-level offices are reviewed and updated on a regular schedule. The power infrastructure is monitored on a regular basis by the governing authority to ensure reliability at all levels. Data from electricity profiles is used to develop innovative solutions to improve access and reliability of electricity."
                  },
                  {
                    "Optimized (5)":"Information collected on the electricity access, sources, and reliability profile is used for planning and continuous improvement of HIS implementation and to meet emerging needs of the health sector."
                  }
                ]
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
                      scope: '#/properties/reliable_power_electricity/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is basic support for ICT or electronic systems equipment installation and maintenance, but it is not standardized or dedicated to HIS infrastructure. Maintenance for the network and hardware is a mix of reactive and ad hoc preventive maintenance. "
                  },
                  {
                    "Repeatable (2)":"There is a recognized need to standardize processes to oversee and support ICT infrastructure, but no established or harmonized process exists specific to HIS need."
                  },
                  {
                    "Defined (3)":"There is adequate ICT capacity to support ICT equipment installation and maintenance. There is formal technical assistance to build a system for ongoing technical support and maintenance. Standard operating procedures (SOPs) exist that detail the protocol for routine network and hardware maintenance. "
                  },
                  {
                    "Managed (4)":"Operations and maintenance services are included in the HIS plan or health plan. Operations and maintenance SOPs are implemented consistently. Data are collected and regularly reviewed on the ICT infrastructure operations and maintenance as mandated by the HIS plan or health plan."
                  },
                  {
                    "Optimized (5)":"An operations and maintenance services mechanism is continuously reviewed and adapted with evolving HIS requirements and following industry-based standards. "
                  }
                ]
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
                      scope: '#/properties/ict_business_infrastructure/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"The national HIS has few computers to support it or hardware is dedicated to specific HIS activities. No guidance exists on the minimum specifications for the country's hardware for the health sector."
                  },
                  {
                    "Repeatable (2)":"An audit report shows the required hardware at national and subnational levels. Fewer than half of the health ministry's central and subnational offices have adequate hardware (e.g., computers, printers, connecting devices)."
                  },
                  {
                    "Defined (3)":"About half or more of the health ministry's national and subnational offices have adequate hardware, including backup services. A plan exists for backup and recovery as well as a plan for replacing old and broken computing devices. "
                  },
                  {
                    "Managed (4)":"Most of the health ministry's national and subnational offices have adequate hardware. The hardware is working optimally to support operations. A functional and always-staffed help desk exists at national and subnational levels."
                  },
                  {
                    "Optimized (5)":"All or almost all of the health ministry's central and subnational offices have adequate computing hardware. Hardware is monitored and evaluated on a regular basis to ensure supported functions are operational."
                  }
                ]
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
                      scope: '#/properties/hardware/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Network and Internet connectivity infrastructure exists only at the national level and some subnational level offices. No stable network connection exists at national and subnational levels to support a national HIS."
                  },
                  {
                    "Repeatable (2)":"A national plan for network management to ensure high up-time is in place. Adequate dedicated network and Internet connectivity are in place to meet the basic needs of health data management and support normal functioning of HIS in the relevant offices at all levels."
                  },
                  {
                    "Defined (3)":"A national plan for network management to ensure high up-time is in place, with clear procedures to follow in case of network failure, to ensure high up-time. Assessments are conducted at least annually by a designated governing body to identify gaps in ICT infrastructure supporting HIS."
                  },
                  {
                    "Managed (4)":"Most national offices of the health ministry have a working computer network connection and about half of subnational offices have a strong and reliable network connection. A dedicated network support team is in place. Gaps in connectivity are documented and addressed in standard process."
                  },
                  {
                    "Optimized (5)":"HIS ICT equipment maintenance and user support are integrated in an HIS strategic plan, which includes financing and technical support for continuous improvement of ICT infrastructure and support. All or almost all of the health ministry's national and subnational offices have reliable network connections or mechanisms that support operation in offline mode (and syncing later on). A team with adequate financial, human, and technology resources is dedicated to support connectivity. Industry-based standards are followed."
                  }
                ]
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
                      scope: '#/properties/networks_internet_connectivity/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"An HIS business continuity plan (BCP) is under development or may exist only for specific HIS activities.  "
                  },
                  {
                    "Repeatable (2)":"HIS BCP exists but is not harmonized across HIS health-sector needs. Efforts to document or standardize a BCP may exist at the national level or to address national-level needs."
                  },
                  {
                    "Defined (3)":"The HIS BCP is documented, published, monitored, and audited by a government-designated authority, to ensure compliance and evaluate performance against metrics outlined in the BCP."
                  },
                  {
                    "Managed (4)":"The HIS BCP is integrated in the HIS strategic plan and regularly managed by the government-designated authority to address goals and gaps in meeting HIS needs."
                  },
                  {
                    "Optimized (5)":"The HIS BCP is reviewed and revised periodically to ensure that it meets the evolving HIS and health information priorities."
                  }
                ]
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
                      scope: '#/properties/business_continuity_processes_policies/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Some standard guidelines exist and are in use, but they are defined locally or for specific implementations. Stakeholders may see little value in the use of guidelines, because of cost and difficulty in adopting them."
                  },
                  {
                    "Repeatable (2)":"Some standard guidelines exist and are used for HIS activities in limited settings. There is awareness of the key role that HIS standard guidelines play in supporting healthcare operations. "
                  },
                  {
                    "Defined (3)":"Formal processes and procedures for creating, adopting, and managing HIS standard guidelines for HIS implementations are defined and disseminated. Core standard guidelines exist and are used for HIS activities and implementation nationally. A formal body/group and clearly defined processes are in place for maintaining HIS standard guidelines, and resources are allocated for the activities."
                  },
                  {
                    "Managed (4)":"Up-to-date, standard guidelines are available in a central location. Existing standard HIS  guidelines align with the practice, workflows, and business needs, and there is a plan for regular review and updates. HIS standard guidelines are recognized by key stakeholders and widely adopted for HIS activities and implementations."
                  },
                  {
                    "Optimized (5)":"The process of creation, adoption, and management of HIS standard guidelines is continuously improved. Practice, workflows, and business needs inform creation or adoption of new standard guidelines."
                  }
                ]
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
                      scope: '#/properties/his_standard_guidelines/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Some data sets for clinical care and monitoring and evaluation (M&E) exist for specific projects or programs at the local level, but national information needs with distinct data elements, including sex disaggregation*, are not clearly defined; no national indicator set exists."
                  },
                  {
                    "Repeatable (2)":"Some data sets for managing clinical care, surveillance, and M&E exist but are used in a limited setting. Surveillance data sets may exist for programs/diseases that previously had an outbreak. There are efforts to harmonize data sets with those from international organizations and standards."
                  },
                  {
                    "Defined (3)":"There is a formal, recognized body and defined guidelines for creating, updating, and maintaining national health data sets (including sex disaggregation, where applicable). Core minimum data sets, including those for clinical care, surveillance, laboratory, pharmacy, or M&E programs, are defined and used nationally and regionally. Data sets are harmonized with those from international organizations and recognized standards."
                  },
                  {
                    "Managed (4)":"All data sets (including sex disaggregation, where applicable) are developed in line with national guidelines. Minimum data sets are widely adopted and used by stakeholders working in the health sector. The national indicator set is integrated in the national health plan or strategy, and implementation is reviewed by the designated unit or department. There is a plan for regular reviews and updates."
                  },
                  {
                    "Optimized (5)":"The national data sets (including sex disaggregation, where applicable) are managed in a central system with capability to publish and subscribe. Information needs and a corresponding indicator set are periodically reviewed, to align with evolving HIS and health goals."
                  }
                ]
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
                      scope: '#/properties/dataset_definitions/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"No defined technical standards exist for use in the country's HIS data management and exchange, or may exist for specific diseases or HIS activities."
                  },
                  {
                    "Repeatable (2)":"The country has adopted and/or developed standards for health data management and exchange, but standards may be localized to specific projects. There is an effort nationally to standardize the process."
                  },
                  {
                    "Defined (3)":"Standards for health data management and exchange are approved and monitored. An interoperability laboratory exists for new exchange partners to test or for onboarding, and a certification process exists."
                  },
                  {
                    "Managed (4)":"The national data management and exchange standards are integrated in the national HIS and/or health plan. Exchange standards are tracked, monitored, and reviewed through a standardized process."
                  },
                  {
                    "Optimized (5)":"Electronic data transmission is the default method for moving data among systems, facilities, and information systems. Industry-based standards are followed."
                  }
                ]
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
                      scope: '#/properties/data_exchange_standards/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"A facility list exists only for specific projects or programs. The health ministry has fragmented facility lists or no master facility list (MFL)."
                  },
                  {
                    "Repeatable (2)":"There is no government-developed facility list, but partners/funder-supported lists exist. Existing facility lists are not harmonized. The health ministry has created a central MFL or health facility registry that is available to the stakeholders."
                  },
                  {
                    "Defined (3)":"A central MFL under the health ministry is being used in the HIS. The MFL includes geographic location of the sites. There is a defined guideline for managing and updating the list, overseen by a designated governing body. Lists are available and shared with stakeholders."
                  },
                  {
                    "Managed (4)":"The MFL is updated regularly, to add to it or otherwise revise it. MFL use and periodic updates are integrated in the HIS plan or health strategic plan. There is an established feedback process to review and address gaps in MFL data/metrics."
                  },
                  {
                    "Optimized (5)":"The full, coordinated MFL is available as a common and managed registry. The master facility registry has the capability to publish and subscribe. The health ministry (or governing body) regularly reviews and updates the central MFL and shares it with the stakeholders."
                  }
                ]
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
                      scope: '#/properties/master_facility_list/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is limited understanding of indicator metadata in use for different program areas. Metadata are inconsistently collected and rarely consolidated outside of project artifacts."
                  },
                  {
                    "Repeatable (2)":"Templates are adopted to provide some consistency in content and format of captured metadata. Metadata are consolidated and available from a single portal for HIS activities and implementation in a limited setting."
                  },
                  {
                    "Defined (3)":"The collection of indicator metadata on structured content is established, and scheduled automated extracts are performed for selected systems. Processes for collecting and storing Indicator metadata include appropriate disaggregation, including by sex. There is a defined process for updating indicator metadata."
                  },
                  {
                    "Managed (4)":"A central indicator registry is the primary location for all indicator metadata. Indicator Metadata can be automatically shared with other systems."
                  },
                  {
                    "Optimized (5)":"There is a metadata solution that provides a single point of access to federated metadata resources."
                  }
                ]
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
                      scope: '#/properties/indicator_registry/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is limited understanding of clinical terminologies and classification of how they can be used. Terminology is rarely consolidated outside of HIS implementation or project artifacts."
                  },
                  {
                    "Repeatable (2)":"Some programs use standardized templates to maintain consistency in the content and format of terminology. Metadata are consolidated and available from a single portal."
                  },
                  {
                    "Defined (3)":"Terminology for a clinical minimum data set is defined and in use nationally. The collection of metadata on structured content is automated, and scheduled extracts are performed for selected systems. There is a defined process for extending or localizing the content of terminologies to meet local needs."
                  },
                  {
                    "Managed (4)":"A centralized metadata store is the primary location for all institutional metadata. Terminology metadata can be automatically shared with other systems. The existing terminology is available in human and machine-readable format from a central location."
                  },
                  {
                    "Optimized (5)":"A metadata solution exists and provides a single point of access to federated metadata resources. Feedback is used to improve use of terminologies locally, by extending and localizing the content."
                  }
                ]
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
                      scope: '#/properties/terminology_management/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is a basic understanding of the need for unique person identification. Use of unique person identification is limited to a program or local setting."
                  },
                  {
                    "Repeatable (2)":"Programs are able to share unique identifiers developed and assigned by other programs."
                  },
                  {
                    "Defined (3)":"Unique person identifiers that can be used across facilities and services are implemented and are used nationally."
                  },
                  {
                    "Managed (4)":"Unique person identification is a core HIS service that includes the ability to use multiple identifiers or other person data to share information.Unique person identifiers are implemented and are used across the health system. There is an established process for assigning unique person identifiers and for unique person identification."
                  },
                  {
                    "Optimized (5)":"Assignment of unique identifiers is integrated in the planning process of new initiatives."
                  }
                ]
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
                      scope: '#/properties/unique_person_identity_management/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"A national health information architecture is nonexistent or not clearly defined."
                  },
                  {
                    "Repeatable (2)":"The government authority has published a national health information architecture document, but it has not been standardized or harmonized across all HIS sector needs."
                  },
                  {
                    "Defined (3)":"National health information architecture is up-to-date and being implemented and includes foundational interoperability tools required to perform HIS functions."
                  },
                  {
                    "Managed (4)":"National health information architecture is integrated in the HIS and/or the health plan. "
                  },
                  {
                    "Optimized (5)":"Continuous learning, innovation, and quality control exist in the work on HIS interoperability and information sharing."
                  }
                ]
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
                      scope: '#/properties/enterprise_architecture/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is limited capability to support standardized patient data exchange between systems within local or specific implementation. Data exchange is based on peer-to-peer interfaces, which require major efforts to implement and manual intervention during data exchange."
                  },
                  {
                    "Repeatable (2)":"Capabilities to support automated patient data exchange using internationally recognized standards between systems exist in limited settings. Major efforts are required to ensure that data exchange standards are integrated in the systems."
                  },
                  {
                    "Defined (3)":"There are nationally defined data standards in use based on international standards to support patient-level data exchange. Most applications have integrated data standards with well-developed interoperability verification regimes. Moderate implementation effort is needed to realize data exchange."
                  },
                  {
                    "Managed (4)":"Minimal effort is required to realize data exchange. Applications are implemented mostly on plan with requisite interoperability quality. Most components conform to adopted or de facto standards and are certified conformant and interoperable."
                  },
                  {
                    "Optimized (5)":"Applications do not require specialized engineering efforts or expertise to implement interoperability. All data exchanges are based on certified interoperability standards. Robust maintenance and update processes are planned and include feedback to standard development organization(s) to improve the standards."
                  }
                ]
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
                      scope: '#/properties/person_data_exchange/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Limited capability exists for exchanging aggregate data using standards between systems. Aggregate data reporting is achieved via manual import/export process. "
                  },
                  {
                    "Repeatable (2)":"Capabilities to support automated aggregate data reporting exist in limited settings. Data formats used for data exchange are application/software-specific and require major efforts to implement."
                  },
                  {
                    "Defined (3)":"Defined aggregate data exchange standards and guides exist and are used nationally to support aggregate data reporting. Moderate effort is needed to implement automated aggregate data reporting at all levels. Processes are in place to maintain disaggregated data, such as sex and age, where applicable. "
                  },
                  {
                    "Managed (4)":"Applications have the ability to automatically exchange aggregate data, using defined standards at all levels."
                  },
                  {
                    "Optimized (5)":"Applications do not require specialized engineering efforts or expertise to implement interoperability. All data exchanges are based on certified interoperability standards. Robust maintenance and update processes are planned, including feedback to standards development organizations (SDO) to improve the standards."
                  }
                ]
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
                      scope: '#/properties/aggregate_data_exchange/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Commodity data are shared on an ad hoc basis or as needed. The data are exchanged using electronic templates in spreadsheet or Word documents via email or file sharing. Electronic data exchange capability for commodity data is limited or  is mainly paper-based."
                  },
                  {
                    "Repeatable (2)":"Basic electronic exchange of commodity data occurs in limited settings. Data exchange is achieved on a peer-to-peer basis between systems, but it is not implemented across the entire supply chain."
                  },
                  {
                    "Defined (3)":"There are nationally defined processes and standardized message standards for exchanging commodity data between systems in use."
                  },
                  {
                    "Managed (4)":"Capability to exchange data between commodity management and health information systems, such as electronic medical records (EMRs) and pharmacy information systems, exist to support order requests and fulfilment."
                  },
                  {
                    "Optimized (5)":"Applications do not require specialized engineering efforts or expertise to implement interoperability. All data exchanges are based on certified interoperability standards. Robust maintenance and update processes are planned and include feedback to SDOs to improve the standards."
                  }
                ]
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
                      scope: '#/properties/commodity_management_data_exchange/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"No electronic data exchange conducted"
                  },
                  {
                    "Repeatable (2)":"Data exchange is manual, and security standards exists locally or for specific implementations."
                  },
                  {
                    "Defined (3)":"Security standards are used in limited settings for basic/simple electronic data exchange. Data security depend on the infrastructure and application security in place."
                  },
                  {
                    "Managed (4)":"Security requirements for data, applications, and network infrastructure to support data exchange are defined and used nationally."
                  },
                  {
                    "Optimized (5)":"Data exchange security is reviewed on a regular schedule to ensure privacy, confidentiality, and compliance with set guidelines"
                  }
                ]
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
                      scope: '#/properties/data_security_exchange/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Procedures for data collection, processing, analysis, and use exists locally or for specific implementations. Data quality reviews and audits are conducted on an ad hoc basis and are driven by specific data needs. A data-quality assurance plan and national coordinating body (can be a subgroup under the health leadership group/team) to oversee data quality are being discussed."
                  },
                  {
                    "Repeatable (2)":"Procedures used during the course of data collection, processing, analysis, and use exist in limited settings. Some electronic tools are used to facilitate data quality review and audit process. The document setting forth the data-quality assurance plan is available. "
                  },
                  {
                    "Defined (3)":"Procedures for data collection, processing, analysis, and use are defined and implemented nationally (including sex-disaggregated data, where applicable). A regular schedule is defined for conducting data quality reviews and audits, which include a remediation process to address identified issues. There are procedures for documenting metadata. A national coordinating body to oversee data quality is established and meets regularly (at least annually, will vary with context)"
                  },
                  {
                    "Managed (4)":"Data reviews and audits (including sex-disaggregated data, where applicable) are integrated in the HIS plan/health plans, conducted on a regular schedule using automated and manual processes to ensure defined levels of quality. Regular meetings of a national data-quality governing body occur, and issues identified are addressed through an established remediation process, which includes documentation of changes made. Data and metrics on data quality assurance (DQA) are shared with stakeholders. Standards for exchanging data between systems to avoid manual reentry where possible are in use nationally."
                  },
                  {
                    "Optimized (5)":"There is continuous review and auditing through automated and manual processes, to ensure defined levels of data quality. Metrics reported on data quality issues are used for continuous improvement. The data-quality assurance plan is reviewed periodically by a national coordinating body and appropriate stakeholders, and the plan is revised to meet evolving data quality needs (including sex-disaggregated data, where applicable)."
                  }
                ]
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
                      scope: '#/properties/data_quality_assurance_quality_control/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Data management processes are not documented, or documented processes lack clarity and are specific to select HIS activities or projects."
                  },
                  {
                    "Repeatable (2)":"Data management processes are clearly documented in a nationally recognized and established mechanism to ensure quality of data being transmitted across health system levels."
                  },
                  {
                    "Defined (3)":"Data management processes are up-to-date, implemented, and monitored for compliance, including quality of data transmitted across health system levels."
                  },
                  {
                    "Managed (4)":"Standard operating procedures for national health data management are integrated in the national HIS and/or health plans and data quality is actively monitored and shared with stakeholders."
                  },
                  {
                    "Optimized (5)":"Standard operating procedures for health data management are periodically reviewed and/or revised to ensure alignment with evolving HIS and/or health data needs."
                  }
                ]
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
                      scope: '#/properties/data_management/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"A data use strategy document (which includes information needs, data collection and reporting, data dissemination, and production of targeted information products) is absent or briefly outlined"
                  },
                  {
                    "Repeatable (2)":"The data use strategy is documented and available, but may not be up-to-date or harmonized across the HIS."
                  },
                  {
                    "Defined (3)":"Implementation of the data use strategy (including use of sex-disaggregated data, where applicable) is monitored, reviewed, and overseen by an established governing body for data review. Data are shared with stakeholders."
                  },
                  {
                    "Managed (4)":"The data use strategy is integrated in the HIS strategic plan and/or health plans. Goals and monitoring requirements are determined by the data use strategy and are regularly monitored."
                  },
                  {
                    "Optimized (5)":"The data use strategy is adapted to meet emerging decision-making needs of program managers, policymakers, and providers interacting with HIS, and it is integrated in the long-term health plan to promote a culture of data use."
                  }
                ]
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
                      scope: '#/properties/data_use_availability_strategy/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Data collection tools are not standard and procedures are not consistently followed; data are collected and stored in an unstructured format. Data systems design supports availability of data for some users. Each program manages its data separately, and sharing is on ad hoc basis via fax, email, or printed copies."
                  },
                  {
                    "Repeatable (2)":"Data systems are designed and implemented to support longitudinal availability of health data (clinical, surveillance, M&E) in limited settings. The data are available for centrally mandated reporting. Standard operating procedures cover multiple contingencies and are consistently followed."
                  },
                  {
                    "Defined (3)":"Most platforms/applications ensure data availability at all levels for decision support and M&E for authorized users."
                  },
                  {
                    "Managed (4)":"The data systems in use ensure reliable and appropriate access to data at all levels for authorized users. Changes in reporting requirements are accommodated with minimal disruptions to data availability. Data systems support secondary use of data."
                  },
                  {
                    "Optimized (5)":"Data availability is monitored for continuous improvements and to meet emerging health sector needs."
                  }
                ]
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
                      scope: '#/properties/information_data_availability/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Data use competencies are unknown, limited to specific instances of HIS implementation, or barely documented."
                  },
                  {
                    "Repeatable (2)":"Data use competencies are clearly documented and available but may not be harmonized."
                  },
                  {
                    "Defined (3)":"Data use competencies are up-to-date, and integrated in training courses/programs (existing and/or new) imparted to users. Data use competency development is tracked by user type and health system level."
                  },
                  {
                    "Managed (4)":"Training programs/courses imparting data use competencies are integrated in the HIS plan and/or health plans. There is a standardized plan for tracking and measuring competencies and an established feedback mechanism to make updates and address gaps."
                  },
                  {
                    "Optimized (5)":"Data use competencies and related training programs/courses are revised to meet emerging and future needs of users."
                  }
                ]
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
                      scope: '#/properties/data_use_competencies/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Guidance (methods, processes, and practices) for user engagement in data-based progress review and performance monitoring and assessment is missing or is in the early stages of discussion."
                  },
                  {
                    "Repeatable (2)":"Guidance (methods, processes, and practices) for user engagement in data-based progress review and performance monitoring and assessment is documented and available."
                  },
                  {
                    "Defined (3)":"Guidance for user engagement is implemented, up-to-date, and monitored for compliance by an established governing body."
                  },
                  {
                    "Managed (4)":"Guidance for user engagement is integrated in the HIS plan and/or health plans. Results from reviews are incorporated in decision making, including resource allocation and financial disbursement."
                  },
                  {
                    "Optimized (5)":"Guidance for user engagement is periodically reviewed and revised to address emerging and future decision-making needs of users."
                  }
                ]
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
                      scope: '#/properties/user_stakeholder_engagement/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"The purpose, type (e.g., technical report, policy brief, table, chart, etc.), target audience (level of health system), and intended result of an information product and a dissemination and/or feedback plan are not explicitly documented. "
                  },
                  {
                    "Repeatable (2)":"Guidance on the design and use of information products highlights gender issues and is documented and available"
                  },
                  {
                    "Defined (3)":"Guidance on the design and use of information products is up-to-date, implemented, and monitored for compliance by an established governing body."
                  },
                  {
                    "Managed (4)":"Guidance on the design and use of information products is integrated in the HIS plan and/or health plan."
                  },
                  {
                    "Optimized (5)":"Guidance on the design and use of information products is periodically reviewed and revised to ensure its applicability and relevance to emerging and future decision-making needs."
                  }
                ]
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
                      scope: '#/properties/data_synthesis_communication/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Reporting and analytics features are limited. Routine reporting of critical health indicators is not standardized, and it occurs on an irregular basis. The reporting process is predominantly manual. More effort is required, because of the large number of tools needed. Reporting or analysis is based on individual or program efforts."
                  },
                  {
                    "Repeatable (2)":"Some efficiency measures have been implemented in the reporting process by consolidating reporting tools. Electronic submission of routine reports from subnational levels exists in limited settings. Analytical features are in separate statistical software applications."
                  },
                  {
                    "Defined (3)":"There are established national systems and guidelines to support standardized routine reporting (including sex-disaggregated data, where applicable). Automated data reporting from point of service to national systems have been implemented in limited settings. Basic reporting and analysis features are available within applications and meet the needs of the users at all levels."
                  },
                  {
                    "Managed (4)":"Automated data reporting (including sex-disaggregated data, where applicable) is implemented nationally from point of service on a routine basis. Features to support data discovery, integration, analysis, and visualization exist at all levels."
                  },
                  {
                    "Optimized (5)":"Metrics on reporting and analysis capabilities with feedback from users are used for continuous improvement."
                  }
                ]
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
                      scope: '#/properties/reporting_analytics_features/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Discussion of the impact of data use has been initiated and measurement parameters may exist for specific HIS implementation."
                  },
                  {
                    "Repeatable (2)":"Parameters on the measurement of the impact of data use are defined and documented (including use of sex-disaggregated data)."
                  },
                  {
                    "Defined (3)":"Parameters on the measurement of the impact of data use are up-to-date, implemented, monitored, and reviewed by a designated governing body. "
                  },
                  {
                    "Managed (4)":"Parameters on the measurement of the impact of data use are integrated in the HIS and/or health plans and plans for process feedback are documented and disseminated."
                  },
                  {
                    "Optimized (5)":"Evidence of the impact of data use is available and guides program adaptation/changes to meet emerging and future health program goals."
                  }
                ]
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
                      scope: '#/properties/data_use_impact/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"There is limited alignment between data collection process and the existing workflow. Data collection is mainly driven by mandated reporting requirements, which may not align with the existing workflow. There is some alignment with data collection and the existing workflow locally or in specific implementations. Data for existing data elements are often collected multiple times, through standalone forms or applications and re-entered manually, even within the same workflow"
                  },
                  {
                    "Repeatable (2)":"Some healthcare-related workflows are documented and are aligned with data collection processes. Some capability to reuse collected data within a documented workflow exists locally or for specific implementation. HIS applications do not link directly to enable basic data exchange."
                  },
                  {
                    "Defined (3)":"Nationally defined data collection processes and tools exist that align with workflow at all levels. Data systems are customized and implemented, based on established workflows. Technology applications from different entities serve a common goal and are linked and exchanging data."
                  },
                  {
                    "Managed (4)":"Applications use standard data collection tools aligned with existing workflow at all levels. Owners and users of HIS applications are required to comply with the country’s interoperability plan. Procedures and training materials for data collection are developed and updated, based on the existing workflow. Capabilities exist to reuse collected data and resources seamlessly within the workflows."
                  },
                  {
                    "Optimized (5)":"Alignment of data collection processes and tools with the existing workflows are evaluated on a regular basis for continuous improvement. Most HIS applications are exchanging data electronically, according to government-approved standards, and are producing data to meet user needs."
                  }
                ]
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
                      scope: '#/properties/data_collection_alignment_workflow/properties/goal',
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
                grid:true,
                toolTip:[
                  {
                    "Emerging/Ad Hoc (1)":"Decision support (DS) is focused only on program, resources and/or patient data reports and summaries and some DS tools exist locally or for specific implementations"
                  },
                  {
                    "Repeatable (2)":"DS exists in some settings and is based on alerts and reminders to the program manager, care provider, and patients. There is a recognized need to establish standard procedures to support decision making. "
                  },
                  {
                    "Defined (3)":"DS tools incorporate program and clinical guidelines. Condition-specific order sets and documentation templates are defined. Knowledge-based systems are implemented in some settings to support decision making."
                  },
                  {
                    "Managed (4)":"DS tools are automated, to use the knowledge base for contextually relevant reference information. The capability exists for diagnostic support within the DS tools. Assessments to ensure the knowledge relevance, value, and accuracy of algorithms are conducted on a regular schedule."
                  },
                  {
                    "Optimized (5)":"The capability for predictive and retrospective analytics that combine multiple factors, using statistical and/or artificial intelligence techniques, exists. There is ongoing review of the knowledge relevance, value, and accuracy of DS algorithms for continuous improvement."
                  }
                ]
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
                      scope: '#/properties/decision_support_clinical_other/properties/goal',
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
}
