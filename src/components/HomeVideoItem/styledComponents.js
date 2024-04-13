import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 47%;
    margin-bottom: 40px;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: auto;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ChannelLogoAndVideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ChannelLogoImage = styled.img`
  width: 10%;
  margin-top: 20px;
`
export const VideoTitleAndInformationContainer = styled.div`
  padding-left: 15px;
  margin: 0;
  padding-top: 0px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.value === true ? '#1e293b' : '#f1f1f1')};
  font-weight: 600;
  margin-bottom: 0;
  padding-bottom: 0;
`
export const VideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin: 0px;
`
export const VideoInformation = styled.div`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
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
export const ChannelViewsAndUpdatedTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  margin-top: 0px;
`
export const DotChangingScreens = styled.div`
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 30px;
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
  font-size: 30px;
  margin-bottom: 4px;
`
