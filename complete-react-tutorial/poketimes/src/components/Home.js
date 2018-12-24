import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'


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
                        <img src={Pokeball} width="125px" alt="pokeball.png"/>

                        <div className="card-content">
                            {/*<Link to={'/posts/' + String(post.id)}>*/}
                            <Link to={'/' + String(post.id)}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        );


        return (
            <div className="container home">
                <h1 className="center">Home page</h1>
                { postList }
            </div>
        )
    }
}


export default Home