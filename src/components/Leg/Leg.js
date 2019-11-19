import React from 'react';
import STYLES from './Leg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Leg = (props) => {
        console.log("-----leg-----");
        console.log(props);
        console.log("-----end-----");
        return (
        <div className={getClassName('Card')}>
                <div className={getClassName('Leg')}>
                    <div className={getClassName('AirlineLogo')}></div>
                    <div className={getClassName('Departure')}>
                        <span className={getClassName('LegText')}>{props.departure_time}</span>
                        <span className={getClassName('LegText')}>{props.departure_airport}</span>
                    </div>
                    <div className={getClassName('ArrowRight')}></div>
                    <div className={getClassName('Arrival')}>
                        <span className={getClassName('LegText')}>{props.arrival_time}</span>
                        <span className={getClassName('LegText')}>{props.arrival_airport}</span>
                    </div>
                    <div className={getClassName('Details')}>
                        <span className={getClassName('Duration')}>{props.duration_mins}</span>
                        <span className={getClassName('Stops')}>{props.stops}</span>
                    </div>
                </div>
        </div>
        );
}

export default Leg;