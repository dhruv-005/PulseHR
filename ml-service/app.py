from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.getenv("CLIENT_URL", "http://localhost:3000")])

# Register Blueprints
from app.routes.attrition import attrition_bp
from app.routes.performance import performance_bp
from app.routes.skill_gap import skill_gap_bp

app.register_blueprint(attrition_bp, url_prefix="/api/attrition")
app.register_blueprint(performance_bp, url_prefix="/api/performance")
app.register_blueprint(skill_gap_bp, url_prefix="/api/skill-gap")

@app.route("/health")
def health():
    return {
        "status": "ok",
        "service": "PulseHR ML Service",
        "version": "1.0.0"
    }, 200

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    debug = os.getenv("FLASK_ENV") == "development"
    app.run(host="0.0.0.0", port=port, debug=debug)
