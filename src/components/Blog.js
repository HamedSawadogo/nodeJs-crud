import React, { useState } from "react";
import "../styles/blog.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteData } from "../features/blog.slice";

const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const formatDate = (time) => {
    return new Date(time).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/posts/${blog.id}`)
      .then(() => dispatch(deleteData(blog.id)));
  };
  return (
    <div className="blog-container">
      <span>{blog.author}</span>
      <small>
        <strong>posté le {formatDate(blog.time)}</strong>
      </small>
      <h3>{blog.title}</h3>
      {edit ? <textarea rows="10" cols="40"></textarea> : <p>{blog.body}</p>}
      <button onClick={() => setEdit(!edit)}>éditer</button>
      <button onClick={() => handleDelete()}>supprimer</button>
    </div>
  );
};

export default Blog;
