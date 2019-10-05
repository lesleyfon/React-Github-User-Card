import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
  
import GitHubUserNavBar from './GitHubUserNavBar';
import Repositories from './Repositories';
import Followers from './Followers';
import Following from './Following';

export default class GitHubMainContainer extends Component {
    constructor(){
        super();
        this.state= ({
            display:'followers',
            repos : []
        })
    }
    componentDidMount(){
        this.getRepositories()
    }
    componentDidUpdate(prevState, prevProps){
        // console.log('Prev State: ', prevState, '\n', 'Prev Props', prevProps)
    }
    getNavItem = (e, item) =>{
        e.preventDefault();
        this.setState({
            display: item
        })
    }
   
        getRepositories = () =>{
            axios.get(`${this.props.userInfo.repos_url}`)
                .then(res=>{
                    this.setState({
                        repos : res.data 
                    })
                })
                .catch(err=>{ console.log(err)})
        }
    render() {
        return (
            <GitHubMainContainerStyles>
                <GitHubUserNavBar
                    getNavItem={ this.getNavItem }
                    followers = {this.props.userInfo.followers}
                    following = {this.props.userInfo.following}
                />
                {
                    this.state.display === 'repositories'
                    ?
                     <Repositories
                        repos = {this.state.repos}
                     />
                     : ( 
                         this.state.display === 'followers' ?
                            <Followers 
                                followersUrl = {this.props.userInfo.followers_url}
                            /> :

                            <Following />
                         )
                        
                }
            </GitHubMainContainerStyles>
        )
    }
}

const GitHubMainContainerStyles = styled.div`
    width: 935px;
    height: 100vh;
`;

