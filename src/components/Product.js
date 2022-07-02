import React from 'react';

function Product({ label, img, title, price }) {
  return (
      <article>
        <span>{label}</span>
        <img src={img} alt={title}/>
        <p>{title}</p>
        <h4>€{price},-</h4>
      </article>
  );
}

export default Product;