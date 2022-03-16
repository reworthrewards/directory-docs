import React from "react";
import { Box, Heading } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';

const Features = () => {
    const featuresCards = [
        {id: 0, title: 'Up and running', emoji: '✅', desc: 'We keep an updated real-time directory of our affiliated merchants, so when you integrate the directory to your mobile application you will have an immediate and easy view of the merchants without additional configurations.'},
        {id: 1, title: 'Responsive for devices', emoji: '🖥', desc: 'We guarantee a 100% responsive development. Each of the web elements are resized to the size of the screen of each device, allowing a correct display and optimized user experience.'},
        {id: 2, title: 'Easy integrations', emoji: '🎉', desc: 'We improved the documentation for an immediate and easy integration in your mobile applications based on RN, Ionic, Android and iOS, in addition to supporting web applications.'},
        {id: 3, title: 'Customazible', emoji: '🎨', desc: 'Customize your directory presentation with attributes like colors, fonts, and language according to your brand guidelines.'}
    ]
    return(
        <Box className={styles.mainPadding} w='100%' h='auto' bg='var(--ifm-color-primary-bg)' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    Amazing features under the hood
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