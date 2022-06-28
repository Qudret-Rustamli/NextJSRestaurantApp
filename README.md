Internationalization with next-i18next

## STEP 1. DOWNLOAD THIS PACKAGES

=> FIRST-PACKAGE : next-i18next
=> SECOND-PACKAGE : next-compose-plugins

## STEP 2.

IN PUBLIC FOLDER =>
CREATE LOCALES FOLDER IN LOCALES FOLDER
=> CREATE LANGUANGE FILE IN LANGUANGES FILES
=> CREATE COMMON.JS

## STEP 3.

IN ROOT CREATE CONFIG FILE
=> next-i18next.config.js
IN CONFIG FILE WRITE THIS CODES
=> (
const path = require("path");
module.exports = {
i18n: {
locales: ["en", "az", "fr"],
defaultLocale: "en",
},
localePath: path.resolve("./public/locales"),
})

## STEP 4. IN NEXT-CONFIG.JS WRITE THIS CODES

=> (
const { i18n } = require("./next-i18next.config");
module.exports = {
reactStrictMode: true,
i18n,
})

## STEP 5. IN \_APP.JS ADD THIS ADDITIONS

=> (
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
export default appWithTranslation(MyApp, nextI18NextConfig)
)

## STEP 6. IN PAGES FOLDER ADD THIS ADDITIONS

    => (
        import { serverSideTranslations } from "next-i18next/serverSideTranslations"

        export async function getStaticProps({ locale }) {

        let languages = {
        ...(await serverSideTranslations(locale, ["common", "menu"])),
        };

        return {
        props: {
        ...languages,
        },
        };
        }

    )

## STEP 7. IN SUB COMPONENTS USE Internationalization

    =>(
        import { useTranslation } from "react-i18next";

        EXAMPLE <h1>{t("about_us")}</h1>
    )
