/* import Image from 'next/image' */
import {
 /*  Container,
  Heading,
  Text,
  Button,
  SimpleGrid, */
  Box,
  /* VStack, */
  /* useColorModeValue */
} from '@chakra-ui/react'
/* import { HiPlay } from 'react-icons/hi' */

/* import { login } from 'constants/paths' */
import { useEffect } from "react";
import Router from 'next/router'

export function Hero() {
  /* const textColor = useColorModeValue('gray.500', 'gray.300') */
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/auth/sign-in')
    }
  });

  return (
    <Box w={'full'} marginBottom={5}>
      
      {/* <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Container maxW={'6xl'} as="section" mt="32">
          <VStack spacing={{ base: 8, md: 10 }} px={{ base: 8, md: 10 }}>
            <Heading
              as="h2"
              textAlign="center"
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              <Text>
              Massa Bumi 2021 URL Shortener
              </Text>
            </Heading>

            <Text
              as="span"
              textAlign="center"
              color={textColor}
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
              lineHeight={'110%'}
            >
              URL Shortener based on Ksana.in
            </Text>

            <Button
              size="lg"
              rounded="full"
              px={6}
              color={'white'}
              bg="gray.800"
              _hover={{
                bg: 'gray.500'
              }}
              as={'a'}
              href={login}
              leftIcon={<HiPlay />}
            >
              Coba sekarang
            </Button>
          </VStack>
        </Container>

        <Flex as="section" mt={{ base: 0, md: 20 }} justifyContent="center">
          <Image
            width={400}
            height={400}
            src={'/images/illustrations/ill_by_manypixels.svg'}
            alt="Women with Internet"
            priority={true}
          />
        </Flex>
      </SimpleGrid> */}
    </Box>
  )
}
