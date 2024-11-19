import * as React from 'react';

const ACTCard = (props) => {

  //#region props
  const { title,redirectLink } = props;

  //#region return
  return (
    <div className="card">
      {/* <img className="card-img-top" src="..." alt="" /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="text-center">
          <a href={redirectLink || "#"} className="btn btn-primary">View Collection</a>
        </div>
      </div>
    </div>
  );
}

export default ACTCard;