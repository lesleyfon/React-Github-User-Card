import React from 'react';
import styled from 'styled-components';

function FollowersCard(props) {

    return (
        <CardStyles className='card'>
            <img src={`${props.data.avatar_url}`} alt = {`${props.data.avatar_url}`} />
            <h4>UserName: {props.data.login}</h4>
        </CardStyles>
    )
}

export default FollowersCard

const CardStyles = styled.div`
    width: 30%;
    height: 335px;
    border: 0.5px solid lightgrey;
    margin: 10px 0px;
    img{
        width: 100%;
        height: 78%;
    }
    h4{
        color: #666666;
        margin-left: 5px;
    }
`;