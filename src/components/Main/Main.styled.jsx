import styled from "styled-components"
import img from '../Imgs/mainimg.jpg'
import logimg from '../Imgs/로그인메인.avif'
import sigimg from '../Imgs/메인회원가입환영.avif'


export const Loginbox = styled.div`
    background-image: url(${logimg});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    margin: 20px;
    border-radius: 5px;
`
export const Loginlink = styled.span`
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    font-size: 20px;
    font-size: 30px;
    font-weight: 600;
    color: black;
    border: 2px solid;
`
export const Signupbox = styled.div`
    background-image: url(${sigimg});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    margin: 20px;
    border-radius: 5px;
    `
export const  Signuplink = styled.span`
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    border: 2px solid;
`

export const BodyBack =styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const Bodylog=styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    `
export const Bodysig=styled.div`
    width: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    `
