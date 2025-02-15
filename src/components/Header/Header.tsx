import { Link, Flex, Button, Image } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { HiDownload, HiOutlineLogin } from 'react-icons/hi'

import { sendEvent } from 'libs/splitbee'
/* import { DarkModeSwitch } from '../DarkModeSwitch' */

interface UserChoice {
  outcome: 'accepted' | 'dismissed'
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void
  userChoice: Promise<UserChoice>
}

export function Header() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isShowInstallBtn, setShowInstallBtn] = useState<boolean>(false)
  const deferredPrompt = useRef<any | null>(null)

  const handler = (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPrompt.current = e as BeforeInstallPromptEvent
    // Update UI notify the user they can install the PWA
    setShowInstallBtn(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !isShowInstallBtn) {
      window.addEventListener('beforeinstallprompt', handler)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [isShowInstallBtn])

  const handleClick = async () => {
    setLoading(true)
    sendEvent('Install A2HS')
    // Show the install prompt
    deferredPrompt.current.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.current.userChoice
    // Optionally, send analytics event with outcome of user choice
    // eslint-disable-next-line no-console
    console.info(`User response to the install prompt: ${outcome}`)
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt.current = null
    // manual delay the process
    setTimeout(() => {
      setLoading(false)
      // Hide the app provided install promotion
      setShowInstallBtn(false)
    }, 1000)
  }

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
        {isShowInstallBtn ? (
          <Button
            px={6}
            color={'white'}
            bg="green.400"
            _hover={{
              bg: 'green.500'
            }}
            mr="2"
            onClick={handleClick}
            isLoading={isLoading}
            leftIcon={<HiDownload />}
          >
            Install
          </Button>
        ) : null}
          <Button
            px={6}
            color={'white'}
            bg="gray.600"
            _hover={{
              bg: 'gray.500'
            }}
            mr="2"
            leftIcon={<HiOutlineLogin />}
          >
            Login
          </Button>
        {/* <DarkModeSwitch /> */}
      </Flex>
    </Flex>
  )
}
