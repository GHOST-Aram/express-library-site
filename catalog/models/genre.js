import { Model, ModelSchema } from "../../ghost/db/model";

const GenreSchema = new ModelSchema({
    name: { type: String, require: true, minLength: 3, maxLength: 100 },
})

GenreSchema.virtual('url').get(()=> `catalog/genre/${this._id}`)

export const Genre = new Model('Genre', GenreSchema)