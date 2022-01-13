import React, { useState } from "react";

function Tour({ id, image, info, price, name,removeTour }) {
    const [readMore,setReadMore]=useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
    {readMore ? info : `${info.substring(0,160)}...
    `

    }
    {/* {/* for toggle scene we used here !readMore * bcoz initiallly we take the false value
        readMore ? info here we take the true thats why */}
    <button onClick={()=>setReadMore(!readMore)}>
     {readMore ? 'see less' : 'Read more'}

    </button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
