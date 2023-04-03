import { AccLogo, StyledHeader } from '@/assets/GlobalStyles'
import React from 'react'
import AddBtn from './AddBtn'


type PropTypes = {
    title: String
}

function Header({ title }: PropTypes) {
    return (
        <StyledHeader>
            {title}
            <div style={rightDivStyles}>
                <AddBtn />
                <AccLogo>
                    Login
                </AccLogo>
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