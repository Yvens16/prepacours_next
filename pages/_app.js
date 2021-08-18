// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="facebook-domain-verification" content="d9atyj6cfztltzm5512z4bpvhk7uz7" />
        <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1052443675288122');
              fbq('track', 'PageView')`
            }}
          />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
