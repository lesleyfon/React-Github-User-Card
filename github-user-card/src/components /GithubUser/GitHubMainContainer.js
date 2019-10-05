import React, { Component } from 'react'
import styled from 'styled-components';

export default class GitHubMainContainer extends Component {
    render() {
        return (
            <GitHubMainContainerStyles>
                <h1>Hello</h1>
            </GitHubMainContainerStyles>
        )
    }
}

const GitHubMainContainerStyles = styled.div`
    width: 935px;
    height: 100vh;
    background: lightgrey;
    border-left: 1px dashed black;
`;

