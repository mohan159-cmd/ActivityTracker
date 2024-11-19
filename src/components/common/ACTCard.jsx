import * as React from 'react';

const ACTCard = (props) => {

  //#region props
  const { title, redirectLink } = props;

  //#region return
  return (
    <a className="card link-container" href={redirectLink || "#"}>
      <div className="card-body">
        <h5 className="card-title color-gray">{title}</h5>
        <p className="card-text color-gray">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </a>
  );
}

export default ACTCard;