import styled from "styled-components";
import img from '../Imgs/welcome.png'

export const Sig = styled.div`
    width: 100%;
    height: 100vh;
    background-color:  #efe8fb;
    display: flex;
    justify-content: center;
    align-items: center;
    .top {
        width: 100%;
        display: flex;
    }

`

export const Box= styled.div` 
    width: 50%;
    height: 600px;
    display: flex;
    align-items: center;
    background-color: #fefdfc;
    border-radius: 10px;
    justify-content: space-around;
`

export const Imgbox = styled.div`
    width: 50%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 66px;
    font-weight: 700;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fefdfc;
    letter-spacing: 3px;
    font-family:sans-serif;
    background-image: url(${img});
`
export const Sigbox = styled.div`
    width: 50%;
    height: 600px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const In = styled.div`
    width: 60%;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Wrait = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Signup = styled.div`
        margin-top: 20px;
        font-size: 30px;
        font-weight: 700;
        font-family:sans-serif;
`
export const Welcome = styled.div`
        font-size: 14px;
        opacity: 0.5;
        font-family:sans-serif;
        margin-top: 15px;
`
export const Sigpass = styled.div`
    width: 60%;
    height: 400px;
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    width: 100%;
    opacity: 0.9;
    height: 30px;
    border-radius: 5px;
    border: 1px solid#b8bdbf;
`

export const Label = styled.label`
    font-size: 12px;
    opacity: 0.5;
    font-family:sans-serif;
`

export const Button = styled.button`
margin-top: 30px;
    height: 45px;
    border-radius: 5px;
    background-color: #ff71d9;
    color: #ffffff;
    border: none;
`
export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `

export const Foot = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
`
export const Footname = styled.div`
        opacity: 0.5;
`
export const Logbutton = styled.div`
        color: #9414fd;
        margin-left: 7px;
`
