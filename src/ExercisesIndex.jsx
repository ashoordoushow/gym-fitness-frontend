import React, { useState } from "react";

export function ExercisesIndex({ exercises }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div id="exercises-index" className="row">
      <h1 className="text-center mb-4 cool-heading">Strength Training Exercises</h1>
      
      {/* Embedded Video Player */}
      {selectedVideo && (
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Exercise Video"
            className="embedded-video"
          ></iframe>
          <button
            className="close-video-button"
            onClick={() => setSelectedVideo(null)}
          >
            &times;
          </button>
        </div>
      )}
      
      {exercises.map((exercise) => (
        <div key={exercise.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card shadow-sm border border-dark">
            <img
              src={exercise.image_url}
              className="card-img-top"
              alt={exercise.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{exercise.name}</h5>
              <p className="card-text">{exercise.description}</p>
              <button
                className="btn custom-hover mt-2 me-2"
                onClick={() => {
                  const videoId = exercise.video_url.split("v=")[1];
                  setSelectedVideo(videoId);
                }}
              >
                Watch Video
              </button>
              {/* Add to Routine Button */}
              <button
                className="btn custom-hover mt-2"
                onClick={() => handleAddToRoutine(exercise.id)}
              >
                Add to Routine
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Example handleAddToRoutine function
const handleAddToRoutine = (exerciseId) => {
  console.log(`Exercise with ID: ${exerciseId} added to routine`);
};
