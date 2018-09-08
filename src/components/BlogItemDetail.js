import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DisplayConversionText } from './DisplayConversionText';

const Wrapper = Styled.div`
  padding: 20px 150px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 20px gray;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 5%;
  }
`,
Title = Styled.h2`
  padding: 0.5em 0;
  margin-top: 20px;
  border-top: solid 3px #79A1D4;
  border-bottom: solid 3px #79A1D4;
  color: gray;
  text-align: center;
`,
TextWrapper = Styled.div`
  margin: 20px 0;
`,
CreateDate = Styled.time`
  color: gray;
`,
TagWrapper = Styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
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
Image = Styled.img.attrs({
  src: props => props.imageURL,
  alt: '画像なし'
})`
  height: 350px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    height: 250px;
  }
`,
ButtonWrapper = Styled.div`
  display: flex;
  justify-content: flex-end;
`,
Button = Styled.button.attrs({
  type: 'button'
})`
  height: 50px;
  width: 80px;
  background-color: transparent;
  font-size: 15px;
  border: solid 2px #9FBCDF;
  border-radius: 5px;
  display: inline-block;
  position: relative;

  &>a {
    height: 100%;
    width: 100%;
    color: #9FBCDF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #9FBCDF;
  }

  &:active {
    background-color: #9FBCDF;
  }

  &:hover>a {
    color: white;
  }
`;

export class BlogItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItem: {},
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params,
    blogItem = this.props.blogItems.filter((item) => item.id === id)[0];

    this.setState({
      blogItem: blogItem
    });
  }

  render() {
    const tags = this.state.blogItem.tags.map((obj,key) => {
      return (
        <Tag key={key}>{obj}</Tag>
      );
    });

    return (
      <Wrapper>
        <CreateDate>投稿日：{this.state.blogItem.createDate}</CreateDate>
        <TagWrapper>{tags}</TagWrapper>
        <Image src={this.state.blogItem.imageURL} />
        <Title>{this.state.blogItem.title}</Title>
        <TextWrapper>
          <DisplayConversionText text={this.state.blogItem.text}/>
        </TextWrapper>
        <ButtonWrapper>
          <Button><Link to={this.props.backPath}>戻る</Link></Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}