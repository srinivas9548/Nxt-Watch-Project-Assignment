import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LinkContainer,
  TrendingListItem,
  TrendingThumbnailImage,
  ChannelLogoAndVideoDetails,
  ChannelLogoImage,
  VideoTitleAndInformationContainer,
  VideoTitle,
  VideoInformation,
  ChannelTitle,
  ChannelViewAndUpdatedTimeContainer,
  DotChangingScreens,
  ChannelViewsAndUpdatedTime,
  Dot,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {trendingVideoDetails} = props
  //   console.log(trendingVideoDetails)
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
  } = trendingVideoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LinkContainer as={Link} to={`/videos/${id}`}>
            <TrendingListItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <ChannelLogoAndVideoDetails>
                <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
                <VideoTitleAndInformationContainer>
                  <VideoTitle value={lightTheme}>{title}</VideoTitle>
                  <VideoInformation>
                    <ChannelTitle>{name}</ChannelTitle>
                    <ChannelViewAndUpdatedTimeContainer>
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
                    </ChannelViewAndUpdatedTimeContainer>
                  </VideoInformation>
                </VideoTitleAndInformationContainer>
              </ChannelLogoAndVideoDetails>
            </TrendingListItem>
          </LinkContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
