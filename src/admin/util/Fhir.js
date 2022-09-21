/**
 * Manipulate FHIR JSON Schemas
 * @param {*} schema 
 * @param {*} type 
 * @param {*} version 
 * @returns 
 */
export const getFhirSchema=(schema,type,version,resourceTypes)=>{
    if(schema){
        const schemaResult = schema.find((s) =>s.type === type && s.version === version);
        const schemaMapping = Object.entries(schemaResult.schema.discriminator.mapping);
        const acceptedResourceTypes = filterResourceTypes(schemaMapping,resourceTypes)
        if(schemaResult.schema){
            schemaResult.schema ={
                ...schemaResult.schema,
                properties: {
                    type: "object"
                }
            };
            acceptedResourceTypes?.forEach(([key,value])=>{
                schemaResult.schema.properties = {
                    ...schemaResult.schema.properties,
                    [key]:{
                        "$ref": value
                    }
                }
            });
        }
       
        //const results = schemaResult.schema.oneOf.find((sr)=>sr.$ref === resourceType);
        //delete schemaResult.schema.oneOf;
        delete schemaResult.schema.$id;
        schemaResult.schema.$schema = "http://json-schema.org/draft-07/schema#";
        return schemaResult;
    }
    return schema;
}
/**
 * Extract only resourceTypes used
 * @param {*} schemaMapping 
 * @param {*} resourceTypes 
 * @returns 
 */
export const filterResourceTypes = (schemaMapping,resourceTypes)=>{
    if(resourceTypes){
        return schemaMapping?.filter(([key,_value])=>resourceTypes.includes(key));
    }
    return schemaMapping;

}