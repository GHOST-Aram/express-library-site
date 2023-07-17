import { ModelSchema, Model } from "../../ghost/db/model";

const BookInstanceSchema = new ModelSchema({
    book: {type: ModelSchema.Types.ObjectId, ref: 'Book', required: true},
    imprint: { type: String, required: true },
    status: { 
        type: String, 
        required: true, 
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
        default: 'Maintenance'
    },
    due_back: { type: Date, default: Date.now }
})

BookInstanceSchema.virtual('url').get(
    () => `/catalog/bookinstance/${this._id}`
    )

export const BookInstance = new Model('BookInstance', BookInstanceSchema)