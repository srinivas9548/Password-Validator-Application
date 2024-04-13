import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PasswordValidatorCard = styled.div`
  background-color: #383a4e;
  width: 320px;
  height: 320px;
  border-radius: 12px;
  box-shadow: 0px 1px 1px #434451;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 340px;
  }
`
export const PasswordValidatorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const PasswordValidatorNote = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f8fafc;
  line-height: 1.2;
  margin: 0;
  width: 80%;
`
export const PasswordValidatorInput = styled.input`
  font-family: 'Roboto';
  font-size: 18px;
  background-color: #edeeff;
  width: 80%;
  height: 40px;
  padding-left: 12px;
  margin-top: 50px;
  border: none;
  outline: none;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ef4444;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
