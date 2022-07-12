import { Schema, models, model } from "mongoose"

export interface NoteType {
  title: string,
  description: string,
  _id?: string,
}

const NoteSchema = new Schema<NoteType>({
  title: {
    type: String,
    required: [true, 'Please add title.'],
    unique: true,
    trim: true,
    maxlength: [40, 'Title cannot be longer than 40 characters.']
  },
  description: {
    type: String,
    require: true,
    maxlength: [200, 'Description cannot be longer than 40 characters.']
    
  }

})

export default models.Note || model('Note', NoteSchema)