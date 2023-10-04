import "./App.css";
import AddPostForm from "./features/AddPostForm";
import PostsLists from "./features/posts/PostsList";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
