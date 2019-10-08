import React from 'react'
import styled from 'styled-components';
function Loader() {
    return (
        <LoaderStyles>
            <div className="loader"></div>
        </LoaderStyles>
    )
}

const LoaderStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-content: center;
    align-items: center;
    .loader {
        margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default Loader
