/**
 * HIS SOCI Assessment Schema
 *  
 **/ 
export const HisSociSchema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
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
        goal: { type: 'string',
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
        location: { type: 'string',readOnly:true,enum:['Uganda','Kenya','Rwanda','Burundi','Tanzania',"Indonesia","USA","Ghana","Ivory Coast","Madagascar","Norway","Canada","India"]},
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
              id:{ type:'string'},
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
    },
    his_leadership_coordination:{
      "$ref":"#/definitions/assessment"
    },
    his_organization_structure_function:{
      "$ref":"#/definitions/assessment",
    },
    his_competencies:{
      "$ref":"#/definitions/assessment"
    },
    his_training_education:{
      "$ref":"#/definitions/assessment"
    },
    hr_policy:{
      "$ref":"#/definitions/assessment"
    },
    his_financing_plan:{
      "$ref":"#/definitions/assessment"
    },
    resource_mobilization:{
      "$ref":"#/definitions/assessment"
    },
    reliable_power_electricity:{
      "$ref":"#/definitions/assessment"
    },
    ict_business_infrastructure:{
      "$ref":"#/definitions/assessment"
    },
    hardware:{
      "$ref":"#/definitions/assessment"
    },
    networks_internet_connectivity:{
      "$ref":"#/definitions/assessment"
    },
    business_continuity_processes_policies:{
      "$ref":"#/definitions/assessment"
    },
    his_standard_guidelines:{
      "$ref":"#/definitions/assessment"
    },
    dataset_definitions:{
      "$ref":"#/definitions/assessment"
    },
    data_exchange_standards:{
      "$ref":"#/definitions/assessment"
    },
    master_facility_list:{
      "$ref":"#/definitions/assessment"
    },
    indicator_registry:{
      "$ref":"#/definitions/assessment"
    },
    terminology_management:{
      "$ref":"#/definitions/assessment"
    },
    unique_person_identity_management:{
      "$ref":"#/definitions/assessment"
    },
    enterprise_architecture:{
      "$ref":"#/definitions/assessment"
    },
    person_data_exchange:{
      "$ref":"#/definitions/assessment"
    },
    aggregate_data_exchange:{
      "$ref":"#/definitions/assessment"
    },
    commodity_management_data_exchange:{
      "$ref":"#/definitions/assessment"
    },
    data_security_exchange:{
      "$ref":"#/definitions/assessment"
    },
    data_quality_assurance_quality_control:{
      "$ref":"#/definitions/assessment"
    },
    data_management:{
      "$ref":"#/definitions/assessment"
    },
    data_use_availability_strategy:{
      "$ref":"#/definitions/assessment"
    },
    information_data_availability:{
      "$ref":"#/definitions/assessment"
    },
    data_use_competencies:{
      "$ref":"#/definitions/assessment"
    },
    user_stakeholder_engagement:{
      "$ref":"#/definitions/assessment"
    },
    data_synthesis_communication:{
      "$ref":"#/definitions/assessment"
    },
    reporting_analytics_features:{
      "$ref":"#/definitions/assessment"
    },
    data_use_impact:{
      "$ref":"#/definitions/assessment"
    },
    data_collection_alignment_workflow:{
      "$ref":"#/definitions/assessment"
    },
    decision_support_clinical_other:{
      "$ref":"#/definitions/assessment"
    }
  }

};
