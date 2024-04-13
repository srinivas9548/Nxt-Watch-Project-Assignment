import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LinkContainer,
  ListItem,
  ThumbnailImage,
  ChannelLogoAndVideoDetails,
  ChannelLogoImage,
  VideoTitleAndInformationContainer,
  VideoTitle,
  VideoInformation,
  ChannelTitle,
  ChannelViewsAndUpdatedTimeContainer,
  DotChangingScreens,
  ChannelViewsAndUpdatedTime,
  Dot,
} from './styledComponents'

const HomeVideoItem = props => {
  const {videoItemDetails} = props
  //   console.log(videoItemDetails)
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
  } = videoItemDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <ListItem>
            <LinkContainer as={Link} to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ChannelLogoAndVideoDetails>
                <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
                <VideoTitleAndInformationContainer>
                  <VideoTitle value={lightTheme}>{title}</VideoTitle>
                  <VideoInformation>
                    <ChannelTitle>{name}</ChannelTitle>
                    <ChannelViewsAndUpdatedTimeContainer>
                      <DotChangingScreens as={BsDot} />

                      <ChannelViewsAndUpdatedTime>
                        {viewCount} views
                      </ChannelViewsAndUpdatedTime>
                      <Dot as={BsDot} />
                      <ChannelViewsAndUpdatedTime>
                        {formatDistanceToNow(new Date(publishedAt), {
                          addSuffix: true,
                        })
                          .split(' ')
                          .slice(1, 4)
                          .join(' ')}
                      </ChannelViewsAndUpdatedTime>
                    </ChannelViewsAndUpdatedTimeContainer>
                  </VideoInformation>
                </VideoTitleAndInformationContainer>
              </ChannelLogoAndVideoDetails>
            </LinkContainer>
          </ListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoItem
