import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts/MainLayout";
import {RouterEndpoints} from "./routes/routes";
import {HomePage} from "./pages/HomePage/HomePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {PostByCommentPage} from "./pages/PostByCommentPage/PostByCommentPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={RouterEndpoints.index} element={<MainLayout/>}>
            <Route path={RouterEndpoints.index} index element={<HomePage/>} />
            <Route path={RouterEndpoints.todos} element={<TodosPage/>} />
            <Route path={RouterEndpoints.albums} element={<AlbumsPage/>} />
            <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                    <Route path={RouterEndpoints.postId} element={<PostByCommentPage/>}/>
            </Route>
        </Route>
      </Routes>

    </div>
  );
}

export { App};
