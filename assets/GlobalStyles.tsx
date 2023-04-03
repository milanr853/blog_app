import styled, { createGlobalStyle } from 'styled-components'


type StyleProps = {
    text?: any
}

export const GlobalStyles = createGlobalStyle({
    body: {
        margin: 0,
        fontFamily: 'sans-serif',
    }
})

//////////////////////////
const subColor = '#232739'
const fixDimension = '35px'
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
    font-size:30px;
    font-weight:600;
    letter-spacing:0.25rem;
    color: ${subColor};
    .homeTitle{
        cursor:pointer
    }
`


export const AddBtn = styled.div<StyleProps>`
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
height:40px;
width:40px;
border-radius:50%;
/* border-radius:0.25rem; */
display:flex;
justify-content:center;
align-items:center;
margin:0 1rem;
cursor:pointer;
/* padding:0 1.5rem; */
`
//////////////////////////////////////

export const ViewArea = styled.div`
box-sizing:border-box;
padding:3rem 6rem;
background:${subColor};
min-height:calc(100vh - ${headerHeight});
display:flex;
align-items:center;
justify-content:center;
`

export const BlogListView = styled.div`
margin-top:5rem;
width:100%;
border-radius:1rem;
.gridContainer{
    width:'100%';
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:500px;
    grid-gap:3rem;
    
    .gridElem{
        background-color:lightgray;
        cursor:pointer;
        display:flex;
        border-radius:1rem;
        flex-direction:column;
        .imgSect{
            height:60%;
            width:100%;
            background-size:cover;
            background-position:center;
            background-repeat: no-repeat;
            display:flex;
            justify-content:center;
            align-items:center;
            border-top-right-radius:1rem;
            border-top-left-radius:1rem;
            img{
                object-fit:contain;
                height:80%;
                width:100%;
            }
            
        }
        .content{
            height:40%;
            box-sizing:border-box;
            padding:1.5rem;
            .title{
                margin-bottom:1.5rem;
                font-size:20px;
                font-weight:600;
            }
        }
    }
}
`
/////////////////////////////////

export const Blogview = styled.div`
width:75%;
.blogpost{
    border-radius:1rem;
    background:lightgray;
    min-height:500px;
    width:100%;
    box-sizing:border-box;
    padding:1rem 2rem;
    h2{
        font-weight:600;
        font-size:26px;
        margin-bottom:1rem;
    }
}
.commentsection{
    margin-top:2rem;
    border-radius:1rem;
    background:lightgray;
    height:125px;
    width:100%;
    box-sizing:border-box;
}
`
////////////////////////////////////////

export const PostCreate = styled.div`
h1{
    color:white;
    font-size:26px;
    font-weight:600;
};
width: 70%; min-height: 350px;
display:flex;flex-direction:column;
gap:2rem;
#heading{
    height:70px;
    padding:0 1rem;
    border-radius:0.5rem
}
#blog_content{
    border-radius:0.5rem;
    height:200px;
    padding:1rem;
    resize:none;
}
#fileUploadBtnWrapper{
    border-radius:0.5rem;
    padding:0 1rem;
    background:white;height:70px;
    display:flex;
    align-items:center;
}
`