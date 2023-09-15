import Head from 'next/head';

//Types
interface Props {
    title: string
}

const Seo = ({ title }: Props) => {
    return (
        <Head>
            <meta property="og:url" content="https://blooma.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="This is Also advantage" />
            <title>{title}</title>
            <meta name="description" content="This is advantage" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="keywords" content="Hey, Hello" />
            <meta name="author" content="Siam Ahnaf" />
        </Head>
    );
};
export default Seo;