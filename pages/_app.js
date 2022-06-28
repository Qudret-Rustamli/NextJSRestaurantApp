import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout';
//redux
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

//react-tastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Layout>,
      )}
    </Provider>
  );
}

export default MyApp;
