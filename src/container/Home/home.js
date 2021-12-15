//libraries
import React, { Component, Fragment, } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//pages
import LifeCycle from '../pages/LifeCycleComp/lifeCycle';
import BlogPost from '../pages/BlogPost/blogPost';
import Product from '../pages/Product/product';
import YouTubePage from 'container/pages/YouTubeCompPage/youtubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/detailPost';
import Hooks from '../../container/pages/Hooks/hooks';

//style
import './home.css';
import GlobalProvider from '../../context/context';

class Home extends Component {
    
    // state = {
    //     showComponent: true
    // }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 15000);
    // }

    render() {
        return (
            // <div>
            //     <p>YouTube Component</p>
            //     <hr/>
            //     <YouTube 
            //         time='7.12' 
            //         title="Ulfa's Vlog Eps.5"
            //         desc='2x ditonton. 2 hari yang lalu'/>
            //     <YouTube 
            //         time='8.02' 
            //         title="Ulfa's Vlog Eps.4"
            //         desc='200x ditonton. 10 hari yang lalu'/>
            //     <YouTube 
            //         time='5.04' 
            //         title="Ulfa's Vlog Eps.3"
            //         desc='500x ditonton. 15 hari yang lalu'/>
            //     <YouTube 
            //         time='4.38' 
            //         title="Ulfa's Vlog Eps.2"
            //         desc='1kx ditonton. 20 hari yang lalu'/>
            //     <YouTube />
            //     <p>Container</p>
            //     <hr/>
            //     <Product />
            //     <p>LifeCycle Component</p>
            //     <hr/>
            //     {
            //         this.state.showComponent 
            //         ?
            //         <LifeCycle />
            //         :null
            //     }
            // <div >
            //     <p>Blog Post</p>
            //     <hr />
            //     <BlogPost />
            // </div>
            
            <Router>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">BlogPost</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                            <Link to="/youtube">YouTube</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:id" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycle} />
                        <Route path="/youtube" component={YouTubePage} />
                        <Route path="/hooks" component={Hooks} />
                    </Fragment>
            </Router>
        );
    }
}

export default GlobalProvider(Home);