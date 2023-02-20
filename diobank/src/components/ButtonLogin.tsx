import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface ButtonProps {
    onClick: MouseEventHandler
}

export function ButtonLogin({ onClick }: ButtonProps)  {
    return(
        <Button
          onClick={onClick}
          colorScheme="teal"
          size="sm"
          width="100%"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}


