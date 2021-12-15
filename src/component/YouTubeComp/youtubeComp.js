import React, { Fragment } from 'react';
import './youtubeComp.css';

const YouTube = (props) => {
    return (
        <Fragment>
            <div className="ytb-wrapper">
                <div className="img-ytb">
                    <img src="BTS.jpg" alt="" />
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </Fragment>
    );
}

YouTube.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YouTube;