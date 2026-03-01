import React from 'react';
import { Truck } from 'lucide-react';

const StatRow = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{label}</span>
        <span style={{ fontWeight: '600' }}>{value}</span>
    </div>
);

const RestockPanel = ({ recommendData }) => {
    if (!recommendData) return null;

    return (
        <div className="glass chart-container" style={{ minHeight: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                <Truck size={20} color="var(--accent-primary)" />
                Restocking Engine
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <StatRow label="Current Stock" value={recommendData.current_stock} />
                <StatRow label="Lead Time" value={`${recommendData.lead_time} days`} />
                <StatRow label="Lead Time Demand" value={recommendData.lead_time_demand.toFixed(0)} />
                <StatRow label="Safety Stock (95% CI)" value={recommendData.safety_stock.toFixed(0)} />
                <StatRow label="Reorder Point" value={recommendData.reorder_point.toFixed(0)} />

                <div style={{ marginTop: 'auto', background: 'var(--bg-dark)', padding: '1.5rem', border: '1px solid var(--border-subtle)', borderRadius: '16px', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>System Recommendation</span>
                    {recommendData.recommended_restock > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: '1.2', textTransform: 'uppercase' }}>
                                Order {recommendData.recommended_restock} Units
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--warning)', letterSpacing: '0.5px' }}>URGENT ACTION REQUIRED</span>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: '1.2', textTransform: 'uppercase' }}>
                                Inventory Optimized
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>NO ACTION NEEDED</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestockPanel;
