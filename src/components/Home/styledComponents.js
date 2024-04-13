import styled from 'styled-components'

export const NavigationSidebarAndHomeContainer = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  height: 120vh;
  overflow-y: scroll;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#181818')};
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin: 0px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  min-height: 230px;
`
export const BannerContentsContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const BannerNxtWatchLogo = styled.img`
  width: 30%;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 40px;
`
export const GetItNowBannerButton = styled.button`
  background-color: transparent;
  padding: 8px;
  border: 1px solid #00306e;
  font-family: 'Roboto';
  color: #00306e;
  font-weight: bold;
  outline: orange;
  cursor: pointer;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  font-size: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const HomeContent = styled.div`
  padding: 0px;
  padding-top: 16px;
  flex-grow: 1;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`

export const SearchFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 70%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`

export const SearchInputField = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === true ? '#313131' : '#f4f4f4')};
  width: 80%;
  height: 35px;
  border: 1px solid #909090;
  background-color: transparent;
  outline: none;
  padding: 10px;
`
export const SearchButton = styled.button`
  width: 60px;
  height: 35px;
  background-color: ${props => (props.theme === true ? '#f4f4f4' : '#424242')};
  border: 1px solid #909090;
  color: ${props => (props.theme === true ? null : '#909090')};
  outline: none;
  cursor: pointer;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 80px;
`

export const NoSearchResultsImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
`

export const NoSearchResultsText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.value === true ? null : '#ffffff')};
  margin-bottom: 0px;
`

export const TryDifferentText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
  font-weight: 500;
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
export const VideoListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const LoaderComponent = styled.div`
  display: flex;
`
