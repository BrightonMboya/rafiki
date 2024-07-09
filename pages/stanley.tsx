import Head from 'next/head'
import React from 'react'
import StanleyCarousel from '../components/StanleyCarousel';

const Page = () => {
    return (
        <>
            <Head>
                <title>Stanley - Stanley Page</title>
                <meta
                    property="og:image"
                    content="https://nextjsconf-pics.vercel.app/og-image.png"
                />
                <meta
                    name="twitter:image"
                    content="https://nextjsconf-pics.vercel.app/og-image.png"
                />
            </Head>
            <StanleyCarousel />
        </>
    )
}

export default Page