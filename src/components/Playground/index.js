import React, { useState } from "react";
import { Box, Heading } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';
import { useColorMode } from '@docusaurus/theme-common';

const Playground = () => {
    const {isDarkTheme} = useColorMode();

    const [accentColor, setAccentColor] = useState()
    const [isLoading, setLoader] = useState(false)

    const renderLoader = () => {
        return(
            <Box w='100%' h='100%' bg='red' >

            </Box>
        )
    }

    const handleSetValue = (val) => {
        setAccentColor(val)
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }

    return(
        <Box className={styles.mainPadding} w='100%' h='auto' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    Try our playground to see in action the rewards directory
                </Heading>
                <Box w={30} h={30} bg={`#${accentColor}`} />
                <input onChange={(e) => handleSetValue(e.target.value)} />
                <Box w='100%' h='auto' pt='3rem' display='flex' alignItems='center' justifyContent='center' >
                    <div className={isDarkTheme === true ? styles.phoneDark : styles.phoneLight}>
                        <div className={styles.iframeWrapper}>
                        <iframe loading="lazy" src={`https://dev.d1p65nyj9rmkp4.amplifyapp.com/?accentColor=${accentColor}`} width='100%' height='100%' border='0px' />     
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Playground;