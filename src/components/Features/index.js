import React from "react";
import { Box, Heading } from '@chakra-ui/react';
import Translate from '@docusaurus/Translate';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';

const Features = () => {
    const featuresCards = [
        {id: 0, title: <Translate>Up and running</Translate>, emoji: '✅', desc: <Translate>We keep an updated real-time directory of our affiliated merchants, so when you integrate the directory to your mobile application you will have an immediate and easy view of the merchants without additional configurations.</Translate>},
        {id: 1, title: <Translate>Responsive for devices</Translate>, emoji: '🖥', desc: <Translate>We guarantee a 100% responsive development. Each of the web elements are resized to the size of the screen of each device, allowing a correct display and optimized user experience.</Translate>},
        {id: 2, title: <Translate>Easy integrations</Translate>, emoji: '🎉', desc: <Translate>We improved the documentation for an immediate and easy integration in your mobile applications based on RN, Ionic, Android and iOS, in addition to supporting web applications.</Translate>},
        {id: 3, title: <Translate>Customazible</Translate>, emoji: '🎨', desc: <Translate>Customize your directory presentation with attributes like colors, fonts, and language according to your brand guidelines.</Translate>}
    ]
    return(
        <Box className={styles.mainPadding} w='100%' h='auto' bg='var(--ifm-color-primary-bg)' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    <Translate>
                        Amazing features under the hood
                    </Translate>
                </Heading>
                <Box className={styles.gridPadding} w='100%' h='auto' pt='3rem'>
                    <div className={styles.gridParent}>
                        {
                            featuresCards.map((item, i) => {
                                return(
                                    <Box className={styles.card} key={i}>
                                        <Heading m='0px' className={styles.emojiIcon}>
                                            {item.emoji}
                                        </Heading>
                                        <Heading pt='1rem' className={styles.titleCard}>
                                            {item.title}
                                        </Heading>
                                        <Heading className={styles.descCard}>
                                            {item.desc}
                                        </Heading>
                                    </Box>
                                )
                            })
                        }
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Features;