import { useEffect, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FirebaseAuthFunctions } from "@/firebase/firebaseAuth";
import { signInWithGoogle, signOutFromGoogle } from "@/firebase/firebaseConfig";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginComp = ({ setIsAuthenticated }: any) => {
    const toast = useToast()

    const isAuth = localStorage.getItem("isAuth")

    const authenticateWithGoogle = async () => {
        try {
            const resp = await signInWithGoogle()
            setIsAuthenticated(true)
            localStorage.setItem('email', `${resp?.user?.email}`)
            localStorage.setItem('username', `${resp?.user?.displayName}`)
            localStorage.setItem('isAuth', `${true}`)
            toast({
                title: 'Logged in',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
        catch (err) {
            console.log(err)
            toast({
                title: 'Something went wrong !!',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const userSignOut = async () => {
        try {
            const resp = await signOutFromGoogle()
            console.log(resp)
            setIsAuthenticated(false)
            localStorage.clear()
            toast({
                title: 'Logged out',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
        catch (err) {
            console.log(err)
            toast({
                title: 'Something went wrong !!',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    useEffect(() => { setIsAuthenticated(isAuth ? true : false) }, [])


    return (
        <Box minW={{ base: "90%" }}>
            {/* <form> */}
            <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
            >
                {/* <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="email" placeholder="email address" />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText textAlign="right">
                            <Link>forgot password?</Link>
                        </FormHelperText>
                    </FormControl> */}
                {isAuth ?
                    <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        width="full"
                        onClick={userSignOut}
                    >
                        Logout
                    </Button>
                    :
                    <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        width="full"
                        onClick={authenticateWithGoogle}
                    >
                        Login
                    </Button>
                }
            </Stack>
            {/* </form> */}
        </Box>
    );
};

export default LoginComp;