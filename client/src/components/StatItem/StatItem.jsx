import './StatItem.scss';

import React from "react";

function StatItem({ title, stat, color }) {
    return (
        <div className="StatItem">
            <h3 className="StatTitle">{title}</h3>
            <div className="StatBar">
                <div
                    style={{ backgroundColor: color, width: stat / 1.6 }}
                    className="StatPercetage"
                >
                    <p className="Stat">{stat}</p>
                </div>
            </div>
        </div>
    );
}

export default StatItem;