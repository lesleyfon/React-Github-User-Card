import React, { Component } from 'react'
import styled from 'styled-components';
import GitHubUserNavBar from './GitHubUserNavBar';

export default class GitHubMainContainer extends Component {
    render() {
        return (
            <GitHubMainContainerStyles>
                <GitHubUserNavBar />
            </GitHubMainContainerStyles>
        )
    }
}

const GitHubMainContainerStyles = styled.div`
    width: 935px;
    height: 100vh;
    border-left: 1px dashed black;
`;

