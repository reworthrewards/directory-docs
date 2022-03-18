import React from "react";
import { Box, Heading } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';
import Translate from '@docusaurus/Translate';
import { PrimaryButton } from "../../utils/Buttons";

const Products = () => {
    const featuresCards = [
        {id: 0, title: <Translate>API Documentation</Translate>, emoji: '🔮', desc: <Translate>Powerful REST API ready to be implemented in record time. Easy integration with REWORTH via Rest API or one of our tools, allows your banking, fintech or wallet institution to integrate a cashback program in three simple steps.</Translate>, link: 'https://developer.reworth.app', cta: <Translate>See documentation</Translate>},
        {id: 1, title: <Translate>Cashback Calculator</Translate>, emoji: '📈', desc: <Translate>With this simulator, merchants owners and companies will be able to visualize the impact of the use of cashback, such as the number of people who return to the business, as well as an approximation of earnings and average ticket increase.</Translate>, link: 'https://calculadoracashback.reworth.co', cta: <Translate>See simulator</Translate>}
    ]
    return(
        <Box className={styles.mainPadding} w='100%' h='auto' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    <Translate>
                        Meet more of our products and enhance your potential
                    </Translate>
                </Heading>
                <Box className={styles.gridPadding} w='100%' h='auto' pt='3rem'>
                    <div className={styles.gridParent}>
                        {
                            featuresCards.map((item, i) => {
                                return(
                                    <Box key={i} className={styles.card}>
                                        <Heading m='0px' className={styles.emojiIcon}>
                                            {item.emoji}
                                        </Heading>
                                        <Heading pt='1rem' className={styles.titleCard}>
                                            {item.title}
                                        </Heading>
                                        <Heading className={styles.descCard}>
                                            {item.desc}
                                        </Heading>
                                        <Box pt='0.3rem' >
                                            <PrimaryButton text={item.cta} link={item.link} showIcon />
                                        </Box>
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

export default Products;