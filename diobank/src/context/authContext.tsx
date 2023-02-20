import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

interface IDIoBank {
  login: boolean;
}

interface IAuthContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    userLogin: {(email: string): Promise<boolean>}
    changeLocalStorage: (dioBank: IDIoBank) => void
    createLocalStorage: () => void 
    getAllLocalStorage: () => void
}
  
export const AuthContext = createContext({} as IAuthContext)

  
export const AuthContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

    const dioBank = {
      login: false
  }

  
  const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])

    const user = 'jonesbass'

    const userLogin = async (email: string): Promise<boolean> => {
      const data: any = await api
  
      if(email !== data.email) {
          return false
      }
  
      return true
  }



const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}


    return (
      <AuthContext.Provider value={{ user,  userLogin, getAllLocalStorage, createLocalStorage, changeLocalStorage, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AuthContext.Provider>
    )
}
