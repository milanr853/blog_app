import { AccLogo } from '@/assets/GlobalStyles'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
} from '@chakra-ui/react'
import { GoOctoface } from 'react-icons/go'
import LoginComp from './LoginComponent'
import { useState, useEffect } from 'react'

export default function PopOver() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState<String | undefined>('')

    useEffect(() => {
        const val = localStorage.getItem('username')
        if (!val) return
        const name = val?.split(' ')[0]
        setUserName(name)
    }, [])

    return (
        <Popover>
            <PopoverTrigger>

                <AccLogo>
                    <GoOctoface fontSize={'23px'} />
                </AccLogo>

            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>{
                        isAuthenticated ? `${userName?.slice(0, 1).toUpperCase()}${userName?.slice(1)} you are logged in`
                            : 'Login / Signup'}
                    </PopoverHeader>
                    <PopoverCloseButton />

                    <PopoverBody>
                        <LoginComp setIsAuthenticated={setIsAuthenticated} />
                    </PopoverBody>

                </PopoverContent>
            </Portal>
        </Popover>
    )
}
