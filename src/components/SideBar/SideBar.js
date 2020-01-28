import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../AppContext";
import {navigate} from "hookrouter"


const Spinner = () =>
    <div className="progress">
        <div className="indeterminate"></div>
    </div>

const SideBar =()=>{
    const {mains} = useContext(AppContext);
    let bg ="https://marketplace.canva.com/MADarh5oxIk/1/thumbnail_large-1/canva-healthy-food-background.-MADarh5oxIk.jpg";

    useEffect(()=>{
        if (mains) {
            console.log("The mains in Sidebar: ",mains)
        }
    }, [mains]);

    return(
        <ul id="slide-out" className="sidenav  sidenav-fixed">

            <li className="center">
                <div className="user-view">
                    <div className="background">
                        <img src={bg}/>
                    </div>
                    <h3>Recipes</h3>
                    <span className="name">
                        A collection of my personal recipes
                    </span>


                </div>
            </li>
            {mains ? <li onClick={()=>navigate("/mains")}><a href="#!"><h6><b>Main Dishes</b></h6></a></li> :null}

        </ul>
    )
}

export default SideBar;
