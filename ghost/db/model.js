import { Schema, model } from "../app/init";

export class ModelSchema extends Schema{
    constructor(documentDefinition){
        super(documentDefinition)
    }
}

export class Model{
    constructor(identifier, modelSchema){
        return model(identifier, modelSchema)
    }
}