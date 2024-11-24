import React, { useEffect, useState } from "react";
import axios from "axios";

export function RoutinesNew() {
  const [routines, setRoutines] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch routines with exercise details when the component mounts
  useEffect(() => {
    fetchRoutines();
  }, []);

  const fetchRoutines = () => {
    axios
      .get("/routines.json")
      .then((response) => {
        setRoutines(response.data);
      })
      .catch((error) => {
        console.error("Error fetching routines:", error);
      });
  };

  // Update routine in state
  const handleInputChange = (index, field, value) => {
    const updatedRoutines = [...routines];
    updatedRoutines[index][field] = field === "sets" ? String(value) : value; // Ensure 'sets' is stored as a string
    setRoutines(updatedRoutines);
  };

  // Save routine updates to the backend
  const handleSave = (routine) => {
    axios
      .patch(`/routines/${routine.id}.json`, routine)
      .then((response) => {
        console.log("Routine updated:", response.data);
        alert("Routine saved successfully!");
      })
      .catch((error) => {
        console.error("Error updating routine:", error);
      });
  };

  // Remove a routine from the backend
  const handleRemove = (routineId) => {
    axios
      .delete(`/routines/${routineId}.json`)
      .then((response) => {
        console.log(response.data.message);
        // Update the state to remove the deleted routine
        setRoutines(routines.filter((routine) => routine.id !== routineId));
        alert("Exercise removed from your routine.");
      })
      .catch((error) => {
        console.error("Error removing routine:", error);
        alert("Failed to remove exercise. Please try again.");
      });
  };

  return (
    <div id="routines-new" className="container position-relative">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source
          src="/videos/vecteezy_animated-icon-of-a-weightlifting-athlete-with-a-glowing-neon_35888286.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Video Modal */}
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

      {/* Content Overlay */}
      <div className="content-overlay">
        <h1 className="text-center mb-4 cool-heading">My Routine</h1>

        {routines.length === 0 ? (
          <p className="text-center">No routines found. Add some exercises!</p>
        ) : (
          <div className="row">
            {routines.map((routine, index) => (
              <div key={routine.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="card shadow-sm border border-dark">
                  {/* Exercise Image */}
                  <img
                    src={routine.exercise.image_url}
                    className="card-img-top"
                    alt={routine.exercise.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    {/* Exercise Details */}
                    <h5 className="card-title">{routine.exercise.name}</h5>
                    <p className="card-text">{routine.exercise.description}</p>

                    {/* Watch Video Button */}
                    {routine.exercise.video_url && (
                      <button
                        className="btn btn-secondary w-100 mb-3"
                        onClick={() => {
                          const videoId = routine.exercise.video_url.split("v=")[1];
                          setSelectedVideo(videoId);
                        }}
                      >
                        Watch Video
                      </button>
                    )}

                    {/* Edit Routine */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(routine);
                      }}
                    >
                      <div className="mb-3">
                        <label htmlFor={`reps-${routine.id}`} className="form-label">
                          Reps
                        </label>
                        <input
                          id={`reps-${routine.id}`}
                          name="reps"
                          type="number"
                          className="form-control"
                          placeholder="Reps"
                          value={routine.reps || ""}
                          onChange={(e) =>
                            handleInputChange(index, "reps", e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor={`sets-${routine.id}`} className="form-label">
                          Sets
                        </label>
                        <input
                          id={`sets-${routine.id}`}
                          name="sets"
                          type="text" // Input type set to text to enforce string handling
                          className="form-control"
                          placeholder="Sets"
                          value={routine.sets || ""}
                          onChange={(e) =>
                            handleInputChange(index, "sets", e.target.value)
                          }
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Save Changes
                      </button>
                    </form>

                    {/* Remove Button */}
                    <button
                      className="btn btn-danger w-100 mt-3"
                      onClick={() => handleRemove(routine.id)}
                    >
                      Remove Exercise
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
