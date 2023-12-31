import '../App.css';
import React from 'react';

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : 'text-white';
    return 'card text-white bg-success mb-3 ' + bg + txt;
  }

  return (
    <>
      {props.status && (
        <div id="createStatus" class="alert alert-danger" role="alert">
          {props.status}
        </div>
      )}
      <div className={classes()} style={{ maxWidth: "18rem" }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
        </div>
      </div>
    </>
  );
}

export default Card;