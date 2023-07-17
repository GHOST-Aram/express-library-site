import { Model, ModelSchema } from "../../ghost/db/models"

const AuthorSchema = new ModelSchema({
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
})

AuthorSchema.virtual('name').get(
    () =>(this.first_name && this.family_name) && 
        `${this.first_name} ${this.family_name}`
)

AuthorSchema.virtual('url').get(()=> `/catalog/author/${this._id}`)

export const Author = new Model('Author', AuthorSchema)