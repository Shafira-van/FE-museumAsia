import React from "react";

function Item({ id, img, name, provinsi, desc, url }) {
  return (
    <div className="card" key={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{provinsi}</p>
        <p className="card-text"> {desc}</p>
        <a href={url} className="btn btn-secondary">
          Show more
        </a>
      </div>
      </div>
  );
}

export default Item;
