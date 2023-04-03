import styled, { createGlobalStyle } from 'styled-components'


type StyleProps = {}

export const GlobalStyles = createGlobalStyle({
    body: {
        margin: 0,
        background: '#0EA293',
    }
})

//////////////////////////
const subColor = '#2F0F5D'
const fixDimension = '42px'
//////////////////////////

export const StyledHeader = styled.div`
    width:100%;
    height:65px;
    position:sticky;
    background:#F5F3C1;
    top:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding:0 2rem;
    font-size:28px;
    font-weight:600;
    letter-spacing:0.25rem;
    color: ${subColor}

`

type StyleProp = {
    text?: any
}

export const AddBtn = styled.div<StyleProp>`
width:${fixDimension};
height:${fixDimension};
border-radius:0.25rem;
display:flex;
justify-content:center;
align-items:center;
background:${subColor};
margin:0 1rem;
cursor:pointer
`

export const AccLogo = styled.div`
color:white;
background:${subColor};
height:${fixDimension};
border-radius:0.25rem;
display:flex;
justify-content:center;
align-items:center;
margin:0 1rem;
cursor:pointer;
padding:0 1.5rem;
`