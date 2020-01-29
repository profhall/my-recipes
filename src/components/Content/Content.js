import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {AppContext} from "../../AppContext";
import {object} from "prop-types";

const Content = ({width}) => {
    let bg ="https://marketplace.canva.com/MADarh5oxIk/1/thumbnail_large-1/canva-healthy-food-background.-MADarh5oxIk.jpg";

    const {mains} = useContext(AppContext);


    useEffect(()=>{
        if (mains) {
            console.log("The mains in Sidebar: ",mains)
        }
    }, [mains,width]);

    const MainsList =()=><div className="row" style={{marginTop:30}}>
        <h4>Main Dishes</h4>
        {mains ? mains.map((main)=>
            <div className="col s12 m4">

                <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={main.img_url ? main.img_url : bg}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{main.name}<i
                            className="material-icons right">more_vert</i></span>
                        <p>Prep Time: {main.prep_time} min</p>
                        <p>Cook Time: {main.cook_time} min</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{main.name}<i
                            className="material-icons right">close</i></span>
                        <p>{main.headline}</p>

                        <ul>
                        { main.ingredients ? Object.keys(main.ingredients).map((ing)=><li>
                            <b>{main.ingredients[ing].amount}</b> {main.ingredients[ing].name} {main.ingredients[ing].method}

                        </li>):null}
                        </ul>
                        <ol>
                        {main.instructions ? main.instructions.map((instuct)=><li> {instuct} <br/> <br/></li>):null}
                        </ol>

                        <p><b><u>Nutrition</u></b><br/>
                        {main.nutrition ?
                            Object.keys(main.nutrition).map((nutri)=><span>{nutri}: {main.nutrition[nutri]} | </span>)  :null} </p>
                    </div>
                </div>
            </div>): null}
    </div>

    return (
        <ContentContainer width={width}>
            {width < 990 ? <A href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </A>:null}
            <MainsList/>



        </ContentContainer>
    );
};

export default Content;

const ContentContainer  = styled.div`
    width:${props => props.width > 990 ? "calc(99% - 300px)":"99%"};
    float:${props => props.width > 990 ? "right":"none"};
    height:100%;
    background-color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    `
const A  = styled.a`
    position:fixed ;
    right: 10px;
    top: 10px;
    `