
import * as mongoose from 'mongoose';

export const TaskSchema: mongoose.Schema = new mongoose.Schema({
  customId: {
    type: Number,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    reqired: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
});