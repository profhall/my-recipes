import React, {useEffect} from 'react';
import styled from 'styled-components';

const Content = ({width}) => {
    useEffect(()=>{
        console.log(width)
    }, [width]);
    return (
        <ContentContainer width={width}>
            {width < 990 ? <A href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </A>:null}
            <h4>PJ</h4>
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
    `
const A  = styled.a`
    position:fixed ;
    right: 10px;
    top: 10px;
    `