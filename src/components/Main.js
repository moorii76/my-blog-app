import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BlogTop } from './BlogTop';
import { BlogItemDetail } from './BlogItemDetail';
import { ResultItems } from './ResultItems';

const URLPATH = {
  top: '/my-blog-app',
  detaile: '/blogItem/:id',
  result: '/resultItems',
};

// メインコンポーネント
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backPath: URLPATH.top,
    }
  }

  switchBackPath = (path) => {
    this.setState({
      backPath: path,
    });
  }

  render() {
    return (
      <main id="main">
        <Switch>
          <Route exact path={URLPATH.top}
            render={() =>
              <BlogTop
                blogItems={this.props.blogItems}
                dateItems={this.props.dateItems}
                tagItems={this.props.tagItems}
                searchValue={this.props.searchValue}
                updateState={this.props.updateState}
                history={this.props.history}
                backPath={URLPATH.top}
                handelChange_SearchValue={this.props.handelChange_SearchValue}
                handleSelect_Date={this.props.handleSelect_Date}
                handleSelect_Tag={this.props.handleSelect_Tag}
                switchBackPath={this.switchBackPath}
              />
            }
          />
          <Route exact path={URLPATH.detaile}
            render={routeProps =>
              <BlogItemDetail
                match={routeProps.match}
                blogItems={this.props.blogItems}
                updateState={this.props.updateState}
                backPath={this.state.backPath}
              />
            }
          />
          <Route exact path={URLPATH.result}
            render={() =>
              <ResultItems
                blogItems={this.props.blogItems}
                dateItems={this.props.dateItems}
                tagItems={this.props.tagItems}
                selectDate={this.props.selectDate}
                selectTagItems={this.props.selectTagItems}
                searchValue={this.props.searchValue}
                backPath={URLPATH.result}
                updateState={this.props.updateState}
                updateState_Search={this.props.updateState_Search}
                handelChange_SearchValue={this.props.handelChange_SearchValue}
                handleSelect_Date={this.props.handleSelect_Date}
                handleSelect_Tag={this.props.handleSelect_Tag}
                resetSearchState={this.props.resetSearchState}
                switchBackPath={this.switchBackPath}
              />
            }
          />
        </Switch>
      </main>
    );
  }
}