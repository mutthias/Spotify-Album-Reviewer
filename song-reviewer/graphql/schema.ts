export const typeDefs = `
  type Post {
    id: ID
    title: String
    content: String
    published: Boolean
    users: [String]
  }
  
  type Query {
    posts: [Post]!
  }
`