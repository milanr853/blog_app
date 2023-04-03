import { BlogListView, ViewArea } from '@/assets/GlobalStyles'
import React from 'react'
import placeholder from "../assets/images/placeholder.png"
import Image from 'next/image'
import { useRouter } from 'next/router'

function ListViewComponet() {
    const bloglist: Array<Object> =
        [
            {
                title: 'My first blog ',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ex veritatis eos sit impedit asperiores iste corporis ratione fuga tempore? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ex veritatis eos sit impedit asperiores iste corporis ratione fuga tempore? ',
                image: 'https://bit.ly/3nEpRlN',
                id: 1
            },
            {
                title: 'My first blog when wrote by me further',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ex veritatis eos sit impedit asperiores iste corporis ratione fuga tempore?',
                image: 'https://bityl.co/HzJv',
                id: 2
            },
            {
                title: 'My first blog when wrote by me further',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ex veritatis eos sit impedit asperiores iste corporis ratione fuga tempore?',
                image: '',
                id: 3
            },
            {
                title: 'My first blog when wrote by me further',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ex veritatis eos sit impedit asperiores iste corporis ratione fuga tempore?',
                image: '',
                id: 4
            },
        ]


    const router = useRouter()

    const takeMeToBlog = (id: Number) => {
        router.push(`/blog/${id}`)
    }


    return (
        <ViewArea>
            <BlogListView>
                {
                    bloglist.length ?
                        <div className='gridContainer' >
                            {bloglist.map(({ title, content, image, id }: any) => {
                                return (
                                    <div className='gridElem' onClick={() => takeMeToBlog(id)} key={id} >
                                        <div className="imgSect" style={{ backgroundImage: `url("${image}")` }}>
                                            {!image ? <Image height='200' src={placeholder} alt='blog image' /> : <></>}
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                {title.length <= 30 ? title : title.slice(0, 30) + '...'}
                                            </div>
                                            <div className="para">
                                                {content.length <= 200 ? content : content.slice(0, 200) + '...'}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div style={noDataAvailable}>
                            Sorry no blogs available !!
                        </div>
                }
            </BlogListView>
        </ViewArea>
    )
}

const noDataAvailable = {
    width: '100%',
    height: "200px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#2F0F5D',
    background: '#27E1C1',
    borderRadius: '1rem',
    fontSize: '28px',
    fontWeight: '600'
}

export default ListViewComponet