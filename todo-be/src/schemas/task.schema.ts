import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {

    @Prop({ required: true })
    content: string;

    @Prop({ required: true, default: false })
    isDone: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);