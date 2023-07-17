import { Model, ModelSchema } from "../../ghost/db/model"

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

AuthorSchema.methods.greetAuthor = () =>`Hello ${this.name}, we are delighted.`

export const Author = new Model('Author', AuthorSchema)