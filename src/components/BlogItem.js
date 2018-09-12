import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  height: 220px;
  padding: 10px 35% 0 10px;
  color: #ABCAE8;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 20px gray;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 10px 10px 20px gray;
  }
`,
Title = Styled.h2`
  color: black;
  font-size: 22px;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  } 
`,
SubTitle = Styled.p`
  color: black;
  margin-top: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  } 
`,
Tags = Styled.div`
  max-width: 65%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 40px;
  &>span {
    margin-left: 10px;
  }

  &>span:first-child {
    margin-left: 0;
  }
`,
Tag = Styled.span`
  color: white;
  font-size: 15px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ABCAE8;
  border: solid 1px;
  border-radius: 50px 50px 50px 50px;
`,
BlogDate = Styled.p`
  color: black;
  line-height: 20px;
  position: absolute;
  bottom: 10px;
`,
Image = Styled.img.attrs({
  src: props => props.imageURL,
  alt: '画像なし'
})`
  height: 100%;
  width: 35%;
  position: absolute;
  top:0;
  right: 0;
  border-radius: 0 5px 5px 0;
`;

// ブログ記事情報を抽象情報表示するコンポーネント
export function BlogItem(props) {
  const tags = props.blogItem.tags.map((obj,key) => {
    return (
      <Tag key={key}>{obj}</Tag>
    );
  });

    return (
      <Wrapper>
        <Title>{props.blogItem.title}</Title>
        <SubTitle>{props.blogItem.subTitle}</SubTitle>
        <Tags>{tags}</Tags>
        <BlogDate>投稿日：{props.blogItem.createDate}</BlogDate>
        <Image imageURL={props.blogItem.imageURL} />
      </Wrapper>
    );
  }