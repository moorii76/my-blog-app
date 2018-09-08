import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import {
  getStateItems,
  getSearchItems,
} from '../API';
import {
  Header,
  Footer,
  Main
} from '../components';
import img from '../img/backimg.png'

const Wrapper = styled.div`
  height: 100%;  
  width: 100%;
`,
Article = styled.article`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 30px;
  position: relative;

  @media screen and (max-width: 650px) {
    padding-bottom: 100px;
  }
`,
ContentWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;

class BlogApp extends Component {
  constructor() {
    super();
    this.state = {
      blogItems: [],
      dateItems: [],
      tagItems: [],
      searchValue: '',
      selectDate: '',
      selectTagItems: [],
      doSearch: false,
    }
  }

  updateState = () => {
    if(this.state.blogItems.length && this.state.dateItems.length && this.state.tagItems.length && !this.state.doSearch) return;

    getStateItems()
      .then(res => {
        this.setState({
          blogItems: res.blogitems,
          dateItems: res.dateItems,
          tagItems: res.tagItems,
          doSearch: false
        });
      })
      .catch(err => console.log(err));
  }

  updateState_Search = () => {
    // 選択した日付を取得
    let selectDate = "";
    if(this.state.selectDate) {
      selectDate = this.state.dateItems.filter(val => val.id === this.state.selectDate)[0].date;
    }

    // 選択したタグを取得
    let selectTags = [];
    if(this.state.selectTagItems) {
      this.state.selectTagItems.map(val => {
        let item = this.state.tagItems.filter(obj => obj.id === val)[0].tag;
        return selectTags.push(item);
      });
    }

    getSearchItems(this.state.searchValue, selectDate, selectTags)
      .then(res => {
        this.setState({
          blogItems: res.blogitems,
          doSearch: true
        });
      })
      .catch(err => console.log(err));
  }

  handelChange_SearchValue = (event, isOnly) => {
    if (isOnly) {
      this.setState({
        searchValue: event.target.value,
      });
    } else {
      this.setState({
        searchValue: event.target.value,
        selectDate: '',
        selectTagItems: [],
      });
    }
  }

  handleSelect_Date = (val, isOnly) => {
    let selectDate, dateId;

    selectDate = this.state.dateItems.filter(obj => obj.id === val);
    dateId = selectDate.length ? selectDate[0].id : '';

    if (isOnly) {
      this.setState({
        selectDate: dateId,
      });
    } else {
      this.setState({
        selectDate: dateId,
        searchValue: '',
        selectTagItems: [],
      });
    }
  }

  handleSelect_Tag = (val, isOnly) => {
    if (isOnly) {
      this.setState({
        selectTagItems: val,
      });
    } else {
      this.setState({
        selectTagItems: val,
        searchValue: '',
        selectDate: '',
      });
    }
  }

  resetSearchState = () => {
    this.setState({
      searchValue: '',
      selectDate: '',
      selectTagItems: [],
    });
  }

  render() {
    return (
      <Wrapper id="blog-app">
        <Header />
        <Article>
          <ContentWrapper>
            <Main
              blogItems={this.state.blogItems}
              dateItems={this.state.dateItems}
              tagItems={this.state.tagItems}
              selectDate={this.state.selectDate}
              selectTagItems={this.state.selectTagItems}
              searchValue={this.state.searchValue}
              updateState={this.updateState}
              history={this.props.history}
              updateState_Search={this.updateState_Search}
              handelChange_SearchValue={this.handelChange_SearchValue}
              handleSelect_Date={this.handleSelect_Date}
              handleSelect_Tag={this.handleSelect_Tag}
              resetSearchState={this.resetSearchState}
            />
          </ContentWrapper>
        </Article>
        <Footer />
      </Wrapper>
    );
  }
}

export default withRouter(BlogApp);
