import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout';

//redux
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
        </Layout>,
      )}
    </Provider>
  );
}

export default MyApp;
