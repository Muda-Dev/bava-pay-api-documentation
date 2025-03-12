import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          East Africa Mobile Money Collections
        </Heading>
        <p className="hero__subtitle">
          Integrate once, access multiple currencies and payment methods. Build better financial experiences.
        </p>
        <div className={styles.content}>
          <p>
          Open Gateway API enables businesses in Uganda to securely collect mobile money payments from customers using MTN, Airtel, and Mpesa. Customers authenticate transactions by entering their mobile money PIN, ensuring a seamless and reliable process. Funds are instantly debited from the customer's account and credited to the merchant. The API also supports multiple East African currencies, including KES (Kenyan Shilling), UGX (Ugandan Shilling), and TZS (Tanzanian Shilling), making it a versatile solution for regional businesses.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`MudaPay - East Africa Mobile Money Collections`}
      description="MudaPay provides seamless financial integrations, enabling push and pull payments across multiple currencies and payment methods.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}