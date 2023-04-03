import React from 'react'
import styled from 'styled-components'

type PropType = {
    text?: String,
    handleClick?: () => void
}

export const StyledBtn = styled.div<PropType>`
background:#27e1c1;
color:#232739;
height:45px;
border-radius:0.5rem;
width:140px;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
cursor:pointer;

::after{
    content: "${({ text = 'Click' }: any) => text}"
}
`

function Button({ text, handleClick }: PropType) {
    return (
        <StyledBtn onClick={handleClick} text={text} />
    )
}

export default Button