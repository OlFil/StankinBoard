import React, { useContext } from "react";
import { Context } from "../index.js";
import firebase from 'firebase/compat/app';




function  Login(){

    const{auth}=useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }
    return (
        <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-8 col-sm-4  col-xl-4">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-4 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Авторизация</h2>
                                        <p className="text-white-50 mb-5">Введите email и пароль</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="typePasswordX">Пароль</label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Забыли пароль?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Войти
                                        </button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">

                                    <a href="#!" className="text-white" onClick={login}><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Еще нет аккаунта? <a href="#!"
                                                                                      className="text-white-50 fw-bold">Зарегистрироваться</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}
export default Login;