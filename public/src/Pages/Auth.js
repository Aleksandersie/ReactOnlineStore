import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../routeConsts/routeConsts";
import {registration,login} from "../axios/user";
import {observer} from "mobx-react-lite";
import data from "bootstrap/js/src/dom/data";
import {Context} from "../index";


const Auth = observer( () => {
    const location = useLocation()
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const isLoginPage = location.pathname===LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function signIn(){
        let userData
        try {
            if(isLoginPage){
                userData = await login(email,password)

            }else{
                userData = await registration(email,password)

            }
            user.setUser(userData)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
            console.log(userData)
        }catch (e){
            return alert(e.response.data.message)
        }


    }

    return (
        <div>
            <Container className="d-flex justify-content-center align-content-center" style={{marginTop:50}} >
                <Card className="p-5" style={{width:600, backgroundColor:"whitesmoke"}}>
                    <Form className='d-flex flex-column'>
                        <h3 className='m-auto' style={{textAlign:"center"}}>{
                            isLoginPage ?
                                'Авторизация'
                                :
                                'Регистрация'
                        }
                        </h3>

                        <Form.Control
                            className='mt-3'
                            placeholder='Введите email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Введите пароль'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />
                        <Button variant={"success"} className=' mt-3 '
                        onClick={signIn}
                        >{
                            isLoginPage?
                            'Войти'
                                :
                            'Регистрация'
                        }</Button>
                        {
                            isLoginPage?
                                <div className='m-auto mt-3'>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                                </div>
                                :
                                <div className='m-auto mt-3'>
                                    Eсть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                                </div>

                        }


                    </Form>
                </Card>
            </Container>

        </div>
    );
});

export default Auth;