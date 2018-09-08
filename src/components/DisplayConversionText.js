import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    height: 100%;
    width: 100%;

    &>* {
        min-height: 25px;
        margin-bottom: 10px;
        display: block;
    }

    &>code+code {
        margin-top: -10px;
    }
`;

const Title = Styled.h3`
    padding-top: 0.5em;
    padding-left: 0.5em;
    padding-bottom: 0.5em;
    border-left: solid 5px #79A1D4;
    color: #454545;
    background-color: #ABCAE8;
`,
    Text = Styled.p`
`,
    Code = Styled.code`
    padding-left: 10px;
    color: white;
    background: #454545;
`;

const Tags = {
    title: '#T',
    code: '#C'
};

export class DisplayConversionText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textArray: [],
        };
    }

    componentWillMount() {
        this.updateTextArray(this.props.text);
    }

    componentWillReceiveProps(nextProps) {
        this.updateTextArray(nextProps.text);
    }

    updateTextArray(text) {
        const textArray = text.split("\n");

        this.setState({
            textArray: textArray,
        });
    }

    conversionText = (value, key) => {
        const tag = value.substr(0, 2).toUpperCase();
        let result = null;

        switch (tag) {
            case Tags.title:
                result = <Title key={key}>{value.substr(2)}</Title>;
                break;
            case Tags.code:
                result = <Code key={key}>{value.substr(2)}</Code>;
                break;
            default:
                result = <Text key={key}>{value}</Text>;
                break;
        }

        return result;
    }

    render() {
        const conversionTexts = this.state.textArray.map((obj, key) => {
            return this.conversionText(obj, key);
        });

        return (
            <Wrapper>
                {conversionTexts}
            </Wrapper>
        );
    }
}