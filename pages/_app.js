// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="facebook-domain-verification" content="d9atyj6cfztltzm5512z4bpvhk7uz7" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
