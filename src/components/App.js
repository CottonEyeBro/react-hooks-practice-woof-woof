import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  //baseURL = "http://localhost:3000/pups"

  const [dogArr, setDogArr] = useState([])
  const [showInfo, setShowInfo] = useState({})
  const [goodDog, setGoodDog] = useState(false)

  //console.log(dogArr)

  useEffect(() => {
    fetch("http://localhost:3000/pups")
      .then((response) => response.json())
      .then((data) => setDogArr(data))
  }, [])

  const filteredDogArr = dogArr.filter((dog) => {
    //console.log(dog)
    if (goodDog) {
      return dog.isGoodDog
    } else {
      return true
    }
})

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setGoodDog(!goodDog)}>
          Filter good dogs: {goodDog ? "ON" : "OFF"}
          </button>
      </div>
      <div id="dog-bar">
        <DogBar dogArr={filteredDogArr} setShowInfo={setShowInfo}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo showInfo={showInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
