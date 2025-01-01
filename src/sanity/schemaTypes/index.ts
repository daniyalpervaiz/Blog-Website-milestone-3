import { type SchemaTypeDefinition } from 'sanity'
import {blog} from "../schemaTypes/blog"
import {author} from "../schemaTypes/author"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,author],
}
