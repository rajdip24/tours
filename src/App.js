import logo from "./logo.svg";
import "./App.css";
import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";

// flow-- tour-tours-app by passing the props flow in these direction

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour =(id)=>{
    const newTour= tours.filter((tour)=> tour.id !==id);
    setTours(newTour)
  }


  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length===0){
    return(
      <main>
        <div className="title"><h2>no tours Left </h2></div>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </main>
    )
  }
  return (
    <main>
      {/* here we are passiing the tours as a props  */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

// import React from 'react';

// function App(props) {
//   const [loading,setLoading]=useState(true);
//   if(loading){
//     return(
//       <main>
//         <Loading/>
//       </main>
//     )
//   }
//   return (
//     <Tours/>
// const fetchTours=async()=>{
//   setLoading(true);
//   const response = await fetch(url);
//   const tours =await response.json();
//   console.log(tours);

// }
//   );
// }

// export default App;
