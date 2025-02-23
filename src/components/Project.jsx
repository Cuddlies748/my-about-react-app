import React from 'react';
import "../styles/projects.css"
function Project(props) {
    console.log(props.h2);

  return (
    <div className="r_wrapper_div">
      <h2 className='project_wrap_h2'>{props.h2 || "проект"} </h2>
      <img className="im" src={props.imgSrc || "https://source.unsplash.com/300x200/?nature"} alt="" />
      
      <a className="caption" href={props.href || "#"}>{props.cap || "Описание отсутствует"}</a>
    </div>
  );
}

export default Project;
