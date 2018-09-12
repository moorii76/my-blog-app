import React from 'react';
import Styled from 'styled-components';
import { BlogItems } from './BlogItems';
import { SideMenu } from './SideMenu';

const Wrapper = Styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1000px) {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column;
    }
`,
ListWrapper = Styled.div`
    width: 75%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`,
SideWrapper = Styled.aside`
    width: 23%;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
        width: 50%;
        margin-top: 30px;
        margin-left: 0;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

// ブログのトップ画面表示するコンポーネント
export class BlogTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.props.switchBackPath(this.props.backPath);
        this.props.updateState();
    }

    render() {
        return (
            <Wrapper>
                <ListWrapper>
                    <BlogItems blogItems={this.props.blogItems} />
                </ListWrapper>
                <SideWrapper>
                    <SideMenu
                        dateItems={this.props.dateItems}
                        tagItems={this.props.tagItems}
                        searchValue={this.props.searchValue}
                        history={this.props.history}
                        handelChange_SearchValue={this.props.handelChange_SearchValue}
                        handleSelect_Date={this.props.handleSelect_Date}
                        handleSelect_Tag={this.props.handleSelect_Tag}
                    />
                </SideWrapper>
            </Wrapper>
        );
    }
}