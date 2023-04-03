import { AddBtn } from '@/assets/GlobalStyles';
import React from 'react'
import { GoPlus } from "react-icons/go";

type Props = {
    onClick?: () => void
}

function AddButton({ onClick }: Props) {

    return (
        <AddBtn onClick={onClick}>
            <GoPlus color='white' fontSize={'23px'} />
        </AddBtn>
    )
}

export default AddButton