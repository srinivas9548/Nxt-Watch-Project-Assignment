import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  height: 70vh;
  padding: 20px;
`
export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
    margin-top: 40px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.value === true ? '#1e293b' : '#f9f9f9')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 10px;
  }
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  background-color: #4f46e5;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
