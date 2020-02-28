/**
 * HIS SOCI Assessment Setup Schema
 *  
 **/ 
export const HisSociSetupSchema ={
    type:'object',
    properties:{
      id:{ type: 'string',readOnly:true},
      status: { type: 'string'},
      date: { type: 'string', format:'date'},
      period:{  type: 'string',enum:['2018','2019','2020']},
      location: { type: 'string',enum:['Uganda','Kenya','Rwanda','Burundi','Tanzania',"Indonesia","USA","Ghana","Ivory Coast","Madagascar","Norway","Canada","India"]},
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
  }