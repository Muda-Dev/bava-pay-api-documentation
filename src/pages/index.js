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
        New Age Financial Solutions
        </Heading>
        <p className="hero__subtitle">
          Integrate once, access multiple currencies and payment methods. Build better financial experiences.
        </p>
        <div className={styles.content}>
          <p>
          Open Gateway API enables businesses to securely collect payments from customers using various payments methods. We have integrated mobile money, wallets, stable-coins, bank and POS payments into the system. The API a growing list of currencies, making it a versatile solution for global businesses.
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
      title={`New Age - MUDA Mobile Money Collections`}
      description="New Age provides seamless financial integrations, enabling Payout and Collection payments across multiple currencies and payment methods.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}