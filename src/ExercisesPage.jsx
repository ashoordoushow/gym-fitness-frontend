import { ExercisesIndex } from "./ExercisesIndex";
import { useState, useEffect } from "react";
import apiClient from "./config/axios";


export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  // Fetch exercises
  const handleIndex = () => {
    apiClient.get("/exercises").then((response) => {
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
