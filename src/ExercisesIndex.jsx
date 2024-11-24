import React, { useState } from "react";
import axios from "axios";

export function ExercisesIndex({ exercises, onAddToRoutine }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleAddToRoutine = (exercise) => {
    const routineData = { exercise_id: exercise.id, reps: "", sets: "" };

    axios
      .post("/routines.json", routineData)
      .then((response) => {
        console.log("Routine added:", response.data);
        onAddToRoutine(response.data); // Pass the new routine to the parent component for state update
        alert("Exercise added to your routine!");
      })
      .catch((error) => {
        console.error("Error adding routine:", error);

        if (error.response && error.response.status === 500) {
          // Show modal if user is not logged in
          setShowLoginModal(true);
        } else {
          alert("Could not add exercise to routine. Please try again.");
        }
      });
  };

  return (
    <div id="exercises-index" className="container">
      <video autoPlay loop muted className="background-video">
        <source
          src="/videos/vecteezy_animated-icon-of-a-weightlifting-athlete-with-a-glowing-neon_35888286.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1 className="text-center mb-4 cool-heading">Strength Training Exercises</h1>

        {selectedVideo && (
          <div className="modal-overlay">
            <div className="modal-content">
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
                aria-label="Close Video"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {showLoginModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h5>You need to log in to add exercises to your routine.</h5>
              <a
                href="/login"
                className="btn btn-primary mt-3"
                style={{ textDecoration: "none" }}
              >
                Go to Login Page
              </a>
              <button
                className="btn btn-secondary mt-3"
                onClick={() => setShowLoginModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="row">
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
                  <button
                    className="btn custom-hover mt-2"
                    onClick={() => handleAddToRoutine(exercise)}
                  >
                    Add to Routine
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
