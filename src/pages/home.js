import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogsData } from "../features/blog.slice";
import { blogsSelector } from "../features/selector";
import Blog from "../components/Blog";
import "../styles/blogs.css";

const Home = () => {
  const dispatch = useDispatch();
  const blogsData = useSelector(blogsSelector);
  const fetchBlogsData = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => dispatch(setBlogsData(res.data)));
  };

  useEffect(() => {
    fetchBlogsData();
  }, [dispatch]);
  return (
    <div className="blogs-container">
      <Navigation />
      <h2>
        Retrouvez nos Mellieurs Sujets sur le developpement Web Javascript React
        JS ,Node Js,Redux,Next Js{" "}
      </h2>
      {blogsData?.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Home;
