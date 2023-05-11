import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Review Master</h1>
        <p className="hero__subtitle">
          A library to visualize business intelligence derived from sentiment
          analysis on product reviews
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/api/">
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
                <p style={{ fontWeight: 500, textAlign: 'justify' }}>
                  Review Insights is a powerful library designed to help
                  businesses visualize and understand customer sentiment from
                  product reviews. With the increasing number of reviews left by
                  customers on e-commerce platforms, it becomes a daunting task
                  for sellers to manually read and analyze them all. ReviewViz
                  simplifies this process by presenting the insights derived
                  from sentiment analysis in a visually appealing and easily
                  digestible manner. Imagine a pair of headphones listed on an
                  e-commerce website with thousands of customer reviews. By
                  using sentiment analysis, we can determine what percentage of
                  customers think the product is cheap or expensive and
                  high-quality or low-quality, among other aspects. This library
                  takes these results and presents them in an interactive and
                  engaging way, allowing sellers to make informed decisions
                  based on the overall customer sentiment.
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
