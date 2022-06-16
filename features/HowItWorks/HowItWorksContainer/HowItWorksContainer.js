import styles from "../../../styles/pages/how-it-works.module.scss";
import Image from "next/image";

export const HowItWorksContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container__title}>How It Works</h2>
        <p className={styles.container__desc}>
          Delivery May Be Extended During Sale Periods. Please Refer To The
          Checkout Page For An Updated Estimate For Your Location. Kindly Note
          That Once You Have Placed An Order, It Is No Longer Possible To Modify
          Your Order. Taxes And Duties Are Included In All Product Prices.It Is
          Possible To Place An Order With Shipment To A Different Address Than
          Your Home Or Billing Address When Paying With A Credit Card. Please
          Note That Klarna Payments Require That Your Order Is Shipped To Your
          Registered Home Address.
        </p>
        <div className={styles.container__img}>
          <div className={styles.container__img__wrapper}>
            <Image
              src="/images/how-it-works.svg"
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};
