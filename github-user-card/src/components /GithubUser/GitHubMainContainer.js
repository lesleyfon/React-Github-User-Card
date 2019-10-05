import React, { Component } from 'react'
import styled from 'styled-components';
import GitHubUserNavBar from './GitHubUserNavBar';
import Repositories from './Repositories';
import Followers from './Followers';
import Following from './Following';

export default class GitHubMainContainer extends Component {
    constructor(){
        super();
        this.state= ({
            display:'following'
        })
    }
    componentDidMount(){
    }
    componentDidUpdate(prevState, prevProps){
        console.log('Prev State: ', prevState, '\n', 'Prev Props', prevProps)
    }
    getNavItem = (e, item) =>{
        e.preventDefault();
        console.log(item)
        this.setState({
            display: item
        })
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
                     <Repositories/>
                     : ( 
                         this.state.display === 'followers' ?
                            <Followers /> :

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
    border-left: 1px dashed black;
`;

