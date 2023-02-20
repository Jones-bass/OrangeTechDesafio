import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import people from "../assets/people.jpg"

export function Layout({ children }: any) {
  return(
    <Box minHeight='100vh' backgroundImage={people} >
      <Header />
      { children }
    </Box>
  )
}
