import React, { useEffect, useState} from 'react'
import { Stat } from '../api/PokemonType'

export const StatBars = ({
    base_stat,
    stat,
    effort
}: Stat) => {
    const [statPercent, setStatPercent] = useState("");

    useEffect(() => {
        const percentage = base_stat / 2.55;
        setStatPercent(`${ percentage }%`)
    }, [base_stat]);

    return (
        <div className="stats-container">
            <div className="stat-container">
                <p className="stat-name">
                    {stat.name}
                </p>
                <div className="progress">
                    <div
                        className="progress-bar"
                        aria-valuenow={base_stat}
                        
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
