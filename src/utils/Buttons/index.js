import React from "react"
import { Box, Heading } from '@chakra-ui/react'
import Link from '@docusaurus/Link';

export const PrimaryButton = ({text}) => {
    return(
        <Link to='docs/intro' style={{ textDecoration: 'none' }} >
            <Box 
                w='auto' 
                h='auto' 
                p='1rem 1.25rem' 
                bg='#2e58ff' 
                borderRadius='6px'
                boxShadow='dark-lg' 
                cursor='pointer' 
                color='white'
                transition='ease-in'
                _hover={{ 
                    bg: '#2b1ee8'
                }} >
                <Heading m='0px' fontWeight='500' fontSize='1.1rem' >
                    {text}
                </Heading>
            </Box>
        </Link>
    )
}

export const SecondaryButton = ({text}) => {
    return(
        <Link to='docs/intro' style={{ textDecoration: 'none' }} >
            <Box 
                w='auto' 
                h='auto' 
                p='1rem 1.25rem' 
                bg='#ebedf0' 
                borderRadius='6px' 
                boxShadow='2xl' 
                cursor='pointer' 
                color='#1c1e21'
                _hover={{
                    bg: '#d4d5d8'
                }} >
                <Heading m='0px' fontWeight='500' fontSize='1.1rem'>
                    {text}
                </Heading>
            </Box>
        </Link>
    )
}