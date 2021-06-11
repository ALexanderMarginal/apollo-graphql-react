const {gql} = require('apollo-server');
const typeDefs = gql`
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "Track ID"
        id: ID!
        "Track title"
        title: String!
        "Track author"
        author: Author!
        "Track thumbnail"
        thumbnail: String
        "Track length"
        length: Int
        "Track modules count"
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;
