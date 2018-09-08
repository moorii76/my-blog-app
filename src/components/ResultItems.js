import React from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import { BlogItems } from './BlogItems';

const Wrapper = Styled.div`
    width: 100%;

    @media screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    } 
`,
FormWrapper = Styled.form`
    margin-top: 20px;

    &>label {
        margin-top: 10px;
        margin-bottom: 5px;
    }

    &>label:first-child {
        margin-top: 0;
    }
`,
FormLabel = Styled.label`
    color: #454545;
    display: block;
    font-size: 20px;

    &>i {
        margin-right: 5px;
    }
`,
FormText = Styled.input.attrs({
    type: 'text',
    name: 'searchValue',
    placeholder: 'キーワード検索'
})`
    height: 40px;
    width: 100%;
    padding-left: 5px;
    font-size: 15px;
`,
FormButton = Styled.button.attrs({
    type: 'submit'
})`
    height: 50px;
    width: 100%;
    background-color: #9FBCDF;
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    letter-spacing: 1em;

    &:hover {
        cursor: pointer;
        background-color: #ABCAE8;
    }

    &:active {
        box-shadow: 0 0 5px 1px  inset gray;
    }
`,
ListWrapper = Styled.div`
    margin-top: 30px;
`;

export class ResultItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOptions: Array(0),
            tagOptions: Array(0),
            selectDate: null,
            selectTagItems: Array(0),
        };
    }

    componentWillMount() {
        let dateOptions = Array(0),
            tagOptions = Array(0),
            selectDate = null,
            selectTagItems = Array(0);

        this.props.switchBackPath(this.props.backPath);

        this.props.dateItems.map((obj) => {
            return dateOptions.push({ value: obj.id, label: obj.date });
        });

        this.props.tagItems.map((obj) => {
            return tagOptions.push({ value: obj.id, label: obj.tag });
        });

        selectDate = dateOptions.filter(obj => obj.value === this.props.selectDate)[0];

        selectTagItems = tagOptions.filter(obj => this.props.selectTagItems.includes(obj.value));

        this.setState({
            dateOptions: dateOptions,
            tagOptions: tagOptions,
            selectDate: selectDate,
            selectTagItems: selectTagItems
        });

        this.props.updateState_Search();
    }

    handleChange_Date = (selectedOption) => {
        let dateId;

        this.setState({
            selectDate: selectedOption
        });

        dateId = selectedOption ? selectedOption.value : '';

        this.props.handleSelect_Date(dateId, true);
    }

    handleChange_Tag = (selectedOption) => {
        let tagId = Array(0);

        this.setState({
            selectTagItems: selectedOption
        });

        if (selectedOption) {
            selectedOption.map(obj => {
                return tagId.push(obj.value);
            });
        }

        this.props.handleSelect_Tag(tagId, true);
    }

    onSubmit_Search = (event) => {
        console.log('検索しました。');
        event.preventDefault();

        this.props.updateState_Search();
    }

    render() {
        return (
            <Wrapper>
                <FormWrapper onSubmit={event => this.onSubmit_Search(event)}>
                    <FormLabel><i className="fas fa-search"></i>キーワード</FormLabel>
                    <FormText value={this.props.searchValue} onChange={event => this.props.handelChange_SearchValue(event, true)} />
                        <FormLabel><i className="far fa-calendar-alt"></i>年間別</FormLabel>
                        <Select
                            value={this.state.selectDate}
                            options={this.state.dateOptions}
                            placeholder={'選択してください'}
                            isClearable={true}
                            onChange={this.handleChange_Date}
                        />
                        <FormLabel><i className="fas fa-tags"></i>タグ別</FormLabel>
                        <Select
                            value={this.state.selectTagItems}
                            options={this.state.tagOptions}
                            placeholder={'選択してください'}
                            isMulti={true}
                            onChange={this.handleChange_Tag}
                        />
                    <FormButton>検索</FormButton>
                </FormWrapper>
                <ListWrapper>
                    <BlogItems blogItems={this.props.blogItems} />
                </ListWrapper>
            </Wrapper>
        );
    }
}