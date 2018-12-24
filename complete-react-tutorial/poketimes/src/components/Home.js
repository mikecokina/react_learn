import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'


class Home extends Component {
    render() {
        console.log(this.props);

        const { posts } = this.props;
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home)