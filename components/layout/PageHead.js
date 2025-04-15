import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Vtrain "}
                </title>
            </Head>
        </>
    )
}

export default PageHead