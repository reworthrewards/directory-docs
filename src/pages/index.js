import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Box, Heading } from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from '../utils/Buttons';
import { useColorMode } from '@docusaurus/theme-common';
import Features from '../components/Features';
import Playground from '../components/Playground';
import Products from '../components/Products';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const {isDarkTheme} = useColorMode();
  
  return (
    <Box className={styles.baseHero} w='100%' h='auto' bg='var(--ifm-color-primary-bg)' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Box w='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' >
        <Heading m='0px' className={styles.heroTitle} textAlign='center' pt='1rem' color='var(--ifm-color-primary-text)' >
          Enhace your app with our <Heading as='span' color='var(--ifm-color-primary-darkest)' >ready-to-use</Heading> reward directory with a mobile-first approach 🎉
        </Heading>
      </Box>
      <Box pt='2rem' w='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='row' >
        <PrimaryButton text={'Get Started'} link={'docs/intro'} hero />
        <Box pl='1rem' >
          <SecondaryButton text={'See iFrame'} link={'https://directory.reworth.app'} hero />
        </Box>
      </Box>
      {/* <Box w='auto' ml='5rem' mt='1rem' display='flex' alignItems='center' justifyItems='center'>
        <iframe src="https://ghbtns.com/github-btn.html?user=ShocKWavEv1&amp;repo=reworth-docs&amp;type=star&amp;count=true&amp;size=large" width="200px" height="30px" title="GitHub Stars" data-gtm-yt-inspected-1_19="true"></iframe>
      </Box> */}
    </Box>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
        title={`${siteConfig.tagline}`}
        description={`${siteConfig.tagline}`}>
          <HomepageHeader />
        <main>
          <Playground />
          <Features />
          <Products />
        </main>
      </Layout>
  );
}
