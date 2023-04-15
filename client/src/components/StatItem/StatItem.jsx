import React from "react";

function StatItem({ title, stat }) {
    return ( 
        <div className="StatItem">
            <p className="StatTitle">{title}</p>
            <div className="StatBar">
                <div className="StatPercetage">
                    <p className="Stat">{stat}</p>
                </div>
            </div>
        </div>
    );
}

export default StatItem;