import { AccLogo, StyledHeader } from '@/assets/GlobalStyles'
import React from 'react'
import AddBtn from './AddBtn'
import { useRouter } from 'next/router'
import { GoOctoface } from 'react-icons/go'
import PopOver from "./PopOver"


type PropTypes = {
    title: String
}

function Header({ title }: PropTypes) {
    const router = useRouter()

    const navigateToHomepage = () => {
        router.push('/')
    }

    const navigateToCreatePost = () => {
        router.push('/create_blog')
    }

    return (
        <StyledHeader>
            <div className="homeTitle" onClick={navigateToHomepage}>{title}</div>

            <div style={rightDivStyles}>
                <AddBtn onClick={navigateToCreatePost} />

                <PopOver />
            </div>
        </StyledHeader>
    )
}

const rightDivStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export default Header