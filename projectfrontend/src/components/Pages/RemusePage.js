import styled from "styled-components";

import React from 'react';


import Resume from '../Resume';


export const MainLayout = styled.div`
    padding: 5rem;
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
    @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }
`;

function ResumePage() {
    return (
        <MainLayout>
            <Resume />
        </MainLayout>
    )
}

export default ResumePage