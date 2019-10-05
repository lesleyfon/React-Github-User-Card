import React from 'react';
import styled from 'styled-components';

function GitHubUserNavBar(props) {

    return (
        <NavStyles>
            <ul>
                <li onClick={e=>{props.getNavItem(e, 'repositories')}}>Repositories</li>
                <li onClick={e=>{props.getNavItem(e, 'followers')}}>Followers {props.following}</li>
                <li onClick={e=>{props.getNavItem(e, 'following')}}>Following {props.followers}</li>
                <li>Public_repos: 66 </li>

            </ul>
        </NavStyles>
    )
}

export default GitHubUserNavBar


const NavStyles = styled.div`
    width : 100%;
    border-bottom: 0.5px solid lightgrey;
    height: 55px;
    display: flex;
    align-content:center;
    align-items:center;
    ul{
        display: flex;
        width: 500px;
        justify-content: space-between;
        margin: 0px;
        list-style-type: none;
        bottom: 0px;
        padding: 10px;
        li{
            cursor: pointer;
        }
    }
`;