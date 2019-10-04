import React, { Component } from 'react'
import styled from 'styled-components';

export default class GitHubMainContainer extends Component {
    render() {
        return (
            <GitHubMainContainerStyles>
                <h12>Hello</h12>
            </GitHubMainContainerStyles>
        )
    }
}

const GitHubMainContainerStyles = styled.div`
    width: 65%;
    height: 100vh;
    background: lightgrey;
    border-left: 1px dashed black;
`;

