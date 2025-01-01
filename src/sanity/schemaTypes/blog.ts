import { defineArrayMember, defineField, defineType } from "sanity"

export const blog = defineType(

    {
        name: "blog",
        type: "document",
        title: "Blog",
        fields: [
            defineField({
                name: "title",
                type: "string",
                title: "Blog Name",
                validation: Rule => Rule.required().error("this field is required")
            }),
            defineField({
                name: "slug",
                type: "slug",
                title: "URL",
                options: {
                    source: "title",
                    maxLength: 96,
                },
                validation: Rule => Rule.required()
            }),
            defineField({
                name: "summary",
                type: "text",
                title: "Summary",
            }),
            defineField({
                name: "image",
                type: "image",
                title: "Upload Image"

            }),
            defineField({
                name: "content",
                title: "Content",
                type: "array",
                of: [defineArrayMember({
                    type: 'block'
                })
                ]
            }),
            defineField(
                {
                    name: "author",
                    type: "reference",
                    title: "Author Name",
                    to: [
                        { type: 'author' }
                    ]



                }),

        ]
    }
)
