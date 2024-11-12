import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { RoutinesNew } from "./RoutinesNew";


export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };
  
  const [routines, setRoutines] = useState([]);
  const handleCreate = (params, successCallback) => {
      console.log("handleCreate", params);
      axios.post("/routines.json", params).then((response) => {
        setRoutines([...routines, response.data]);
        successCallback();
    });
  };
  
  useEffect(handleIndex, []);




  return (
    <main>
      <ExercisesIndex exercises={exercises} />
      <RoutinesNew onCreate={handleCreate} />
    </main>
  )
}