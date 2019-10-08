import React from 'react';
import styled from 'styled-components';


export default function Header() {
    return (
        <HeaderStyles>
            
        </HeaderStyles>
    )
}

const HeaderStyles = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    box-sizing: border-box;
    flex-wrap: nowrap!important;
    padding-right: 16px!important;
    padding-left: 16px!important;
    z-index: 32;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: hsla(0,0%,100%,.7);
    background-color: #24292e;
    display: flex;
    align-items: center;
`;