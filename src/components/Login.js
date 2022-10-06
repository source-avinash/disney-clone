import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp> GET ALL THERE</SignUp>
                <Description>
                    Get Premium access to Raya and The Last Dragon for an additional fee with a Disney+ subscription as of 03/26/21, the price of Disney+ and Disney Bundel will increase by 1$.
                </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    align-items: top;
    justify-content: center;
    display: flex;

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 1;
        background-image: url("/images/login-background.jpg");
    }
`
const CTA = styled.div`
    max-width: 650px;
    align-items: center;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    //width: auto;

`
const CTALogoOne = styled.img`
    width: 100%;
`

const SignUp = styled.a`
    width:  100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    
    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 100%;
`