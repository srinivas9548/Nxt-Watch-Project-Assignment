import styled from 'styled-components'

export const NavigationAndTrendingContainer = styled.div`
  display: flex;
`
export const TrendingComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  height: 120vh;
`

export const TrendingTopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  padding: 10px 20px;
  color: ${props => (props.theme === true ? null : '#ffffff')};
`

export const TrendingLogo = styled.p`
  background-color: #e2e8f0;
  font-size: 50px;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
  color: #ff0000;
  background-color: ${props => (props.theme === true ? '#e2e8f0' : '#000000')};
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.value === true ? '#1e293b' : '#f9f9f9')};
  margin-left: 8px;
`

export const TrendingVideoContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-top: 10px;
  }
`

export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const LoaderComponent = styled.div`
  display: flex;
`
