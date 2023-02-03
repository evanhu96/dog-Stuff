import { gql } from "@apollo/client";

export const  GET_DOGS= gql`
    query getDogs {
      facetSearch(breed: "Saluki") {
        id
        breed
        name
        age
      }
    }
  `;

