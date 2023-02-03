import { useQuery } from "@apollo/client";
import { GET_DOGS } from "../queries/dogQuery";

export default function Body({ breed, setBreed, current, setCurrent }) {
  const  { loading, error, data ,refetch} = useQuery(GET_DOGS);
  if (current === "search") {
    if (breed === "") {
      return (
        <div>
          <button onClick={() => setBreed("not")}>Body</button>
          <button onClick={() => setBreed("not")}>Body</button>
          <button onClick={() => setBreed("not")}>Body</button>
        </div>
      );
    } else {
        
        
      return <>{!loading && !error && (<button onClick={() => refetch()}>here</button>)}</>;
    }
  } else if (current === "not") {
    console.log(current);
    return <button onClick={() => setCurrent("search")}>not</button>;
  }
}
