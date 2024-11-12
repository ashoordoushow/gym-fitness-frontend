export function RoutinesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  
  return (
    <div>
      <h1>New Routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          Exercise_id: <input name="exercise_id" type="text" />
        </div>
        <div>
          Reps: <input name="reps" type="text" />
        </div>
        <div>
          Sets: <input name="Sets" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}