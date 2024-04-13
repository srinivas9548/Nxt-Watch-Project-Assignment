import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationAndSavedVideosContainer = styled.div`
  display: flex;
`

export const SavedVideosComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  height: 120vh;
`

export const NoSavedResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 140px;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#0f0f0f')};
  height: 120vh;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const NoSavedResultsImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.value === true ? '#1e293b' : '#f1f5f9')};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.value === true ? '#475569' : '#e2e8f0')};
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const SavedTopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.value === true ? '#f1f1f1' : '#181818')};
  padding: 10px 20px;
  color: ${props => (props.value === true ? null : '#ffffff')};
`
export const SavedLogo = styled.p`
  background-color: #e2e8f0;
  font-size: 50px;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
  color: #ff0000;
  background-color: ${props => (props.value === true ? '#e2e8f0' : '#000000')};
`
export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.value === true ? '#1e293b' : '#f9f9f9')};
  margin-left: 8px;
`

export const SavedVideoContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#0f0f0f')};
  margin: 0;
  overflow-y: scroll;
  height: 120vh;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-top: 10px;
  }
`
export const SavedListItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    margin-bottom: 30px;
  }
`
export const LinkContainer = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const SavedThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding-top: 20px;
    max-height: 350px;
  }
`
export const ChannelLogoAndVideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`
export const ChannelLogoImage = styled.img`
  width: 10%;
  margin-left: 10px;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoTitleAndInformationContainer = styled.div`
  padding-left: 15px;
  margin: 0;
  @media screen and (min-width: 576px) {
    margin-top: 8px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.value === true ? '#1e293b' : '#ffffff')};
  font-weight: 600;
  margin-bottom: 5px;
  padding-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoInformation = styled.div`
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
    font-size: 14px;
  }
`
export const ChannelTitle = styled.p`
  padding-top: 4px;
  padding-right: 5px;
  padding-bottom: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    width: 100%;
    padding-bottom: 0px;
  }
`
export const ChannelViewAndUpdatedTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  margin-top: 0px;
`
export const DotChangingScreens = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 25px;
  margin-bottom: 4px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelViewsAndUpdatedTime = styled.p`
  margin-top: 0px;
  padding-top: 5px;
  padding-right: 5px;
`
export const Dot = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 25px;
  margin-bottom: 4px;
`
