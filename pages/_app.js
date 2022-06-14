import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => ( <Layout>
    <Component {...pageProps} />
  </Layout> ));
  return  getLayout(<Component {...pageProps} />)
 
  
}

export default MyApp;
