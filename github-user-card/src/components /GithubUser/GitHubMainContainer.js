import React, { Component } from 'react'
import styled from 'styled-components';
import GitHubUserNavBar from './GitHubUserNavBar';

export default class GitHubMainContainer extends Component {
    constructor(){
        super();
        this.state= ({
            display:'Repositories'
        })
    }
    getNavItem = (e, item) =>{
        e.preventDefault();
        console.log(item)
    }
    render() {
        return (
            <GitHubMainContainerStyles>
                <GitHubUserNavBar
                    getNavItem={ this.getNavItem }
                />

            </GitHubMainContainerStyles>
        )
    }
}

const GitHubMainContainerStyles = styled.div`
    width: 935px;
    height: 100vh;
    border-left: 1px dashed black;
`;

