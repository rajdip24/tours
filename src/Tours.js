import React from 'react';
import Tour from './Tour';

function Tours({tours,removeTour}) {
    return (
        <section>
            <div className='title'>
                <h2>Ours  tours</h2>
                <div className='underline'>

                </div>
            </div>
            <div>
              {tours.map((tour)=>{
                  return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                //   spread operator copies the data from TOur component and we are using that here ...tour
                // by passing the tour prop
              })

              }
            </div>
        </section>
    );
}

export default Tours;



// {tours.map((tour)=>{
//     const {id,image,info,name,price}=tour;
//     return(
//         <main>
//             <img src={image}/>
//             <p>{info}</p>
//             <p>{name}</p>
//             <p>{price}</p>
//         </main>
//     )
//      })

//      }