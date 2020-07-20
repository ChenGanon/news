import React from "react";
import Card from "./Card";

const Cards = props => {
  return (
    <section>
      <h1 className="text-center mt-5">{props.title}</h1>
      <br />
      <div className="s">
        <input
          type="text"
          name="search"
          onChange={props.handleChange}
          autoComplete="off"
          placeholder="חיפוש"
          className="search-box"
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 text-center d-flex flex-wrap justify-content-around m-2">
        {props.s !== "" ? (
          props.filter.length === 0 ? (
            <h3>אין תוצאות חיפוש</h3>
          ) : (
            props.filter.map(result => (
              <Card key={result.url} results={result} />
            ))
          )
        ) : (
          props.results.map(result => (
            <Card title={props.title} key={result.url} results={result} />
          ))
        )}
      </div>
    </section>
  );
};

export default Cards;
