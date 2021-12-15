import React, { Component, Fragment } from 'react';
import YouTube from '../../../component/YouTubeComp/youtubeComp';

class YouTubePage extends Component {
    render() {
        return(
            <Fragment>
                <p>YouTube Component</p>
                <hr/>
                <YouTube 
                    time='7.12' 
                    title="Ulfa's Vlog Eps.5"
                    desc='2x ditonton. 2 hari yang lalu'/>
                <YouTube 
                    time='8.02' 
                    title="Ulfa's Vlog Eps.4"
                    desc='200x ditonton. 10 hari yang lalu'/>
                <YouTube 
                    time='5.04' 
                    title="Ulfa's Vlog Eps.3"
                    desc='500x ditonton. 15 hari yang lalu'/>
                <YouTube 
                    time='4.38' 
                    title="Ulfa's Vlog Eps.2"
                    desc='1kx ditonton. 20 hari yang lalu'/>
                <YouTube />
            </Fragment>
        );
    }
}

export default YouTubePage;