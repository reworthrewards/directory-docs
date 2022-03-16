import React, { useState } from "react";
import { Box, Heading, Text } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';
import { BlockPicker, TwitterPicker } from 'react-color';
import { useColorMode } from '@docusaurus/theme-common';

const Playground = () => {
    const {isDarkTheme} = useColorMode();

    const [accentColor, setAccentColor] = useState('#2E58FF')
    const [cleanAccent, setCleanAccent] = useState()
    const [fontFamily, setFontFamily] = useState('Poppins')
    const [language, setLang] = useState('ES')
    const [isCopied, setCopied] = useState(false)

    const hexRegex = /^[0-9A-F]{6}$/i;

    const handleChangeComplete = (color) => {
        setAccentColor(color.hex);
        const clean = color.hex.replace('#', '');
        setCleanAccent(clean)
    };

    const copyClipboard = () => {
        setCopied(true)
        navigator.clipboard.writeText(`<iframe title="Reworth Rewards Directory" width="100%" height="100%" src="https://directory.reworth.app/?accentColor=${cleanAccent}&fontFamily=${fontFamily}&lang=${language}" frameBorder="0" loading="lazy" />`);
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }

    return(
        <Box className={styles.mainPadding} w='100%' h='auto' bg='var(--ifm-color-primary-secondaryBg)' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    Try our playground and see in action the rewards directory
                </Heading>
                <Box w='100%' h='auto' pt='3rem' display='flex' alignItems='center' justifyContent='center' flexDirection='row' >
                    <div className={styles.gridParent} style={{ bg: 'red' }} >
                        <div className={styles.cardPlayground}>
                            <Box w='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='row' >
                                <Box bg={accentColor === undefined ? '#e5eafb' : `${accentColor}`} className={styles.genericShadow} borderRadius="6px" width="25px" height="25px" display="flex" alignItems="center" justifyContent="center" >
                                    {
                                        accentColor === undefined ? <Text m='0px' fontSize='.8rem' >🚫</Text> : undefined
                                    }
                                </Box>
                                <Heading m='0px' pl='7px' className={styles.titleCard} color='var(--ifm-color-primary-text)'>
                                    Accent Color
                                </Heading>
                            </Box>
                            <Heading pt='0.5rem' className={styles.descCard} color='var(--ifm-color-primary-text)'>
                                Desired HEX color for some UI elements
                            </Heading>
                            <Box w='100%'>
                                <BlockPicker styles={styles.colorPicker} triangle='hide' width='100%' color={accentColor} onChangeComplete={handleChangeComplete} />
                            </Box>
                            <Box pt='3rem' w='100%' display='flex' flexDirection='column'>
                                <Heading m='0px' className={styles.titleCard} color='var(--ifm-color-primary-text)'>
                                    Font Family
                                </Heading>
                                <Heading pt='0.5rem' className={styles.descCard} color='var(--ifm-color-primary-text)'>
                                    Poppins, Montserrat, Gothic (more to come)
                                </Heading>
                                <Box w='100%' borderLeftRadius='6px' borderRightRadius='6px' display='flex' flexDirection='row' className={styles.baseShadow}>
                                    <Box borderLeftRadius='6px' className={styles.borderResponsive} bg={fontFamily === 'Poppins' ? '#2e58ff' : null} onClick={() => setFontFamily('Poppins')} cursor='pointer' p='1rem' w='100%' display='flex' alignItems='center' justifyContent='center' >
                                        <Heading m='0px' className={styles.descCard} color={fontFamily === 'Poppins' ? 'white' : null} >
                                            Poppins
                                        </Heading>
                                    </Box>
                                    <Box className={styles.borderResponsive} bg={fontFamily === 'Montserrat' ? '#2e58ff' : null} onClick={() => setFontFamily('Montserrat')} cursor='pointer' p='1rem' w='100%' display='flex' alignItems='center' justifyContent='center' >
                                        <Heading m='0px' className={styles.descCard} color={fontFamily === 'Montserrat' ? 'white' : null}>
                                            Montserrat
                                        </Heading>
                                    </Box>
                                    <Box borderRightRadius='6px' className={styles.borderResponsive} bg={fontFamily === 'Gothic A1' ? '#2e58ff' : null} onClick={() => setFontFamily('Gothic A1')} cursor='pointer' p='1rem' w='100%' display='flex' alignItems='center' justifyContent='center' >
                                        <Heading m='0px' className={styles.descCard} color={fontFamily === 'Gothic A1' ? 'white' : null}>
                                            Gothic A1
                                        </Heading>
                                    </Box>
                                </Box>
                            </Box>
                            <Box pt='3rem' w='100%' display='flex' flexDirection='column' >
                                <Heading m='0px' className={styles.titleCard} color='var(--ifm-color-primary-text)'>
                                    Language
                                </Heading>
                                <Heading pt='0.5rem' className={styles.descCard} color='var(--ifm-color-primary-text)'>
                                    Supported language.(Spanish and English)
                                </Heading>
                                <Box w='100%' borderLeftRadius='6px' borderRightRadius='6px' display='flex' flexDirection='row' className={styles.baseShadow} >
                                    <Box borderLeftRadius='6px' className={styles.borderResponsive} onClick={() => setLang('ES')} bg={language === 'ES' ? '#2e58ff' : null} cursor='pointer' p='1rem' w='100%' display='flex' alignItems='center' justifyContent='center' >
                                        <Heading m='0px' className={styles.descCard} color={language === 'ES' ? 'white' : null}>
                                            Spanish
                                        </Heading>
                                    </Box>
                                    <Box borderRightRadius='6px' className={styles.borderResponsive} onClick={() => setLang('EN')} bg={language === 'EN' ? '#2e58ff' : null} cursor='pointer' p='1rem' w='100%' display='flex' alignItems='center' justifyContent='center' >
                                        <Heading m='0px' className={styles.borderResponsive} className={styles.descCard} color={language === 'EN' ? 'white' : null}>
                                            English
                                        </Heading>
                                    </Box>
                                </Box>
                            </Box>
                            <Box onClick={() => isCopied === true ? null : copyClipboard()} mt='3rem' p='1rem' cursor='pointer' borderRadius='6px' w='100%' bg='#38A169' textAlign='center' display='flex' flexDirection='column' className={styles.genericShadow} >
                                <Heading m='0px' className={styles.descCard} color='white' >
                                    {isCopied === true ? 'Copied 🎉' : 'Copy this url generated to your project 📋'}
                                </Heading>
                            </Box>
                        </div>
                        <div className={styles.cardPlayground}>
                            <div className={isDarkTheme === true ? styles.phoneDark : styles.phoneLight}>
                                <div className={styles.iframeWrapper}>
                                    <iframe src={`https://dev.d1p65nyj9rmkp4.amplifyapp.com/?accentColor=${cleanAccent}&fontFamily=${fontFamily}&lang=${language}`} width='100%' height='100%' border='0px' loading="lazy" />     
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Playground;