import $RefParser from "json-schema-ref-parser";

const resolveJsonSchema=(schema)=>{
  try {
    let refSchema = await $RefParser.dereference(schema);
  }
  catch(err) {
    console.error(err);
  }
}
