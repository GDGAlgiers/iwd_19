import React from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'


const agendaTable = require("./agenda.svg")

const StyledContent = styled.div`
    padding: 0 5rem;
    margin-bottom: 10rem;
    h1{
        text-align: center;
        font-size: 7.2rem;
    }
    h2{
        text-align: center;
        font-size: 4rem;
        font-weight: 300;
    }
`;


const AgendaContent = () => {
    return(
        <StyledContent>
            <h1> Agenda </h1>
            <ReactSVG src={agendaTable}/>
        </StyledContent>
    )
}
export default AgendaContent