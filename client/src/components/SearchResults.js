import { useQuery, useLazyQuery } from "@apollo/client";
import DogRow from "./DogRow";
import { GET_DOGS } from "../queries/dogQuery";
import { useState, useEffect } from "react";

export default function SearchResults() {
  //   different states for checkboxes
  var [findObject, setFindObject] = useState({});
  const [activityLevel, setActivityLevel] = useState([]);
  const [dogCategory, setDogCategory] = useState([]);
  const [house, setHouse] = useState([]);
  const [grooming, setGrooming] = useState([]);
  //   const { loading, error, data } = useQuery(GET_DOGS);
  //   useEffect(()=>{
  //     console.log('hey');
  //     console.log(findObject);
  //   })
  const [getDog, { loading, error, data }] = useLazyQuery(GET_DOGS);

  useEffect(() => {
    getDog({ variables: { breed: ["Saluki", "Poodle"], age: [5, 4] } });
    setFindObject(data);
    return <p>hey</p>;
  }, []);

  // use graphql

  // creates object based on boxes checked

  const newChange = async (event) => {
    if (event.target.checked) {
      if (event.target.name === "activity") {
        var activity = activityLevel;
        activity.push(event.target.id);
        setActivityLevel(activity);
        activity = { $in: activity };
        findObject.exercise = activity;
        setFindObject(findObject);
      } else if (event.target.name === "category") {
        var category = dogCategory;
        category.push(event.target.id);
        setDogCategory(category);
        category = { $in: category };
        findObject.category = category;
        setFindObject(findObject);
      } else if (event.target.name === "house") {
        var homeSize = house;
        homeSize.push(event.target.id);
        setHouse(homeSize);
        homeSize = { $in: homeSize };
        findObject.homeSize = homeSize;
        setFindObject(findObject);
      } else {
        var groom = grooming;
        groom.push(event.target.id);
        setGrooming(groom);
        groom = { $in: groom };
        findObject.grooming = groom;
        setFindObject(findObject);
      }
    } else {
      // remove object properties when unchecked

      if (event.target.name === "activity") {
        var activity = activityLevel;
        for (var i = 0; i < activity.length; i++) {
          if (activity[i] === event.target.id) {
            activity = activity.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        setActivityLevel(activity);
        console.log(activity);
      } else if (event.target.name === "category") {
        var category = dogCategory;
        for (var i = 0; i < category.length; i++) {
          if (category[i] === event.target.id) {
            category = category.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        setDogCategory(category);
      } else if (event.target.name === "house") {
        var housing = house;
        for (var i = 0; i < housing.length; i++) {
          if (housing[i] === event.target.id) {
            housing = housing.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        setHouse(housing);
      } else {
        var groom = grooming;
        for (var i = 0; i < groom.length; i++) {
          if (groom[i] === event.target.id) {
            groom = groom.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        setGrooming(groom);
      }
    }
    // getDog({variable:findObject})
    console.log(data);
  };

  return (
    <>
      {" "}
      {/*  wont send results till done loading and no error  */}
      {!loading && !error && (
        //   {/* section for search sidbar */}
        <section>
          <div>
            <div id="sideBar">
              <h1>Activity Level</h1>
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Up to 30 minutes per day"
                  name="activity"
                />
                Up to 30 minutes per day
              </label>
              <br />
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Up to 1 hour per day"
                  name="activity"
                />
                Up to 1 hour per day
              </label>
              <br />
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="More than 2 hours per day"
                  name="activity"
                />
                More than 2 hours per day
              </label>

              <hr />
              <h1>Category</h1>
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Toy"
                  name="category"
                />
                Toy
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Hound"
                  name="category"
                />
                Hound
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Terrior"
                  name="category"
                />
                Terrior
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Utility"
                  name="category"
                />
                Utility
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Working"
                  name="category"
                />
                Working
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Pastoral"
                  name="category"
                />
                Pastoral
              </label>

              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Working"
                  name="category"
                />
                Working
              </label>
              <br />
              <hr />

              <h1>Grooming</h1>
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Every day"
                  name="grooming"
                />
                Every day
              </label>
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="More than once a week"
                  name="grooming"
                />
                More than once a week
              </label>
              <br />
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Once a week"
                  name="grooming"
                />
                Once a week
              </label>
              <br />
              <hr />

              <h1>House Size</h1>
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Flat/ Apartment"
                  name="house"
                />
                Flat/ Apartment
              </label>
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Large house"
                  name="house"
                />
                Large house
              </label>
              <br />
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Small house"
                  name="house"
                />
                Small house
              </label>
              <br />
              <hr />
            </div>
          </div>
          {/* fill with data from search */}
          <table>
            <thead>
              <tr>
                <th>Breed</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.facetSearch.map((dog) => (
                <DogRow key={dog.id} dog={dog} />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
