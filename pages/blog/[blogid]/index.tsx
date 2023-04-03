import { Blogview, ViewArea } from '@/assets/GlobalStyles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function BlogPage() {
    const router = useRouter()
    const { blogid } = router.query
    return (
        <ViewArea>
            <Blogview>
                <div className="blogpost">
                    <h2>My first blog when wrote by me further || My first blog when wrote by me further</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maxime veniam quos facere omnis, quaerat obcaecati ipsam, perferendis suscipit numquam sed fugiat dicta, similique ullam assumenda commodi architecto! Amet facilis dicta autem doloribus, vel, quasi distinctio dolorem quaerat sequi sunt quos, quia vitae. Ipsum assumenda quam incidunt blanditiis nam, cum, aliquam esse neque sed corporis maiores vel fugiat quod eos debitis beatae, corrupti numquam at repudiandae in enim. Architecto repellendus porro cumque iure, pariatur, quasi autem dolores veritatis fugit eveniet voluptas! Consectetur consequuntur magnam, dignissimos quibusdam saepe obcaecati? Quia amet distinctio, aliquid id tenetur dolorum ab fuga
                    </p>
                </div>


                <div className="commentsection">
                    Comment Sections
                </div>
            </Blogview>
        </ViewArea>
    )
}

