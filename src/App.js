import './App.css';
// import React from "react";
import { Card } from "react-bootstrap";
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';                         
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const firstName = "ZohraBahoudi"
  return (
    <>
      <Card style={{ width: "20rem", margin:"auto", marginTop:"20px"}}>
         <Card.Body>
          <Name />
          <Image />   
          <Description />
          <Price />
         </Card.Body>
      </Card>
      <div style={{width: "20rem", margin:"auto", marginTop:"20px", marginBottom:"20px"}}>
      <p>Hello, {firstName ? firstName : "there"}</p>
      {firstName && <img style={{borderRadius:20}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWi-nekpQE0KVJfAhvJyt1I3X3OJNWo8Qw&usqp=CAU'/>}
      </div>
    </>

  );
}

export default App;
