import React from "react";
import {
  Lightbulb,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const getInsightDetails = (insight) => {
  let type = "info";
  let Icon = Lightbulb;
  const lowerInsight = insight.toLowerCase();

  if (lowerInsight.includes("overstock") || lowerInsight.includes("risk")) {
    type = "danger";
    Icon = AlertCircle;
  } else if (
    lowerInsight.includes("uptrend") ||
    lowerInsight.includes("peak")
  ) {
    type = "success";
    Icon = TrendingUp;
  } else if (lowerInsight.includes("downtrend")) {
    type = "warning";
    Icon = TrendingDown;
  } else if (lowerInsight.includes("stable")) {
    type = "success";
    Icon = CheckCircle;
  }

  return { type, Icon };
};

const InsightsPanel = ({ insightsData }) => {
  if (!insightsData || !insightsData.insights) return null;

  return (
    <div className="glass chart-container" style={{ minHeight: "auto" }}>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "1.5rem",
          color: "var(--text-main)",
        }}
      >
        <Lightbulb size={20} color="var(--warning)" />
        Smart Insights
      </h3>

      <div className="insights-list">
        {insightsData.insights.map((insight, idx) => {
          const { type, Icon } = getInsightDetails(insight);

          return (
            <div key={idx} className={`insight-item ${type}`}>
              <Icon size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                {insight}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsPanel;
