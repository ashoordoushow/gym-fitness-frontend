import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";


export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  // Fetch exercises
  const handleIndex = () => {
    axios.get("/exercises.json").then((response) => {
      setExercises(response.data);
    });
  };

  // Add routine callback
  const handleAddToRoutine = (newRoutine) => {
    setRoutines((prevRoutines) => [...prevRoutines, newRoutine]);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ExercisesIndex exercises={exercises} onAddToRoutine={handleAddToRoutine} />
    </main>
  );
}
