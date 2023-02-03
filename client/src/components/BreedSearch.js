// import { useState, useEffect } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_DOGS } from "../queries/dogQuery";
// import DogRow from "./DogRow";

// export default function BreedSearch() {
//   //   const set = (i) => {
//   //     search.setCategory(i);
//   //     search.setSearch(true);
//   //   };
//   const { loading, error, data } = useQuery(GET_DOGS);

//   return (
//     <>
//       {" "}
//       {/*  wont send results till done loading and no error  */}
//       {!loading && !error && (
//         //   {/* section for search sidbar */}
//         <section>
//           {/* fill with data from search */}
//           <table>
//             <thead>
//               <tr>
//                 <th>Breed</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.facetSearch.map((dog) => (
//                 <DogRow key={dog.id} dog={dog} />
//               ))}
//             </tbody>
//           </table>
//         </section>
//       )}
//     </>
//   );
// };

