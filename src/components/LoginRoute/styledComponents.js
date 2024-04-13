import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.value === true ? null : '#181818')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  background-color: ${props => (props.value === true ? null : '#000000')};
  max-width: 330px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.36);
  @media screen and (min-width: 768px) {
    max-width: 400px;
    flex-shrink: 0;
    padding: 60px 48px 60px 48px;
  }
`
export const LogoImage = styled.img`
  width: 50%;
  margin-bottom: 20px;
  align-self: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.value === true ? '#475569' : '#cccccc')};
  font-weight: bold;
  line-height: 16px;
`
export const InputField = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  height: 40px;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid #d7dfe9;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const CheckboxLabelContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  width: 14px;
  height: 14px;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.value === true ? '#0f0f0f' : '#cccccc')};
  font-weight: 400;
  margin-top: 2px;
  margin-left: 4px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 2px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  align-self: flex-start;
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-top: 3px;
  margin-bottom: 0px;
  line-height: 16px;
`
