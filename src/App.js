import React, { useState, useEffect } from "react";
import "./App.css";

import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./images/loading.gif";
import { API_KEY } from "./.env.js";
import axios from "axios";

const App = () => {
  const [nameComponent, setName] = useState("חדשות");
  const [articles, setArticles] = useState(null);
  const [category, setCategory] = useState("home");
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    reqCategory(category);
  }, [category]);

  const reqCategory = name => {
    if (name === "home") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=il&blishedAt&${API_KEY}`
        )
        .then(res => {
          setArticles(res.data.articles);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=il&category=${name}&blishedAt&${API_KEY}`
        )
        .then(res => {
          setArticles(res.data.articles);
        });
    }
  };

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearch(articles);
    console.log(search);
  };

  const handleSearch = c => {
    const s = search;

    setFilter(c.filter(el => el.title.indexOf(s) > -1));
  };

  return (
    <div className="App">
      <Navbar
        setName={setName}
        reqCategory={reqCategory}
        setCategory={setCategory}
        category={category}
        componentName={nameComponent}
      />
      {articles === null ? (
        <img
          src={Loading}
          alt="Loading..."
          style={{ width: "100px" }}
          className="loading mt-5"
        />
      ) : (
        <Cards
          title={nameComponent}
          results={articles}
          s={search}
          handleChange={handleChange}
          filter={filter}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
