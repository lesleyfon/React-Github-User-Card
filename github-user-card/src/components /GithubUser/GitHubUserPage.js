import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import GitHubMainContainer from './GitHubMainContainer';
import GitHubUserAside from './GitHubUserAside';
import Loader from '../Loader';

export default class GitHubUserPage extends Component {
    constructor(){
        super();
        this.state = {
            name: 'lesleyfon',
            userInfo:{}
        }
    }
    componentDidUpdate(){
      }

    componentDidMount(){
        this.fetchGitHubUser(this.state.name);
    }
    
    fetchGitHubUser = (name)=>{
       axios.get(`https://api.github.com/users/${name}`)
        .then(res=>{
            this.setState({ userInfo: res.data }); 
            //Github Organisation, Complete later  ❌
            // axios.get(`${res.data.organizations_url}`)
            //     .then(resOrg=>{
            //         console.log(resOrg)
            //     })
            //     .catch(err=>{
            //         console.log(err)
            //     })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (   
            <>
                {
                    Object.values(this.state.userInfo).length < 1 
                    ?
                    <Loader />
                     :
                    <> 
                        <MainStyles>
                            <GitHubUserAside
                                userInfo = {this.state.userInfo }
                            />
                            <GitHubMainContainer
                                  userInfo = {this.state.userInfo }
                            /> 
                        </MainStyles>
                    </>
                }

            </>   

        )
    }
}


const MainStyles = styled.div`
    width: 100%;
    display: flex;
    margin-top: 60px;
    justify-content: center;
    align-content: center;
    align-items: center
`;