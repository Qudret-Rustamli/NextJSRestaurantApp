import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
