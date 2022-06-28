import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
  query getAllUser {
    getAllUser {
      id
      name
      username
    }
  }
`;
