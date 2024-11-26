import React, { useState } from "react";
import axios from "axios";

export function ExercisesIndex({ exercises, onAddToRoutine }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const groupExercisesByCategory = (exercises) => {
    return exercises.reduce((groups, exercise) => {
      const { category } = exercise;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(exercise);
      return groups;
    }, {});
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedExercises = groupExercisesByCategory(filteredExercises);

  const handleAddToRoutine = (exercise) => {
    const routineData = { exercise_id: exercise.id, reps: "", sets: "" };

    axios
      .post("/routines.json", routineData)
      .then((response) => {
        console.log("Routine added:", response.data);
        onAddToRoutine(response.data);
        alert("Exercise added to your routine!");
      })
      .catch((error) => {
        console.error("Error adding routine:", error);

        if (error.response && error.response.status === 500) {
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
        <div
          className="d-flex align-items-center justify-content-between mb-4 py-3 px-4 rounded shadow"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,139,0.7), rgba(0,128,255,0.7))",
            color: "#fff",
          }}
        >
          <h1 className="cool-heading mb-0">Strength Training Exercises</h1>
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            style={{
              width: "300px",
              maxWidth: "80%",
              border: "2px solid #007BFF",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "25px",
              padding: "10px 20px",
              fontSize: "16px",
              boxShadow: "0px 0px 5px rgba(0, 123, 255, 0.5)",
            }}
          />
        </div>

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
          <div
            className="modal-overlay d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1050,
              backdropFilter: "blur(5px)",
            }}
          >
            <div
              className="modal-content text-center p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                width: "90%",
                maxWidth: "400px",
              }}
            >
              <h5
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Login Required
              </h5>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "30px",
                }}
              >
                You need to log in to add exercises to your routine. Please log
                in or create an account.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="/login"
                  className="btn btn-primary px-4"
                  style={{
                    textDecoration: "none",
                    borderRadius: "30px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    boxShadow: "0px 3px 8px rgba(0,123,255,0.3)",
                  }}
                >
                  Login
                </a>
                <button
                  className="btn btn-outline-secondary px-4"
                  onClick={() => setShowLoginModal(false)}
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    color: "#333",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {Object.keys(groupedExercises).map((category) => (
          <div key={category}>
            <h2 className="exercise-category-title text-center mt-5 mb-3">
              {category.charAt(0).toUpperCase() + category.slice(1)} Exercises
            </h2>
            <div className="row">
              {groupedExercises[category].map((exercise) => (
                <div
                  key={exercise.id}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                >
                  <div
                    className="card shadow-lg border-0 rounded"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "#fff",
                      border: "2px solid #00FFFF",
                    }}
                  >
                    <img
                      src={exercise.image_url}
                      className="card-img-top rounded-top"
                      alt={exercise.name}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderBottom: "2px solid #00FFFF",
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{exercise.name}</h5>
                      <p className="card-text small white-text">
                        {exercise.description}
                      </p>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-sm watch-video-button"
                          onClick={() => {
                            const videoId = exercise.video_url.split("v=")[1];
                            setSelectedVideo(videoId);
                          }}
                        >
                          Watch Video
                        </button>
                        <button
                          className="btn btn-sm add-to-routine-button"
                          onClick={() => handleAddToRoutine(exercise)}
                        >
                          Add to Routine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
