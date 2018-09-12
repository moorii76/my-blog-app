import React from 'react';
import Styled from 'styled-components';
import { DateList } from './DateList';
import { TagList } from './TagList';

const Wrapper = Styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 5px 5px 20px gray;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
    }
`,
SideForm = Styled.form`
    width: 100%
    text-align: center;
    position: relative;
`,
SideFormText = Styled.input.attrs({
    type: 'text',
    name: 'searchValue',
    placeholder: 'キーワード検索'
})`
    height: 30px;
    width: 80%;
    border: solid 1px gray;
    padding-left: 5px;
`,
DateWrapper = Styled.div`
    margin-top: 10px;

    @media screen and (max-width: 1000px) {
        width: 50%;
    }
`,
TagWrapper = Styled.div`
    margin-top: 10px;

    @media screen and (max-width: 1000px) {
        width: 50%;
    }
`;

// サイドメニューコンポーネント
export class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSubmit_Search = (event) => {
        console.log('検索しました。');
        event.preventDefault();
        this.props.history.push('/resultItems');
    }

    render() {
        return (
            <Wrapper>
                <SideForm onSubmit={event => this.onSubmit_Search(event)}>
                    <SideFormText className="side-menu-form-text" value={this.props.searchValue} onChange={event => this.props.handelChange_SearchValue(event)} />
                </SideForm>
                <DateWrapper>
                    <DateList
                        dateItems={this.props.dateItems}
                        onClick={this.props.handleSelect_Date}
                    />
                </DateWrapper>
                <TagWrapper>
                    <TagList
                        tagItems={this.props.tagItems}
                        onClick={this.props.handleSelect_Tag}
                    />
                </TagWrapper>
            </Wrapper>
        );
    }
}