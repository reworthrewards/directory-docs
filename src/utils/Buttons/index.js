import React from "react"
import { Box, Heading } from '@chakra-ui/react'
import Link from '@docusaurus/Link';
import styles from '../../pages/index.module.css';

export const PrimaryButton = ({text, link, showIcon, hero}) => {
    return(
        <Link to={link} className={styles.genericShadow} style={{ textDecoration: 'none' }} >
            <Box 
                w='auto' 
                h='auto' 
                p={hero ? '1rem 2rem' : '1rem 1.25rem'}
                bg='#2e58ff' 
                borderRadius='6px'
                boxShadow='dark-lg' 
                cursor='pointer' 
                color='white'
                transition='ease-in'
                display='flex'
                flexDirection='row'
                _hover={{ 
                    bg: '#2b1ee8'
                }} >
                    <Box w={showIcon === undefined ? '100%' : '80%'} display='flex' alignItems='center' justifyContent='flex-start' >
                        <Heading m='0px' fontWeight='500' fontSize='1.1rem' >
                            {text}
                        </Heading>
                    </Box>
                    {
                        showIcon ? 
                        <Box w='20%' display='flex' alignItems='center' justifyContent='flex-end' >
                            <Heading m='0px' fontWeight='500' fontSize='1.1rem' >
                                &#8594;
                            </Heading>
                        </Box> : null
                    }
            </Box>
        </Link>
    )
}

export const SecondaryButton = ({text, link, showIcon, hero}) => {
    return(
        <Link to={link} className={styles.baseShadow} style={{ textDecoration: 'none' }} >
            <Box 
                w='auto' 
                h='auto' 
                p={hero ? '1rem 2rem' : '1rem 1.25rem'}
                bg='#ebedf0' 
                borderRadius='6px' 
                boxShadow='2xl' 
                cursor='pointer' 
                color='#1c1e21'
                _hover={{
                    bg: '#d4d5d8'
                }} >
                    <Box w={showIcon === undefined ? '100%' : '80%'} display='flex' alignItems='center' justifyContent='flex-start' >
                        <Heading m='0px' fontWeight='500' fontSize='1.1rem' >
                            {text}
                        </Heading>
                    </Box>
                    {
                        showIcon ? 
                        <Box w='20%' display='flex' alignItems='center' justifyContent='flex-end' >
                            <Heading m='0px' fontWeight='500' fontSize='1.1rem' >
                                &#8594;
                            </Heading>
                        </Box> : null
                    }
            </Box>
        </Link>
    )
}