import React, { Component } from 'react';

import Posts from './Posts/Posts'
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'


const AsyncNewPost= asyncComponent(()=>{
    return import('./NewPost/NewPost')
})


class Blog extends Component {

    render () { 

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact activeClassName="my-active" activeStyle={{
                                color:"coral"
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{pathname:"/new-post",
                        hash:"#submit",
                        search:'?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path='/new-post' component={AsyncNewPost} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route render={()=><h1>Page Not Found</h1>} /> */}
                    
                </Switch>
            </div>
        );
    }
}

export default Blog;