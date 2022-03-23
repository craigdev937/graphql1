import { Todo } from "../models/Todo.js";

export const resolvers = {
    Query: {
        getOne: async (obj, {_id}) => await Todo.findById(_id),
        fetchAll: async () => await Todo.find(),
    },
    Mutation: {
        create: async (obj, {input}) => {
            return await Todo.create(input);
        },
        update: async (obj, {_id, input}) => {
            return await Todo.findByIdAndUpdate(
                {_id}, input, {new: true}
            );
        },
        deleteTodo: async (obj, {_id}) => {
            return await Todo.findByIdAndDelete({_id});
        }
    }
};




