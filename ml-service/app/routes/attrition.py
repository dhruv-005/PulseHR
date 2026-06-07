from flask import Blueprint, request, jsonify
from app.services.attrition_predictor import AttritionPredictor

attrition_bp = Blueprint("attrition", __name__)
predictor = AttritionPredictor()

@attrition_bp.route("/predict", methods=["POST"])
def predict_attrition():
    """Predict attrition risk for an employee"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({"success": False, "message": "No data provided"}), 400

        result = predictor.predict(data)
        return jsonify({
            "success": True,
            "data": result
        }), 200
    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

@attrition_bp.route("/predict/bulk", methods=["POST"])
def predict_attrition_bulk():
    """Predict attrition risk for multiple employees"""
    try:
        data = request.get_json()
        employees = data.get("employees", [])
        if not employees:
            return jsonify({"success": False, "message": "No employees provided"}), 400

        results = predictor.predict_bulk(employees)
        return jsonify({
            "success": True,
            "data": results
        }), 200
    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500
