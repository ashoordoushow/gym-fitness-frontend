import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };
  
  useEffect(handleIndex, []);




  return (
    <main>
      <ExercisesIndex exercises={exercises} />
    </main>
  )
}