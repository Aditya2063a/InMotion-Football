# InMotion Football ⚽

> AI-powered football video analysis system that extracts comprehensive insights from football matches including player tracking, team assignment, ball possession, speed analysis, and distance metrics.

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://inmotionfootball.netlify.app/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🎥 Demo Video

<!-- 
Add your demo video here:
- Upload your video to a platform like YouTube, Vimeo, or host it directly
- Replace the placeholder URL below with your actual video URL
- You can also embed the video directly if hosting locally
-->

### Demo Video Placeholder
```
🎬 [Upload your demo video here]

To add your demo video:
1. Upload to YouTube/Vimeo or host directly
2. Replace this section with:
   - For YouTube: [![Demo Video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
   - For Vimeo: Add embed code
   - For direct hosting: <video src="path/to/video.mp4" controls></video>
```

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Demo Video](#-demo-video)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Technologies](#-technologies)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

InMotion Football is a comprehensive AI-driven football video analysis platform that transforms raw football footage into actionable insights. The system combines computer vision, machine learning, and web technologies to provide detailed match analysis including player tracking, team assignment, ball possession metrics, speed analysis, and distance covered statistics.

### Key Capabilities
- **Real-time Player Tracking**: Advanced YOLO-based object detection and tracking
- **Team Classification**: Automatic team assignment using K-means clustering on jersey colors
- **Ball Possession Analysis**: Frame-by-frame ball control tracking with team statistics
- **Speed & Distance Metrics**: Real-time calculation of player speeds and distances covered
- **Camera Movement Compensation**: Optical flow-based camera movement estimation and correction
- **Perspective Transformation**: Converting pixel coordinates to real-world field coordinates

## ✨ Features

### 🎯 Core Analytics
- **Player Tracking**: Individual player identification and trajectory mapping
- **Ball Detection**: Precise ball location tracking with interpolation for missed frames
- **Team Assignment**: Automatic jersey color-based team classification
- **Possession Metrics**: Real-time ball possession percentage calculations
- **Speed Analysis**: Player speed tracking in km/h
- **Distance Coverage**: Total distance covered by each player in meters

### 🔧 Technical Features
- **Camera Stabilization**: Lucas-Kanade optical flow for camera movement correction
- **Perspective Correction**: 2D to real-world coordinate transformation
- **Data Persistence**: Stub file system for caching processed data
- **Batch Processing**: Efficient frame-by-frame video processing
- **RESTful API**: FastAPI backend with file upload/download capabilities

### 🌐 Web Interface
- **Drag-and-Drop Upload**: Intuitive video file upload interface
- **Real-time Processing**: Live progress tracking during video analysis
- **Download Results**: Processed video download with all annotations
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Modern UI/UX**: Clean, professional interface with animated elements

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   Frontend      │    │   Backend       │    │   AI/ML         │
│   (React)       │◄──►│   (FastAPI)     │◄──►│   Pipeline      │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   File Upload   │    │   Video         │    │   YOLO Model    │
│   Interface     │    │   Processing    │    │   Detection     │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Processing Pipeline
1. **Video Input**: Upload football video through web interface
2. **Object Detection**: YOLO model detects players, referees, and ball
3. **Object Tracking**: ByteTrack algorithm maintains object identities
4. **Team Assignment**: K-means clustering on jersey colors
5. **Camera Movement**: Optical flow estimation for stabilization
6. **Perspective Transform**: Convert to real-world coordinates
7. **Analytics Calculation**: Speed, distance, and possession metrics
8. **Annotation Rendering**: Draw tracking info on video frames
9. **Output Generation**: Processed video with all annotations

## 🚀 Installation

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn
- Git

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/InMotion-Football.git
cd InMotion-Football
```

2. **Set up Python environment**
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Python dependencies**
```bash
pip install ultralytics supervision opencv-python pandas scikit-learn fastapi uvicorn python-multipart
```

4. **Download YOLO model**
```bash
# Download the trained football model (best.pt) and place in models/
mkdir models
# Place your trained YOLO model as models/best.pt
```

5. **Create required directories**
```bash
mkdir input_videos output_videos stubs
```

### Frontend Setup

1. **Navigate to Frontend directory**
```bash
cd ../Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

### Running the Application

1. **Start Backend (Terminal 1)**
```bash
cd Backend
uvicorn app.main_api:app --reload --host 0.0.0.0 --port 8000
```

2. **Start Frontend (Terminal 2)**
```bash
cd Frontend
npm run dev
```

3. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## 💻 Usage

### Web Interface

1. **Navigate** to the live website: [https://inmotionfootball.netlify.app/](https://inmotionfootball.netlify.app/)

2. **Upload Video**:
   - Go to the Upload page
   - Drag and drop a football video or click to select
   - Supported formats: MP4, AVI, MOV

3. **Process Video**:
   - Click "Upload" to start processing
   - Wait for AI analysis to complete
   - Download the processed video with annotations

### Command Line Usage

```bash
cd Backend
python main.py
```

**Note**: Update the input video path in `main.py` before running.

### API Usage

```python
import requests

# Upload and process video
url = "http://localhost:8000/process-video/"
files = {"file": open("input_video.mp4", "rb")}
response = requests.post(url, files=files)

# Save processed video
with open("processed_video.avi", "wb") as f:
    f.write(response.content)
```

## 📚 API Documentation

### Endpoints

#### POST `/process-video/`
Upload and process a football video.

**Request**:
- Method: POST
- Content-Type: multipart/form-data
- Body: Video file (MP4, AVI, MOV)

**Response**:
- Content-Type: video/x-msvideo
- Body: Processed video file with annotations

**cURL Example**:
```bash
curl -X POST "http://localhost:8000/process-video/" \
     -H "accept: application/json" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@your_video.mp4"
```

## 📁 Project Structure

```
InMotion-Football/
├── Backend/
│   ├── app/
│   │   ├── main_api.py              # FastAPI application
│   │   └── processor.py             # Video processing logic
│   ├── camera_movement_estimator/
│   │   ├── __init__.py
│   │   └── camera_movement_estimator.py  # Camera movement tracking
│   ├── player_ball_assigner/
│   │   ├── __init__.py
│   │   └── player_ball_assigner.py   # Ball-to-player assignment
│   ├── speed_and_distance_estimator/
│   │   ├── __init__.py
│   │   └── speed_and_distance_estimator.py  # Speed & distance metrics
│   ├── team_assigner/
│   │   ├── __init__.py
│   │   └── team_assigner.py          # Team classification
│   ├── trackers/
│   │   ├── __init__.py
│   │   └── tracker.py                # YOLO-based object tracking
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── bbox_utils.py             # Bounding box utilities
│   │   └── video_utils.py            # Video I/O operations
│   ├── view_transformer/
│   │   ├── __init__.py
│   │   └── view_transformer.py       # Perspective transformation
│   ├── main.py                       # Main processing script
│   ├── models/                       # YOLO model files
│   ├── input_videos/                 # Input video directory
│   ├── output_videos/                # Processed video directory
│   └── stubs/                        # Cached processing data
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx            # Page header component
│   │   │   └── NavBar.jsx            # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Upload.jsx            # Video upload interface
│   │   │   ├── ModelDetails.jsx      # Model information page
│   │   │   └── About.jsx             # About page
│   │   ├── assets/                   # Static assets
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # App entry point
│   │   ├── index.css                 # Global styles
│   │   └── App.css                   # App-specific styles
│   ├── public/                       # Public assets
│   ├── package.json                  # Node.js dependencies
│   ├── vite.config.js                # Vite configuration
│   └── tailwind.config.js            # Tailwind CSS config
└── README.md                         # This file
```

## 🛠️ Technologies

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Ultralytics YOLO**: State-of-the-art object detection
- **OpenCV**: Computer vision and image processing
- **Supervision**: Object tracking utilities
- **Scikit-learn**: Machine learning for team classification
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing

### Frontend
- **React 19**: Modern UI library
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Heroicons**: Beautiful SVG icons
- **Video.js**: HTML5 video player

### AI/ML Components
- **YOLO v8**: Object detection model
- **ByteTrack**: Multi-object tracking algorithm
- **K-means Clustering**: Team classification
- **Lucas-Kanade**: Optical flow for camera tracking
- **Perspective Transformation**: Coordinate mapping

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Areas for Contribution
- Model improvements and training
- UI/UX enhancements
- Performance optimizations
- Additional analytics features
- Documentation improvements
- Bug fixes and testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ultralytics** for the YOLO framework
- **OpenCV** community for computer vision tools
- **React** and **FastAPI** communities
- **Football analytics** research community
- **Open source contributors**

## 📞 Support

- 🌐 **Website**: [https://inmotionfootball.netlify.app/](https://inmotionfootball.netlify.app/)
- 📧 **Email**: [Your email here]
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/InMotion-Football/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/InMotion-Football/discussions)

---

<div align="center">
  <p>Made with ❤️ for the football analytics community</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>