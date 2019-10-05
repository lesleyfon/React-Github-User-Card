import React from 'react';
import styled from 'styled-components';


function Repositories(props) {
//    const createdOn = new Date(`${props.repos[0].created_at}`);
//    const updatedOn = new Date(`${props.repos[0].updated_at}`);
    return (
        <>
            {props.repos[0] ? 
            props.repos.map(repo=>{
                const createdOn = new Date(`${repo.created_at}`);
                const updatedOn = new Date(`${repo.updated_at}`);

               return <RepositoriesStyles key={repo.name}>
                    <h3><a href={repo.html_url} target='_blank'>{repo.name}</a></h3>
                    <h5> 📝 {repo.description} </h5>
                    <div className='bottom-row'>
                        <p>{repo.language} </p>
                        { repo.fork 
                            && 
                            <p> <span className='forked'> ⑂ </span> Forked Repo </p>
                        }
                        <p>Created on:
                             <span> 
                                {createdOn.toLocaleDateString()} 
                             </span>
                        </p>
                        <p>Last Updated
                            <span>
                            {updatedOn.toDateString()}
                            </span> 
                        </p>
                    </div>
                    
                </RepositoriesStyles>
            })
         :
         
         null
         }
        </>

    )
}

export default Repositories

const RepositoriesStyles = styled.div`
    /* margin-top: 40px; */
    padding: 10px;
    border-top: 0.5px solid lightgrey;
    /* height: 180px; */
    line-height: 1.7;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-content: center;
    /* align-items: center; */
    h3, h5, p{
        margin: 5px;;
    }
    a{
        text-decoration: none;
        color: #0366d6; 
        font-size: 19px;
    }
    a:visited{
        color : #0366d6;
    }

       

    h3:hover{
            text-decoration: underline;
            cursor: pointer;
    }
    .bottom-row{
        display: flex;
    }

`; 