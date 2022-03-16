import React from "react";
import { Box, Heading } from '@chakra-ui/react';
import styles from '../../pages/index.module.css';
import logo from '../../../static/img/logo-small.png';
import Link from '@docusaurus/Link';
import { PrimaryButton } from "../../utils/Buttons";

const Products = () => {
    const featuresCards = [
        {id: 0, title: 'API Documentation', emoji: '🔮', desc: 'Desc here or maybe', link: 'https://developer.reworth.app', cta: 'See documentation'},
        {id: 1, title: 'Cashback Calculator', emoji: '📈', desc: 'Desc here or maybe', link: 'https://calculadoracashback.reworth.co', cta: 'See simulator'}
    ]
    return(
        <Box className={styles.mainPadding} w='100%' h='auto' display='flex' flexDirection='column' >
            <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column' >
                <img src={logo} alt='REWORTH' style={{ width: 80, height: 80 }} />
                <Heading pt='1rem' className={styles.featuresTitle} textAlign='center' color='var(--ifm-color-primary-text)' >
                    Meet more of our products and enhance your potential
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
                                            Lorem ipsum dolor sit amet. Eum eveniet iste id dolorem nobis sed magni dolores eos cumque reiciendis. Ut natus nesciunt et provident pariatur qui quisquam voluptas id beatae dolor.
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