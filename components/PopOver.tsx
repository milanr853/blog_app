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

export default function PopOver() {
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
                    <PopoverHeader>Login</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Button colorScheme='teal'>Login</Button>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}
