import React, {useCallback, useEffect, useState} from "react";
import {
    FormContainer,
    FormInput, FormItemName,
    FormSubmitButton, FormTextAlert, FormTextAlertPadding,
    FormTilteP,
    FormTitleDiv,
    LoginContainer,
    MainContainer,
    Success,
    Error
} from "./style";
import useInput from "../../hooks/useInput";
import axios from "axios";

const Signup = () => {
    const [name, onChangeName] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password_check, onChangePasswordCheck] = useInput('');

    const [mismatchError, setMismatchError] = useState(true);
    const [mismatchEmailError, setEmailMismatchError] = useState(true);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    useEffect(() => {
        if (password === password_check) {
            setMismatchError(false);
        } else {
            setMismatchError(true);
        }

        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(email)) {
            console.log("a?");
            setEmailMismatchError(false);
        }else {
            setEmailMismatchError(true);
        }
    }, [email, password, password_check, setMismatchError, setEmailMismatchError]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (!mismatchError) {
            console.log("회원가입 하기");
            setMismatchError(true);
            axios.post('http://localhost:1010/auth/signup', {
                email,
                name,
                password,
            })
                .then((response) => {
                    console.log(response);
                    setSignUpSuccess(true);
                })
                .catch((error) => {
                    console.log(error.response);
                })
        }
    }, [password, password_check, mismatchError]);

    return (
        <MainContainer>
            <LoginContainer>
                <FormContainer>
                    <form onSubmit={onSubmit}>
                        <FormTitleDiv>
                            <FormTilteP>Register With Us</FormTilteP>
                        </FormTitleDiv>
                        <div>
                            <div>
                                <FormItemName>username</FormItemName>
                            </div>
                            <div>
                                <FormInput type="text" placeholder="name" onChange={onChangeName}/>
                            </div>
                            {!name && <Error>*이름을 입력해주세요.</Error>}
                            <FormTextAlertPadding>
                                <FormTextAlert id="alert_username" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        <div>
                            <div>
                                <FormItemName>Email</FormItemName>
                            </div>
                            <div>
                                <FormInput type="email" placeholder="E-mail" onChange={onChangeEmail}/>
                            </div>
                            {!email && <Error>*이메일을 입력해주세요.</Error>}
                            {mismatchEmailError && <Error>*이메일 형식을 맞춰주세요.</Error>}
                            <FormTextAlertPadding>
                                <FormTextAlert id="alert_email" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        <div>
                            <div>
                                <FormItemName>Password</FormItemName>
                            </div>
                            <div>
                                <FormInput type="password" placeholder="Enter password" onChange={onChangePassword}/>
                            </div>
                            <FormTextAlertPadding>
                                <FormTextAlert id="alert_password" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        <div>
                            <div>
                                <FormItemName>Confirm Password</FormItemName>
                            </div>
                            <div>
                                <FormInput type="password" name="password2" placeholder="Enter password again" onChange={onChangePasswordCheck}/>
                            </div>
                            <FormTextAlertPadding className="form_text_alert_padding">
                                <FormTextAlert id="alert_password2" className="form_text_alert"/>
                            </FormTextAlertPadding>
                        </div>
                        {mismatchError && <Error>*비밀번호가 일치하지 않습니다.</Error>}
                        {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
                        <div>
                            <FormSubmitButton type="submit" >Sign up</FormSubmitButton>
                        </div>
                    </form>
                </FormContainer>
            </LoginContainer>
        </MainContainer>
    );
};

export default Signup;
