export function ExercisesIndex({ exercises }) {
  return (
    <div>
      <h1>All exercises</h1>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} />
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${exercise.video_url.split('v=')[1]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <img src={exercise.video_url} />
          <p>Description: {exercise.description}</p>
         </div>
       ))}
    </div>
  );
}
