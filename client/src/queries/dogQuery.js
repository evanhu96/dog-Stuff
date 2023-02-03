import { gql } from "@apollo/client";

export const  GET_DOGS= gql`
    query getDogs {
      facetSearch(breed:"Saluki") {
        id
        breed
        name
        age
      }
    }
  `;
// export const  GET_DOGS_BY_CATEGORY= gql`
//     query getDogs {
//       facetSearch(category: "Toy") {
//         id
//         breed
//         name
//         age
//       }
//     }
//   `;

