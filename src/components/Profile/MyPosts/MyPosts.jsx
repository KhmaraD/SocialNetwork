import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="entre text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const MyPostsFormRedux = reduxForm({form: "ProfileAddNewPostsForm"})(AddNewPostsForm);

export default MyPosts;