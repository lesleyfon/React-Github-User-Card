import React, {Component} from 'react'
import styled from 'styled-components';

export default class  GitHubUserAside extends Component {
    constructor(){
        super();
        this.state = {
            organization : ''
        }
    }
    componentDidUpdate(){
        // console.log(this.props)
      }
    componentDidMount(){
        // console.log(this.props)
    }
   
    render(){
        return (
            <GitHubUserAsideStyles>
                <div className='avatarDiv'>
                    <img src={`${this.props.userInfo.avatar_url}`} alt='user avatar'/>

                    <div className='status'><span role="img" aria-label='emoji'> 👨🏾‍🎓</span> Student Developer</div>
                </div>
                <div className='userName'>
                    <h3>{this.props.userInfo.name}</h3>
                    <h5> {this.props.userInfo.login}</h5>
                </div>
                <div className='location'>
                    <h4> <span role="img" aria-label='emoji'>     📍</span>{this.props.userInfo.location}</h4>

                </div>
            </GitHubUserAsideStyles>
        )
    }
}

const GitHubUserAsideStyles = styled.div`
    width: 312px;
    height: 100vh;
    margin: 0px 20px 0px 0px;
    .avatarDiv{
        height: 300px;
        margin: 0 auto;
        width: 80%;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        box-sizing: border-box;
        border: 0.5px solid lightgrey;
        img{
            width: 100%; 
        }
        .status{
            padding: 10px;
        }
    }
    .userName, .location{
        margin: 0 auto;
        width: 80%;
        padding: 10px 0px;
        border-bottom: 0.5px solid lightgrey;
        h3, h5{
            margin: 0px;
            line-height: 2;
        }
        h5{
            color: #666666
        }
    }
    
`;