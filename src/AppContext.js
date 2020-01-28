import React, {useEffect, useState} from 'react';
import app from "./fbase";
import * as firebase from "firebase/app";
import 'firebase/firestore';

export const AppContext = React.createContext();



export const AppProvider = ({children}) => {
    const [desserts, setDesserts] = useState(null)
    const [sides, setSides] = useState(null)
    const [salads, setSalads] = useState(null)
    const [drinks, setDrinks] = useState(null)
    const [mains, setMains] = useState(null)

    useEffect(()=>{
        console.log('calling firebase');
        let mainsAccum = [];

        async function getFBase() {
            let mainsDB = await firebase.firestore(app).collection(`mains`).get();
            mainsDB.docs.map(doc =>mainsAccum.push(doc.data()))

        }
        getFBase().then(()=>{
            setMains(mainsAccum);
            console.log("firebase called");
        });

    },[]);


    useEffect(()=>{
        console.log("The mains: ",mains)
    }, [mains,salads,desserts,sides,drinks]);


    return (
        <AppContext.Provider value={{mains}}>
            {children}
        </AppContext.Provider>
    );

};