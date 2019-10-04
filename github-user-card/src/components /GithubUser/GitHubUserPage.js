import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import GitHubMainContainer from './GitHubMainContainer';
import GitHubUserAside from './GitHubUserAside';

export default class GitHubUserPage extends Component {
    constructor(){
        super();
        this.state = {
            name: 'lesleyfon'
        }
    }
    componentDidMount(){
        this.fetchGitHubUser('lesleyfon')
    }
    fetchGitHubUser = (name)=>{
       axios.get(`https://api.github.com/users/lesleyfon`)
        .then(res=>{console.log(res.data)})
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <MainStyles>
                <GitHubUserAside />
                <GitHubMainContainer />
            </MainStyles>
        )
    }
}


const MainStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;