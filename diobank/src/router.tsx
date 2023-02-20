
import { Route, Routes } from "react-router-dom"
import { AccountInfo } from "./pages/AccountInfo"
import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { useAuth } from "./hooks/useAuth"

export function Router () {
    const { isLoggedIn } = useAuth()

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={ isLoggedIn ? <Account /> : <Home/> } />
            <Route path='/infoconta' element={<AccountInfo />} />
        </Routes>
    )
}

