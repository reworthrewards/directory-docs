import React from "react";
import { Box, Heading } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';

const Features = () => {
    const featuresCards = [
        {id: 0, title: 'Up and running', emoji: '✅', desc: 'Desc here or maybe'},
        {id: 1, title: 'Responsive for devices', emoji: '🖥', desc: 'Desc here or maybe'},
        {id: 2, title: 'Easy integrations', emoji: '🎉', desc: 'Desc here or maybe'},
        {id: 3, title: 'Customazible', emoji: '🎨', desc: 'Desc here or maybe'}
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
                                            Lorem ipsum dolor sit amet. Eum eveniet iste id dolorem nobis sed magni dolores eos cumque reiciendis. Ut natus nesciunt et provident pariatur qui quisquam voluptas id beatae dolor.
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