import * as React from 'react';

const ACTCard = (props) => {

  //#region props
  const { title,description, redirectLink } = props;

  //#region return
  return (
    <a className="card link-container" href={redirectLink || "#"}>
      <div className="card-body">
        <h5 className="card-title color-gray">{title}</h5>
        <p className="card-text color-gray">{description}</p>
      </div>
    </a>
  );
}

export default ACTCard;