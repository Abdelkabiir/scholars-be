import { Document } from 'mongoose';

export interface Century extends Document {
   readonly name: string;
}
