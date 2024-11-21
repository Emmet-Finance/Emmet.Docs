import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { Cards } from "../components/Cards";
import { Repos } from "../components/Repos";
// import "./styles.css";
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://emmet.finance/bridge">
            Start Using the App
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="max-w-4xl mx-auto pb-16 px-4">
          <Cards />
        </div>
        <center>
          <h1>Developer Links</h1>
          <p>Quick access to the most popular repositories</p>
        </center>

        <div className="max-w-4xl mx-auto pb-16 px-4">
          <Repos />
        </div>

      </main>
    </Layout>
  );
}
