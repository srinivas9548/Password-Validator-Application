import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordValidatorCard,
  PasswordValidatorHeading,
  PasswordValidatorNote,
  PasswordValidatorInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const errorMsg = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <PasswordValidatorContainer>
      <PasswordValidatorCard>
        <PasswordValidatorHeading>Password Validator</PasswordValidatorHeading>
        <PasswordValidatorNote>
          Check how strong and secure is your password
        </PasswordValidatorNote>
        <PasswordValidatorInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {errorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordValidatorCard>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
