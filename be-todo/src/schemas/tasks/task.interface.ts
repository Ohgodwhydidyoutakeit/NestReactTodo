import { Document } from 'mongoose';

export interface Task extends Document {
    readonly customId: number,
    readonly content: string;
    readonly isDone: boolean;
}
