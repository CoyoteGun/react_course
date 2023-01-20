import {useEffect, useState} from "react";

import './App.css';

import {Posts} from "./components/Posts";
import {PostDetails} from "./components/PostDetails";
import {getPosts} from "./api/getPosts";




const App = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        getPosts().then(resp => setPosts(resp));
    },[]);

  return (
      <div className={'App'}>

          <div className={'info-block'}>
              {!!posts.length && <Posts posts={posts} onSelectPost={id => setPostId(id)}/>}
          </div>

          <div className={'divider'}/>

          <div className={'info-block'}>
              {!!postId && <PostDetails postId={postId}/>}
          </div>

      </div>
  );
};

export {
  App
};