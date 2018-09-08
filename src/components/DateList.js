import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = Styled.div`
    width: 100%;
    padding-left: 10%;
    overflow: hidden;
`,
Title = Styled.h3`
    letter-spacing: 0.3em;
    margin-bottom: 5px;
`,
Item = Styled.li`
    padding-left: 5px;
    letter-spacing: 0.1em;
    & a {
        line-height: 26px;
        position: relative;
        display: inline-block;
        height: 26px;
        margin: 0 0px 10px 10px;
        padding: 0 20px 0 23px;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
        text-decoration: none;
        color: #ffffff;
        border-radius: 0 3px 3px 0;
        background: #ABCAE8;
    }
    
    & a::before, & a::after {
        background: white;
    }

    & a::before {
        position: absolute;
        top: 10px;
        left: 3px;
        width: 6px;
        height: 6px;
        content: '';
        border-radius: 10px;
    }

    & a::after {
        position: absolute;
        top: -1px;
        left: -6px;
        width: 0;
        height: 0;
        content: '';
        border-style: solid;
        border-width: 14px 8px 14px 0;
        border-color: transparent #ABCAE8 transparent transparent;
        border-radius: 4px;
    }

    & a:hover {
        background: gray;   
    }

    & a:hover:after {
        border-color: transparent gray transparent transparent;
    }
`;

export function DateList(props) {
    const dateItems = props.dateItems.map((obj, key) => {
        return (
            <Item key={obj.id}>
                <Link to="/resultItems" onClick={() => props.onClick(obj.id)}>{obj.date}</Link>
            </Item>
        );
    }); 

    return (
        <Wrapper>
            <Title><i className="far fa-calendar-alt"></i>年月間別</Title>
            <ul>
                {dateItems}
            </ul>
        </Wrapper>
    );
}