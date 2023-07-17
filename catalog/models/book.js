import { ModelSchema, Model } from "../../ghost/db/models";

const BookSchema = new ModelSchema({
    title: { type: String, required: true},
    author: { 
        type: ModelSchema.Types.ObjectId, ref: 'Author', required: true
    },
    isbn: { type: String, required: true },
    genre: [{ type: ModelSchema.Types.ObjectId, ref: 'Genre'}]
})

BookSchema.virtual('url').get(() => `catalog/book/${this._id}`)

export const Book = new Model('Book', BookSchema)