export const resolvers = {
  Query: {
    posts: () => {
      return [
        {
          title: `Matt's Post`,
          content: 'hello this is my content rahhhhhh',
          id: 1,
          published: true,
        },
        {
          title: `Matt's 2nd Post`,
          content: 'hello this is my 2nd post content rahhhhhh',
          id: 2,
          published: true,
        },
        {
          title: `Matt's Post`,
          content: `hello this is my 3rd content '_' `,
          id: 3,
          published: true,
        },
      ]
    },
  },
}