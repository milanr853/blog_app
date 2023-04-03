import styled, { createGlobalStyle } from 'styled-components'


type StyleProps = {}

export const GlobalStyles = createGlobalStyle({
    body: {
        margin: 0,
        background: 'black',
        fontFamily: 'sans-serif',
    }
})

//////////////////////////
const subColor = '#2F0F5D'
const fixDimension = '42px'
const headerHeight = '65px'
//////////////////////////

export const StyledHeader = styled.div`
    width:100%;
    height:${headerHeight};
    position:sticky;
    background:#27E1C1;
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
//////////////////////////////////////

export const ViewArea = styled.div`
box-sizing:border-box;
padding:3rem 7rem;
background:white;
min-height:calc(100vh - ${headerHeight});
display:flex;
align-items:center;
`

export const BlogListView = styled.div`
width:100%;
border-radius:1rem;
.gridContainer{
    width:'100%';
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:450px;
    grid-gap:3rem;
    
    .gridElem{
        cursor:pointer;
        display:flex;
        flex-direction:column;
        .imgSect{
            height:60%;
            width:100%;
            background-size:cover;
            background-position:center;
            background-repeat: no-repeat;
            background-color:lightgray;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                object-fit:contain;
                height:80%;
                width:100%;
            }
            
        }
        .content{
            height:40%;
            .title{
                padding:1.5rem 0;
                font-size:20px;
                font-weight:600;
            }
            .para{}
        }
    }
}
`
/////////////////////////////////