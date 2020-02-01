import * as mongoose from 'mongoose';

export const CenturySchema = new mongoose.Schema({
    id: Number,
    title: String,
    scholars: [String],
});
