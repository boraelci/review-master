import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Review Master</h1>
        <p className="hero__subtitle">A library to visualize business intelligence derived from sentiment analysis on product reviews</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/index"
          >
            Explore docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Revie Master`}
      description="A library to visualize business intelligence derived from sentiment analysis on product reviews"
    >
      <HomepageHeader />
      <main>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--3')}></div>
          <div className={clsx('col col--6')}>
            <div className="text--center padding-horiz--md">
              <br></br>
              <h3>Overview</h3>
              <p style={{ fontWeight: 500, textAlign: 'justify' }}>Let's imagine a pair of headphones, listed on an e-commerce website, that has thousands of customer reviews associated with it. The seller can read through all of them but it would be time-consuming. When sentiment analysis is performed on these reviews, the results would show what percentage of the customers think the product is cheap/expensive, durable/short-lived, or high-quality/low-quality and more. This library allows visualizing the business intelligence derived from these results with features such as a historical view of sentiment change.
              </p>
            </div>
          </div>
          <div className={clsx('col col--3')}></div>
        </div>
      </div>
      </main>
    </Layout>
  );
}
