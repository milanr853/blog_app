import { useRouter } from 'next/router'
import React from 'react'

export default function BlogPage() {
    const router = useRouter()
    const { blogid } = router.query
    return (
        <div>Welcome to Blog page - {blogid}</div>
    )
}

