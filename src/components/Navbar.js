import React from 'react'

const Navbar = (props) => {

    const handleClick = (title,category)=>{
        props.setName(title);
        props.setCategory(category);
        props.reqCategory(category);
        console.log(title);
        console.log(category);
        
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ri text-right">
    <a className="navbar-brand title" href="#">
      News
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li  className={props.category==="home" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("חדשות",'home')}
          >
            דף הבית
          </a>
        </li>
        <li className={props.category==="business" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("עסקים",'business')}
            
          >
            עסקים
          </a>
        </li>
        <li className={props.category==="entertainment" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("בידור",'entertainment')}
          >
            בידור
          </a>
        </li>
        <li className={props.category==="health" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("בריאות",'health')}

            
          >
            בריאות
          </a>
        </li>
        <li className={props.category==="science" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("מדע",'science')}
           
          >
            מדע
          </a>
        </li>
        <li className={props.category==="sports" ? "active" : "nav-item"}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("ספורט",'sports')}
            
          >
            ספורט
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => handleClick("טכנולוגיה",'technology')}
            
          >
            טכנולוגיה
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
