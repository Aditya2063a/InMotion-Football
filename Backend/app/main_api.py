# main_api.py

from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
import os
import uuid
from .processor import process_video

app = FastAPI()

UPLOAD_DIR = "input_videos"
OUTPUT_DIR = "output_videos"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

@app.post("/process-video/")
async def receive_video(file: UploadFile = File(...)):
    # Save uploaded video
    input_filename = f"{uuid.uuid4().hex}_{file.filename}"
    input_path = os.path.join(UPLOAD_DIR, input_filename)

    with open(input_path, "wb") as f:
        content = await file.read()
        f.write(content)

    # Define output video path
    output_filename = input_filename.replace(".mp4", "_processed.avi")
    output_path = os.path.join(OUTPUT_DIR, output_filename)

    # Process the video
    process_video(input_path, output_path)

    return FileResponse(output_path, media_type="video/x-msvideo", filename=output_filename)
