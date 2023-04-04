
import { PostCreate, ViewArea } from '@/assets/GlobalStyles'
import React, { Ref, RefObject, useRef } from 'react'
import { Editor, EditorState } from 'draft-js';
import Button from '@/components/Button';
import { useToast } from '@chakra-ui/react'


function CreateBlog() {
    const titleRef: any = useRef()
    const contentRef: any = useRef()
    const imageRef: any = useRef()

    const toast = useToast()

    const validateAndPost = () => {
        if (!titleRef.current.value || !contentRef.current.value) {
            if (!titleRef.current.value) {
                toast({
                    title: 'Title is missing',
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
                return
            }
            else if (!contentRef.current.value) {
                toast({
                    title: 'Content is missing',
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
                return
            }
        }
        else if (titleRef.current.value && titleRef.current.value.length < 20) {
            toast({
                title: 'Title cannot be less than 20 characters',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
            return
        }
        else if (contentRef.current.value && contentRef.current.value.length < 300) {
            toast({
                title: 'Content cannot be less than 300 characters',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
            return
        }
        /////////////////////////////
        const data = {
            title: titleRef.current.value,
            content: contentRef.current.value,
            image: imageRef.current.value,
        }
        console.table(data)

        toast({
            title: 'Blog Posted',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        titleRef.current.value = ""
        contentRef.current.value = ""
        imageRef.current.value = null
    }


    return (
        <PostCreate>
            <h1>Create Post</h1>
            <input id='heading' type="text" placeholder='Title' ref={titleRef} />
            <textarea id='blog_content' placeholder='Content...' ref={contentRef} />
            <div id='fileUploadBtnWrapper'>
                <input accept='image/png, image/jpeg, image/webp' type="file" name="image_upload" id="image_upload" ref={imageRef} />
            </div>

            <Button text='Add Post' handleClick={validateAndPost} />
        </PostCreate>
    )
}


export default CreateBlog