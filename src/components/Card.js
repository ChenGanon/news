import React from 'react'

const Card = (props) => { 
    
  return (
      <main>
      <div className="card-group">
        <div className="col card mb-3 m-md-2 m-lg-2">
          <div className="list-group card-body align-content-center pr-0">
            <img
              src={props.results.urlToImage}
              alt="תמונה לא זמינה"
              className="w-100 mt-2 mb-2 rounded"
              height="200px"
            />
            <h5 className="list-group">{props.results.title}</h5>
            <p className="list-group mt-3">
              {props.results.description === null
                ? "תוכן לא זמין"
                : props.results.description}
            </p>
            <p className="list-group text-right mt-1">
              {new Date(props.results.publishedAt).toDateString()}
            </p>
          </div>
          <div className="card-footer bg-white pt-3 ">
            <br />
            <a
              href={props.results.url}
              target="_blank"
              className="btn btn-primary"
            >
              לכתבה המלאה
            </a>
          </div>

          <br />
        </div>
      </div>
    </main>
   
  )
}

export default Card
