import React, {useCallback, useState} from "react";
import {
    Error,
    FormContainer,
    FormInput,
    FormItemName, FormSubmitButton, FormTextAlert,
    FormTextAlertPadding,
    FormTilteP,
    FormTitleDiv,
    LoginContainer, MainContainer, Success
} from "../style";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import useSWR from 'swr';
import fetcher from "../../../utils/fetcher";
import {Redirect} from "react-router-dom";

const Login = () => {
    const { data: userData, error, mutate } = useSWR('http://localhost:3050/api/users', fetcher, {
        dedupingInterval: 2000
    });

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [loginError, setLoginError] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("로그인 하기");
        axios.post('http://localhost:3050/api/users/login',
            { email, password },
            {withCredentials: true}
        )
            .then((response) => {
                mutate(response.data, false);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    console.log("error = ", error.response.statusText);
                    setLoginError(true);
                }
            })
    }, [email, password, mutate]);

    console.log('로그인됨??', userData, error);
    if (!error && userData) {
        console.log('로그인됨', userData);
        return <Redirect to="/main" />;
    }

    return (
        <MainContainer>
            <LoginContainer>
                <FormContainer>
                    <form onSubmit={onSubmit}>
                        <FormTitleDiv>
                            <FormTilteP>Login</FormTilteP>
                        </FormTitleDiv>
                        <div>
                            <div>
                                <FormItemName>Email</FormItemName>
                            </div>
                            <div>
                                <FormInput type="email" placeholder="E-mail" value={email} onChange={onChangeEmail}/>
                            </div>
                            <FormTextAlertPadding>
                                <FormTextAlert id="alert_email" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        <div>
                            <div>
                                <FormItemName>Password</FormItemName>
                            </div>
                            <div>
                                <FormInput type="password" placeholder="Enter password" value={password} onChange={onChangePassword}/>
                            </div>
                            <FormTextAlertPadding>
                                <FormTextAlert id="alert_password" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        <div>
                            <FormSubmitButton type="submit" >Login</FormSubmitButton>
                        </div>
                        {loginError && <Error>*이메일이나 비밀번호를 확인하세요.</Error>}
                        <div>
                            <a href="signup">Sign up</a>
                        </div>
                    </form>
                </FormContainer>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;