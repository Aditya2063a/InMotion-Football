import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-200 text-black pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center uppercase tracking-tight text-black mb-12">
          About InMotion Football
        </h1>

        {/* Project Overview Section */}
        <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            InMotion Football is a video analysis tool designed to enhance football analytics by tracking players, balls, and movements in gameplay footage. Using advanced computer vision techniques, the project processes uploaded football videos and provides insights such as player team assignments, ball possession, speed, and distance covered. The processed video is returned in AVI format for download, making it easy to review and analyze.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project leverages state-of-the-art technologies like YOLOv5 and OpenCV to process football videos. Here’s a step-by-step breakdown of the process:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Video Upload:</strong> Users upload a football video through the web interface. The video is sent to the backend for processing.
            </li>
            <li>
              <strong>Object Detection with YOLOv5:</strong> We use YOLOv5, a fast and accurate object detection model, to detect players and the ball in each frame of the video. YOLOv5 is highly effective for real-time detection tasks, making it ideal for identifying footballs even in dynamic scenes.
            </li>
            <li>
              <strong>Tracking with OpenCV:</strong> OpenCV is used to track the detected objects across frames. A custom Tracker class maintains the positions of players and the ball over time, handling occlusions and movement.
            </li>
            <li>
              <strong>Camera Movement Estimation:</strong> The CameraMovementEstimator adjusts for camera panning and zooming, ensuring accurate tracking of objects relative to the field.
            </li>
            <li>
              <strong>View Transformation:</strong> The ViewTransformer converts the tracked positions into a top-down view of the field, providing a clearer perspective of player movements.
            </li>
            <li>
              <strong>Team and Ball Assignment:</strong> The TeamAssigner identifies which team each player belongs to based on their jersey colors, while the PlayerBallAssigner determines which player has possession of the ball in each frame.
            </li>
            <li>
              <strong>Speed and Distance Estimation:</strong> The SpeedAndDistance_Estimator calculates the speed and distance covered by players, adding valuable analytics to the video.
            </li>
            <li>
              <strong>Annotations and Output:</strong> Finally, the processed data (e.g., player tracks, ball possession, speed) is annotated onto the video frames. The result is saved as an AVI file, which users can download.
            </li>
          </ul>
        </section>

        {/* Project Structure Section */}
        <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4">
            Project Structure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project is divided into three main components: the frontend, backend, and video processing pipeline. Here’s an overview of each:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Frontend</h3>
              <p className="text-gray-700">
                Built with React and styled using Tailwind CSS, the frontend provides a user-friendly interface for uploading videos and downloading the processed results. The Upload page allows users to drag-and-drop or select a video file, preview it, and download the processed AVI file after analysis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Backend</h3>
              <p className="text-gray-700">
                The backend is powered by FastAPI, a high-performance Python framework. It handles video uploads, processes them using the video processing pipeline, and returns the processed AVI file.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Video Processing Pipeline</h3>
              <p className="text-gray-700">
                The core of the project lies in the video processing pipeline, implemented in `processor.py`. This pipeline uses YOLOv5 for object detection, OpenCV for tracking and visualization, and custom modules for analytics:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li><strong>Tracker:</strong> Detects and tracks players and balls using YOLOv5.</li>
                <li><strong>CameraMovementEstimator:</strong> Adjusts for camera movement to ensure accurate tracking.</li>
                <li><strong>ViewTransformer:</strong> Converts positions to a top-down view of the field.</li>
                <li><strong>TeamAssigner:</strong> Assigns players to teams based on jersey colors.</li>
                <li><strong>PlayerBallAssigner:</strong> Determines which player has the ball.</li>
                <li><strong>SpeedAndDistance_Estimator:</strong> Calculates player speed and distance.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                The processed video is annotated with this data (e.g., player positions, ball possession, speed) and saved as an AVI file for download.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;