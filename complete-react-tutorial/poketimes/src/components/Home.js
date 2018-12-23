import React from 'react'
import { Component } from 'react'
import axios from 'axios'


class Home extends Component {
    state = {
        posts: [ ]
    };


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts'
        ).then(
            res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            }
        )
    }

    render() {
        const { posts } = this.state;
        const postList = posts.lenght ? (
            <div>No post yet</div>
        ) : (
            posts.map(post => {
                return(
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        );


        return (
            <div className="container">
                <h1 className="center">Home page</h1>
                { postList }
            </div>
        )
    }
}


export default Home