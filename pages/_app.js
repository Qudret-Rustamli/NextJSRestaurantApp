import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout';

//redux
import { Provider } from 'react-redux';
import store from '../Redux';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>,
  );
}

export default MyApp;
