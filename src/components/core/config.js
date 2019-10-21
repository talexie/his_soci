//    '$schema': 'http://json-schema.org/draft-07/schema#',
export const frsSchema = {
  schemas:{
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
        label: "I. HIS Leadership and Governance",
        elements:[
          {
            type: 'Group',
            label: 'I.A HIS Strategy',
            elements:[
            {
              type:"Group",
              label:"I.A.1 HIS Strategic planning",
              elements:[
              {
                type: 'HorizontalLayout',
                elements: [
                  {
                    type: 'Control',
                    scope: '#/properties/tech1_current',
                    options:{
                      custom: true,
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
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/tech1_evidence',
                    options:{
                      custom: true,
                      variant: 'outlined',
                      multi: true,
                    }
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/tech1_comments',
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
              label:"I.A.2 M&E Plan",
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
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/tech2_evidence',
                    options:{
                      custom: true,
                      variant: 'outlined',
                      multi:true,
                    }
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/tech2_comments',
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
    },
    ]
  },
};
