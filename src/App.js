import './App.css';
import {react, useEffect, useState} from 'react';
import {MapCities} from './MapCities/MapCities';
import { Routes,  BrowserRouter as Router ,Route } from 'react-router-dom';
import { MapProvinces } from './MapProvinces/MapProvinces';
import { HomePage } from './HomePage/HomePage';

function App() {
  const [provinceName,setProvinceName] = useState("");
  const [provinceId,setProvinceId] = useState("");
  //test.namedItem("UA-43").onclick
  // console.log(test);
  // if(test?.item(1) != null){
  // console.log(test?.item(1)?.getAttribute('title'));
  // test.item(1).onclick = function(){
  //     setProvinceName(test?.item(1)?.getAttribute('title'));
  //   };
  // }

  // for(var i = 1; i < 27; i++){

  // }

  useEffect(()=>{
    if(provinceId != ""){
      var test = document.getElementById(provinceId);
      console.log(test);
      setProvinceName(test?.getAttribute('title'));
    } 
  },[provinceId]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/MapProvinces" element={<MapProvinces/>}></Route>
        <Route path="/MapCities" element={<MapCities/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
