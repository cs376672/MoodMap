from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="MoodMap API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # 개발 환경을 위해 모든 오리진 허용 (추후 프론트엔드 도메인으로 제한 필요)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TripRequest(BaseModel):
    destination: str
    duration: int
    districts: List[str]
    mood_keywords: List[str]

@app.get("/")
def read_root():
    return {"message": "Welcome to MoodMap API"}

@app.post("/api/generate-itinerary")
def generate_itinerary(request: TripRequest):
    # TODO: Gemini API 연동 및 프롬프트 로직 구현
    return {
        "status": "success", 
        "data": {
            "trip_title": "테스트 타이틀",
            "schedule": []
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
