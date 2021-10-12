import { Button, Link, Flex } from '@chakra-ui/react'

import { HiOutlineLogout } from 'react-icons/hi'

import { useAuthContext } from 'context/Auth'
/* import { DarkModeSwitch } from '../DarkModeSwitch' */

import { handleLogout } from 'libs/supabase'

export function Header() {
  const { isLoading, isLogin } = useAuthContext()

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      as="header"
      zIndex="3"
      bg="gray.700"
    >
      <Link
        href={'/'}
        name="Beranda"
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Image src="/images/orange/ksana.png" alt="Home" w="60px" h="60px" />
      </Link>

      <Flex justifyContent="space-between" alignItems="center">
        {!isLoading && isLogin && (
          <Button
            px={6}
            color={'white'}
            bg="red.500"
            _hover={{
              bg: 'red.700'
            }}
            mr="2"
            onClick={handleLogout}
            leftIcon={<HiOutlineLogout />}
          >
            Keluar
          </Button>
        )}
        {/* <DarkModeSwitch /> */}
      </Flex>
    </Flex>
  )
}
