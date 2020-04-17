import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoContainer from './PhotoContainer'
import Header from './Header'
import Axios from "axios";





function App() {
  const [rdata, setRData] = useState([])
  const [date, setDate] = useState(0)


  useEffect(()=>{
    Axios
    .get('https://api.nasa.gov/planetary/apod?api_key=ZUTQNJgHM8K7HjVcadIEkVh6UD1UnScImjfb0S1S')
    
    .then(response => {
      console.log(response.data);
      setRData(response.data);
    
    })
    .catch(error => console.log("Error!", error))
  },[])
  
    

  return (
    <div className="App">
  
      <Header date = {rdata.date}  />
      <PhotoContainer className = "photocontainer" imgSrc = {rdata.url} title= {rdata.title} author = {rdata.copyright} description = {rdata.explanation}/>
    </div>
  );
}

export default App;
