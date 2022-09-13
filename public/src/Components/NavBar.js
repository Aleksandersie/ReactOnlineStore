import React, { useContext } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {
   ADMIN_ROUTE,
   BASKET_ROUTE,
   LOGIN_ROUTE,
   SHOP_ROUTE,
} from "../routeConsts/routeConsts"
import "./style.css"
import { Context } from "../index"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
const NavBar = observer(() => {
   const { user } = useContext(Context)
   const navigate = useNavigate()

   function logOut() {
      user.setUser({})
      user.setIsAuth(false)
   }
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink to={SHOP_ROUTE} className="navBar text-decoration-none ">
               MY:STORE
            </NavLink>
            {user.isAuth ? (
               <Nav className="ml-auto">
                  <Button
                     variant={"outline-light"}
                     className="button me-2"
                     onClick={() => navigate(BASKET_ROUTE)}
                  >
                     Корзина
                  </Button>
                  <Button
                     variant={"outline-light"}
                     className="button me-2"
                     onClick={() => navigate(ADMIN_ROUTE)}
                  >
                     Панель управления
                  </Button>
                  <Button
                     variant={"outline-light"}
                     className="button "
                     onClick={() => logOut()}
                  >
                     Выйти
                  </Button>
               </Nav>
            ) : (
               <Nav className="ml-auto">
                  <Button
                     variant={"outline-light"}
                     className="button "
                     onClick={() => navigate(LOGIN_ROUTE)}
                  >
                     Авторизация
                  </Button>
               </Nav>
            )}
         </Container>
      </Navbar>
   )
})

export default NavBar
