import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.footer`
  width: 100%;
  background-color: #79A1D4;
  color: white;
`,
CopyrightWrapper = Styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`,
CopyrightLink = Styled.a.attrs({
  href: 'https://twitter.com/moorii_76',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  text-decoration: none;
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

// フッターを表示するコンポーネント
export function Footer() {
    return (
      <Wrapper id="footer">
        <CopyrightWrapper>
          <small>© 2018 twitter<CopyrightLink>@moorii0706</CopyrightLink> All Rights Reserved.</small>
        </CopyrightWrapper>
      </Wrapper>
    );
  }