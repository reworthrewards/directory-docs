import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import logo from '../../static/img/logo-small.png'
import { PrimaryButton, SecondaryButton } from '../utils/Buttons';
import { useColorMode } from '@docusaurus/theme-common';
import HomepageFeatures from '../components/HomepageFeatures';
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
          Mobile first Build accessible rewards mobile apps with a design-first approach 🎉
        </Heading>
        <Box pt='2rem' w='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='row' >
          <PrimaryButton text={'Get Started'} />
          <Box pl='1rem' >
            <SecondaryButton text={'Playground'} />
          </Box>
        </Box>
      </Box>
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
          <Features />
          <Playground />
          <Products />
        </main>
      </Layout>
  );
}
