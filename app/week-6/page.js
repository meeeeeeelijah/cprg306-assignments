"use-client";

import { useState } from "react";

//read JSON Data
import dogsData from "./dogs.json"

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(null);

    // create a copy of dogsData
    let dogsCopy = [...dogsData];

    dogsCopy.sort ((a,b) =>{
        if (a.name <b.name) {5
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    })

    //localeCompare

    //filter

    //handleClick(id)
    const handleClick = (id) => {
            if (selectedDogId == id){
                setSelectedDogId(null);
        }   else {
            setSelectedDogId(id);
        }
    };
    return (
        <main>
            <h1> className="text-2xl font-bold" Week 6 - Dogs Data</h1>
            <ul>
                {dogsCopy.map((dog) =>(
                    <li key={dog.id}>
                        <img
                            className="w-24 h-24 rounded-full"
                            src={dog.imageurl}
                            alt={dog.name}
                            />
                            <div className="ml-4">
                                <h2 className=""></h2>
                            </div>
                            }
                ))
            </ul>
        </main>
    )
}