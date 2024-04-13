import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-top: 20px;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoTitleAndInformationContainer = styled.div`
  padding-left: 15px;
  margin: 0px;
  @media screen and (min-width: 768px) {
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
  color: #475569;
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
