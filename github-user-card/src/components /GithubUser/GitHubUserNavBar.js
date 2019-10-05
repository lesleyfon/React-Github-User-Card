import React from 'react';
import styled from 'styled-components';

function GitHubUserNavBar() {

    return (
        <NavStyles>
            <ul>
                <li>Repositories</li>
                <li>Followers</li>
                <li>Following</li>

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
        width: 300px;
        justify-content: space-between;
        margin: 0px;
        list-style-type: none;
        bottom: 0px;
        padding: 10px;
    }
`;