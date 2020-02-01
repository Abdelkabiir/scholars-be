import { Document } from 'mongoose';

export interface Century extends Document {
   readonly id: number;
   readonly title: string;
   readonly scholars: [string];
}
