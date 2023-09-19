import React from "react";

function DogBar( {dogArr, setShowInfo} ) {

    const dogBar = dogArr.map((dog) => (
        <span onClick={(e) => setShowInfo(dog)}  key={dog.id}>{dog.name}</span>
    ))

    return (
        <>{dogBar}</>
    )
}

export default DogBar;