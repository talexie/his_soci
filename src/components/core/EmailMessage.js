import { fromString } from 'html-to-text';
import moment from 'moment';
/**
 * Generate Email message template
 * @param { object } data Data from the assessment
 * @param { object } respondent Assessment respondent
 * @param { string } api The baser url of the assessment
 */
 export const getEmailMessage = (data,respondent,api,sender)=>{
    const message = fromString(
        "<html><head><meta charset='utf-8'></head><body style='tab-interval:.5in'><div><p>&nbsp;</p><p><h>Dear "+ respondent.firstname + " " + respondent.surname+ ",</h2></p><p>This email is a request to you to complete the online assessment: (HIS) Stages of Continuous Improvement (SOCI).  You have been identified as an expert with valuable input to add to the assessment. Your input will inform future efforts for HIS improvement.</br><span style='background:yellow;mso-highlight:yellow'>Click this link to access the assessment: <a href=" +api +"/api/apps/HIS-SOCI-tool/index.html#/setup?id=" + respondent.id + ">" + api +"/api/apps/HIS-SOCI-tool/index.html#/setup?id=" + respondent.id+ "</a></span></br><h2>What is HIS SOCI?</h2></br>The HIS SOCI assessment tool measures the status and goals of an HIS across five stages, identifies gaps, and supports the development of roadmaps to improve HIS capabilities related to processes, people, and systems essential for achieving a country’s health goals. This toolkit responds to these research questions:</br></br><ol><li>What are the stages of HIS development?</li><li>How can HIS be assessed and their maturity continuously improved to achieve better health outcomes?</li></ol></br>The assessment is based on a measurement scale consisting of 39 essential HIS subcomponents across five stages from emerging to optimized. The scale outlines key components of HIS improvement and defines attributes of each subcomponent on a five-point Likert scale. For more information about the full toolkit and its creation, visit: <a href='https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit'>https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit</a></br></br><h2>How do I complete the assessment?</h2></br>For each of the 39 subcomponents, you will be asked to determine the current and goal status of your national HIS by selecting appropriate response from the drop-down options. The stage for each individual subcomponent is defined in detail in the <b>Overview</b> tab, under the <b>Stages of Progression</b>. The User Guide details the process of completing the assessment.</br></br>In order to complete this assessment, you will need to login to the web-based application built using DHIS 2 to access the assessment and related analytics.  Please note responses from all the participants of the assessments will be aggregated and used to guide the stakeholder consultation process. The stakeholder consultation will discuss and interpret scores for each of the components and sub-components and then determine the final score. The final score will be used to develop the HIS improvement roadmap.</br></br><h2>Thank you for taking the time to complete the assessment.</h2></br></br><h2>If you have any clarifying question, please write to " + sender.email +" for SOCI leadership team</br></br>Sincerely,</br></br>"+ sender.displayName+" , "+ data.location +"</br>HIS SOCI assessment leadership team</br>Date:"+ moment().format('MM-DD-YYYY')+ "</br></div></body></html>", 
        {
            wordwrap: 130,
            uppercaseHeadings: false,
            hideLinkHrefIfSameAsText: true,
            noLinkBrackets: true
        });

    return message;
 }
 export default getEmailMessage;