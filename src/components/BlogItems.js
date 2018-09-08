import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { BlogItem } from './BlogItem'

const itemAnimation = keyframes`
  0% {
    visibility: visible;
    opacity: 0;
    top: 50px;
  }
  100% {
    visibility: visible;
    opacity: 1;
    top: 0;
  }
`;

const Items = Styled.ul`
  &>li {
    margin-top: 20px;
  }

  &>li:first-child {
    margin-top: 0px;
  }
`,
Item = Styled.li`
  visibility: hidden;
  position: relative;
  animation-name: ${itemAnimation};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: ${props => props.index*0.2}s;
  animation-fill-mode: forwards;
`;

export function BlogItems(props) {
    const blogItems = props.blogItems.map((obj, index) => {
      return (
        <Item key={obj.id} index={index}>
          <Link to={`/blogitem/${obj.id}`}>
            <BlogItem blogItem={obj} />
          </Link>
        </Item>
      );
    });
  
    return (
      <div>
        <Items>
          {blogItems}
        </Items>
      </div>
    );
  }