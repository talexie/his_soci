/**
 * HIS SOCI Assessment Setup UISchema
 *  
 **/ 
export const HisSociSetupUiSchema = {
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
              sort: true,
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
  }
