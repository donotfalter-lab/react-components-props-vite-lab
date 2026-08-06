// App.js
import React from "react";
import blog from "../components/blog";
import Header from "../../Header";
import About from "./About";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";


function App() {
  return (
    <div>
      <Header name={blog.name}  />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.post} />
    </div>
  );
}

export default App;