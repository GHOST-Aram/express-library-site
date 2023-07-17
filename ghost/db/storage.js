import { mongoose } from "../app/init.js";

export class Database{
    constructor(){
        mongoose.set('strictQuery', 'false')
    }
    connect = async(dbUri) =>{
        await mongoose.connect(dbUri)
    }
}