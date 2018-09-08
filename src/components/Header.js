import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled, { keyframes } from 'styled-components';

const backAnimation_top = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`,
titleAnimation_top = keyframes`
  0% {
    left: -300px;
  }
  50% {
    left: -300px;
  }
  100% {
    left: 40px;
  }
`,
buttonAnimation_left = keyframes`
  0% {
    left: -40px;
    transform: rotate(0deg);
  }
  100% {
    left: 40px;
    transform: rotate(360deg);
  }
`,
buttonAnimation_right = keyframes`
  0% {
    right: -40px;
    transform: rotate(0deg);
  }
  100% {
    right: 40px;
    transform: rotate(-360deg);
  }
`;

const Wrapper = Styled.header`
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: #F0E5D0;
`,
TitleWrapper = Styled.section`
  background-color: #79A1D4;
  height: 100%;
  width: 60px;
  position: relative;
  animation-name: ${backAnimation_top};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`,
Title = Styled.h1`
  position: absolute;
  left: 40px;
  white-space:nowrap;
  overflow: hidden;
  animation-name: ${titleAnimation_top};
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  a{
    display: inline-block;
    text-decoration: none;
    color: white;
  }

  a:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`,
TopButton = Styled.div`
  height: 60px;
  width: 60px;
  position: fixed;
  
  bottom: 120px;
  color: white;
  text-align: center;
  background-color: #79A1D4;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  z-index: 10;
  opacity: ${props => props.sticky? '1':'0'};
  transition: opacity 0.5s linear;

  animation-name: ${props => props.sticky? buttonAnimation_left:'none'};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1001px) {
    left: 40px;
  }

  @media screen and (max-width: 1000px) {
    right: 40px;
    animation-name: ${props => props.sticky? buttonAnimation_right:'none'};
  }
`;

// ヘッダーを表示するコンポーネント
// headerListのpropsを使用
// ※要素0にタイトル名、1以降の要素にリスト名を格納
export class Header extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      searchValue: '',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('#header').addEventListener('animationstart', (e) => {
      document.querySelector('#header').classList.add('header-fixed');
    });
  }

  // スクロールがヘッダーより下になったらヘッダーを固定化する
  handleScroll = () => {
    let sticky = this.state.sticky;
    let isChange = false;

    if (window.scrollY > 0) {
      if (!sticky) isChange = true;
      sticky = !sticky;
    } else {
      if (sticky) isChange = true;
      sticky = !sticky;
    }

    if (isChange) {
      this.setState({
        sticky: sticky,
      });
    }
  }

  handleTop  = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper id="header">
        <TopButton sticky={this.state.sticky} onClick={this.handleTop}><i className="fas fa-arrow-up"></i></TopButton>
        <TitleWrapper>
          <Title>
            <Link to="/">旅人エンジニアの日記</Link>
          </Title>
        </TitleWrapper>
      </Wrapper>
    );
  }
}
