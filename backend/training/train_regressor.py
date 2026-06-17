"""
train_regressor.py — ML Engineer 2 deliverable
XGBRegressor for incident duration prediction.
"""
import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor

def train(data_path="../data/processed_dataset.csv"):
    df = pd.read_csv(data_path)
    df = df.dropna(subset=["priority"])
    df["hour_of_day"] = df["hour_of_day"].fillna(df["hour_of_day"].median())
    df["day_of_week"] = df["day_of_week"].fillna(df["day_of_week"].median())
    df.drop(columns=["planned_duration_minutes"], inplace=True, errors="ignore")
    df["resolution_minutes_log"] = np.log1p(df["resolution_minutes"])

    FEATURES = ["latitude","longitude","requires_road_closure","hour_of_day",
                "day_of_week","is_peak_hour","is_weekend","corridor_rank",
                "junction_recurrence","event_cause_enc","veh_type_enc","zone_enc"]

    X = df[FEATURES]
    y = df["resolution_minutes_log"]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    reg = XGBRegressor(n_estimators=300, max_depth=6, learning_rate=0.05,
                       random_state=42, n_jobs=-1)
    reg.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=50)
    joblib.dump(reg, "../models/duration_model.joblib")
    print("✅ duration_model.joblib saved.")

if __name__ == "__main__":
    train()
