import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FollowersCard from './FollowersCard/FollowersCard';


export class Followers extends Component {
    constructor(){
        super();
        this.state = ({
            followerData : []
        })
    }
    componentDidMount(){
        this.getFollowers()
    }
    componentDidUpdate(){
        console.log(this.state.followerData)
    }
    getFollowers(){
        axios.get(`${this.props.followersUrl}`)
            .then(res=>{
                this.setState({
                    followerData: res.data
                })
            }).catch(err=>{
                console.log(err)
            })
    }
    render() {
        return (
            <>
                <CardStyles>
                   {this.state.followerData.map((data, i)=>{
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

export default Followers

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