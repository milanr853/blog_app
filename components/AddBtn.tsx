import { AddBtn } from '@/assets/GlobalStyles';
import React from 'react'
import { GoPlus } from "react-icons/go";


function AddButton() {

    return (
        <AddBtn>
            <GoPlus color='white' fontSize={'26px'} />
        </AddBtn>
    )
}

export default AddButton