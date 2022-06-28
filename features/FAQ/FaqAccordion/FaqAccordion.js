import * as React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Accardion.module.scss";
import { useTranslation } from "react-i18next";

export const FaqAccordion = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Accordion className={styles.accardion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accardion__title}>
            {t("faq1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accardion__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accardion__title}>
            {t("faq2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accardion__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={styles.accardion__title}>
            {t("faq3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accardion__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={styles.accardion__title}>
            {t("faq4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accardion__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
