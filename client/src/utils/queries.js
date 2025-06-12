import { gql } from "@apollo/client";

export const MESSAGES = gql`
  query getMessages {
    messages {
      _id
      name
      email
      message
      postDate
    }
  }
`;
