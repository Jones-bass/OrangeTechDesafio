import { Box, Center, Input, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { ButtonLogin } from "../components/ButtonLogin";
import { useAuth } from "../hooks/useAuth";


export function Home() {
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn, userLogin, changeLocalStorage} = useAuth()
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await userLogin(email)

        if (!loggedIn) {
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return (


        <Flex padding={4} width="100%" justifyContent="space-between" display="flex" marginTop={100}>
            <Box padding={5} width="50%" >
                <Text color="white" fontSize={40} fontWeight="bold">
                    <h1>A conta que vai levar você ao controle da sua vida financeira.</h1>
                </Text>
                <Text color="white" fontSize={20}>
                    <p>Escolha o futuro. Que Comece a controlar melhor sua vida financeira. DIOBANK a sua melhor opção!</p>
                </Text>
            </Box>

            <Box >
                <Card>
                    <Text textAlign="center" padding={5} fontSize={24} fontWeight="bold">
                        <h1>Login</h1>
                    </Text>
                    <Input focusBorderColor='#FF1E76' variant='flushed' type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input focusBorderColor='#FF1E76' variant='flushed' type="password" placeholder="Senha" />
                    <Center>
                        <ButtonLogin
                            onClick={() => validateUser(email)}
                        />
                    </Center>
                </Card>
            </Box>
        </Flex>

    );
}
