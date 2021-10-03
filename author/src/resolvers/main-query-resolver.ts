import { AuthorResolver, _authors } from "./author-resolver";

export const mainQueryResolver = {
    Query: {
        ...AuthorResolver
    },
    Author: {
        __resolveReference(ref: any) {
            return _authors.find(b => b.id == ref.id);
        }
    }
}
