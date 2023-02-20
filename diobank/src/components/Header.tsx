import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'

import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/diobank.png'
import { BiExit  } from "react-icons/bi"
import { useAuth } from '../hooks/useAuth'


export function Header() {
  const { isLoggedIn, setIsLoggedIn, changeLocalStorage } = useAuth()
  const navigate = useNavigate()

  const handleLogoutExit = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='#FF1E76' padding='10px' >
      <Box padding={4} width="100%" height="80px" justifyContent="space-between" display="flex" >
        <Center width={75}>
          <Link to="/">
            <img src={logo} alt="Logo da dio" />
          </Link>
        
        </Center>
        {
          isLoggedIn ? (
            <>
            <Spacer />
            <Button leftIcon={<BiExit />} colorScheme='yellow' variant='solid'
            onClick={handleLogoutExit}
            
            >
              Sair
            </Button>
          </>
          ) : (
            
           
             <Center>
              <Text color="white" fontWeight="bold" fontSize='3xl'>Pra Você</Text>
            </Center>
            
          )
        }
      </Box>
    </Flex>

  )
}
