import React, {useState} from "react";

function DogInfo( {showInfo} ) {

    // const dogInfo = dogArr.map((dog) => (
    //     <div key={dog.id}>
    //         <img src={dog.image} alt={dog.name} />
    //         <h2>{dog.name}</h2>
    //         <button>GoodDog!</button>
    //     </div>
    // ))
    
    const [goodDog, setGoodDog] = useState(showInfo.isGoodDog)
    //console.log(showInfo)

    
    function handleClick() {
        setGoodDog(!goodDog)
    }

    return (
        <>
            <div key={showInfo.id}>
                <img src={showInfo.image} alt={showInfo.name} title={showInfo.name} />
                <h2>{showInfo.name}</h2>
                {showInfo.id && <button onClick={handleClick}>{goodDog ? "Goodest Doggo" : "Less-Good Pupper"}</button>}
            </div>
        </>
    )
}

export default DogInfo;