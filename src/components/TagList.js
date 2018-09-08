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
Items = Styled.ul`
    display: flex;
    flex-direction: column;

    &>div {
        margin-top: 5px;
    }

    &>div:first-child {
        margin-top: 0;
    }
`,
ItemWrapper = Styled.div`
    display: inline-block;
    padding-left: 10px;
`,
Item = Styled.li`
    display: inline-block;
    position: relative;
    & span {
        display: block;
    }
`,
ItemName = Styled.span`
    font-size: 12px;
    min-height: 26px;
    line-height: 25px;
    min-width: 50px;
    max-width: 100px;
    padding: 0 13px 0 10px;
    color: white;
    border-radius: 50px 0 0 50px;
    background-color: #ABCAE8;

    &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        opacity: 0.95;
        position: absolute;
        top: 10px;
        right: -1px;
        border-style: solid;
        border-width: 3px;
        border-radius: 10px 0 0 10px;
        border-color: rgb(235, 235, 235);
        transition: 0.3s ease-out;
        z-index: 2;
    }

    &:hover {
        background-color: gray;
    }
`,
ItemNumber = Styled.span`
    font-size: 0.8em;
    height: 100%;
    line-height: 25px;
    max-width: 40px;
    padding: 0 7px 0 6px;
    position: absolute;
    top: 0;
    left: 100%;
    color: #555555;
    background-color: rgb(235, 235, 235);
    border-radius: 0 12px 12px 0;
    overflow: hidden;
`;

export function TagList(props) {
    const tagItems = props.tagItems.map((obj, key) => {
        return (
            <ItemWrapper key={obj.id}>
                <Item>
                    <Link to="/resultItems" onClick={() => props.onClick([obj.id])}>
                        <ItemName>{obj.tag}<ItemNumber>{obj.number}</ItemNumber></ItemName>
                    </Link>
                </Item>
            </ItemWrapper>
        );
    });

    return (
        <Wrapper>
            <Title><i className="fas fa-tags"></i>タグ別</Title>
            <Items>
                {tagItems}
            </Items>
        </Wrapper>
    );
}