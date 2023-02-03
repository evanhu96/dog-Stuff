// import { useMutation } from "@apollo/client";
// import { DELETE_DOG } from "../mutations/dogMutations";

export default function DogRow({ dog }) {
  // const [deleteDog] = useMutation(DELETE_DOG, {
  //   variables: { id: dog.id },
  // });
  return (
    <tr>
      <td>{dog.breed}</td>
      <td>{dog.name}</td>
      <td>{dog.age}</td>
      <td>
        {/* <button onClick={deleteDog}>
          adopt
          </button> */}
      </td>
    </tr>
  );
}
