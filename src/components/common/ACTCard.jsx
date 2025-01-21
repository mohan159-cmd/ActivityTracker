import * as React from 'react';

const ACTCard = (props) => {

  //#region props
  const { title,description, onClick } = props;

  //#region return
  return (
    <div className="card link-container cursor-pointer" onClick={onClick}>
      <div className="card-body child-margin-5">
        <h5 className="card-title link-container cursor-pointer">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ACTCard;