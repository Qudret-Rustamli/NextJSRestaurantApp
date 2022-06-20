import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

//redux
import { Provider } from 'react-redux';
import { store } from '../Redux';

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ));
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>,
  );
}

export default MyApp;
