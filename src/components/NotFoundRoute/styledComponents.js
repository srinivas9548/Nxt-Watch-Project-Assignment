import styled from 'styled-components'

export const NavigationAndNotFoundContainer = styled.div`
  display: flex;
`
export const NotFoundComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 90vh;
  padding: 20px;
  background-color: ${props => (props.value === true ? '#f4f4f4' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    height: 120vh;
    justify-content: flex-start;
    padding-top: 80px;
  }
`
export const NotFoundImage = styled.img`
  width: 250px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.value === true ? '#1e293b' : '#f9f9f9')};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.value === true ? '#475569' : '#94a3b8')};
  margin: 0;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
