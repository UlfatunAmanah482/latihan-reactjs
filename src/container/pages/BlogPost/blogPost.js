import React, { Component, Fragment } from 'react';
import './blogPost.css';
import Post from '../../../component/Post/post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    // getPostAPI = () => {
    //     axios.get('http://localhost:3004/posts')
    //     .then((res) => {
    //         // console.log(res.data);
    //         this.setState({
    //             post: res.data
    //         })
    //     });
    // }

    // handleRemove = (data) => {
    //     // console.log(data);
    //     axios.delete(`http://localhost:3004/posts/${data}`)
    //     .then((res) => {        
    //         this.getPostAPI(); 
    //     });
    // }

    // http://localhost:3004/posts

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     });
        // });
        // this.getPostAPI();
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        });
    }

    // handleDetail = () => {

    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Spot</p>
                <hr/>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                        // data={post} remove={this.handleRemove}
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;