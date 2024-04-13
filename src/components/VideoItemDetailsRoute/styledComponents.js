import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsComponentContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    height: 120vh;
    overflow-y: scroll;
  }
`

export const TrendingVideoAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
    align-items: flex-start;
  }
`
export const EachVideoThumbnailImage = styled.img`
  width: 100%;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.value === true ? '#000000' : '#ffffff')};
  font-weight: 500;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsAndUpdatedTimeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #475569;
  font-weight: 500;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const ChannelViewsAndUpdatedTime = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 0px;
  margin: 0px;
`
export const CustomizeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.value === true ? '#2563eb' : '#64748b')};
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bolder;
  margin-right: 16px;
  padding: 0;
`
export const ButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 5px;
`
export const HorizontalLine = styled.hr`
  border: 1px solid #cccccc;
  background-color: #cccccc;
  width: 100%;
  margin-top: 10px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelLogoImage = styled.img`
  width: 50px;
  margin-top: 14px;
  margin-right: 16px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    width: 60px;
  }
`
export const ChannelTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.value === true ? '#181818' : ' #f8fafc')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ChannelSubscriber = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  line-height: 1.2;
  padding-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  line-height: 1.2;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
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
