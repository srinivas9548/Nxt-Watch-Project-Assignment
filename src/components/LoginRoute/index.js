import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginFormContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  Label,
  InputField,
  CheckboxLabelContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPasswordStatus: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPasswordStatus: !prevState.showPasswordStatus,
    }))
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme, changedAttributesOnThemeChange} = value

          const {showPasswordStatus} = this.state

          const passwordType = showPasswordStatus ? 'text' : 'password'

          const {watchLogoImage} = changedAttributesOnThemeChange()

          return (
            <LoginFormContainer value={lightTheme}>
              <FormContainer value={lightTheme} onSubmit={this.onSubmitForm}>
                <LogoImage src={watchLogoImage} alt="website logo" />

                <InputContainer>
                  <Label value={lightTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputField
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>

                <InputContainer>
                  <Label value={lightTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputField
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>

                <CheckboxLabelContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckboxLabel value={lightTheme} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </CheckboxLabelContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
