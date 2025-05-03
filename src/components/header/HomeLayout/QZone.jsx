import React from 'react';
import swimmingImg from '../../../assets/swimming.png'
import classImg from '../../../assets/class.png'
import playImg from '../../../assets/playground.png'
const QZone = () => {
    return (
        <div className=' bg-base-300 py-4n'>
            <h1 className=' font-bold'>Q-Zone</h1>
            <div>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;