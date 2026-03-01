import React from 'react';
import { Lightbulb, TrendingDown, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const InsightsPanel = ({ insightsData }) => {
    if (!insightsData || !insightsData.insights) return null;

    return (
        <div className="glass chart-container" style={{ minHeight: 'auto' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                <Lightbulb size={20} color="var(--warning)" />
                Smart Insights
            </h3>

            <div className="insights-list">
                {insightsData.insights.map((insight, idx) => {
                    let type = "info";
                    let Icon = Lightbulb;

                    if (insight.toLowerCase().includes("overstock") || insight.toLowerCase().includes("risk")) {
                        type = "danger";
                        Icon = AlertCircle;
                    } else if (insight.toLowerCase().includes("uptrend") || insight.toLowerCase().includes("peak")) {
                        type = "success";
                        Icon = TrendingUp;
                    } else if (insight.toLowerCase().includes("downtrend")) {
                        type = "warning";
                        Icon = TrendingDown;
                    } else if (insight.toLowerCase().includes("stable")) {
                        type = "success";
                        Icon = CheckCircle;
                    }

                    return (
                        <div key={idx} className={`insight-item ${type}`}>
                            <Icon size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{insight}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InsightsPanel;
