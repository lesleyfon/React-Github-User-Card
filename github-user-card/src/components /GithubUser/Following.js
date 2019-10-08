import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FollowersCard from './FollowersCard/FollowersCard';


export class Following extends Component {
    constructor(){
        super();
        this.state = ({
            followingData : [],
            followingUrl : 'https://api.github.com/users/lesleyfon/following'
        })
    }
    componentDidMount(){

        this.getFollowing()
    }
    componentDidUpdate(){
        console.log('hello')
        console.log(this.state.followingData)
    }
    getFollowing(){ 

        axios.get(`${this.state.followingUrl}`)
            .then(res=>{
                this.setState({
                    followingData: res.data
                })
            }).catch(err=>{
                console.log(err)
            })
    }
    render() {
        return (
            <>
                <CardStyles>
                   {this.state.followingData.map((data, i)=>{
                       return <FollowersCard 
                            key ={i}
                            data ={data} 
                       />
                   })}
                </CardStyles>
            </>
        )
    }
}

export default Following

const CardStyles = styled.div`
        height: 100%;
        margin: 0 auto;
        width: 100%;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        flex-wrap: wrap; 
`;