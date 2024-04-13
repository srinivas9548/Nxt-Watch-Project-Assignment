import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NavigationAndSavedVideosContainer,
  SavedVideosComponentContainer,
  NoSavedResultContainer,
  NoSavedResultsImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedTopHeaderContainer,
  SavedLogo,
  SavedVideosHeading,
  SavedVideoContainer,
  SavedListItem,
  LinkContainer,
  SavedThumbnailImage,
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

const SavedVideosRoute = () => (
  <>
    <Header />
    <NavigationAndSavedVideosContainer>
      <Sidebar />
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme, savedList} = value

          return (
            <SavedVideosComponentContainer>
              {savedList.length === 0 ? (
                <NoSavedResultContainer
                  data-testid="savedVideos"
                  value={lightTheme}
                >
                  <NoSavedResultsImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading value={lightTheme}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosDescription value={lightTheme}>
                    You can save your videos while watching them
                  </NoSavedVideosDescription>
                </NoSavedResultContainer>
              ) : (
                <>
                  <SavedTopHeaderContainer value={lightTheme}>
                    <SavedLogo as={HiFire} value={lightTheme} />
                    <SavedVideosHeading value={lightTheme}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedTopHeaderContainer>

                  <SavedVideoContainer value={lightTheme}>
                    {savedList.map(each => (
                      <SavedListItem key={each.id}>
                        <LinkContainer as={Link} to={`/videos/${each.id}`}>
                          <SavedThumbnailImage
                            src={each.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <ChannelLogoAndVideoDetails>
                            <ChannelLogoImage
                              src={each.profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoTitleAndInformationContainer>
                              <VideoTitle value={lightTheme}>
                                {each.title}
                              </VideoTitle>
                              <VideoInformation>
                                <ChannelTitle>{each.name}</ChannelTitle>
                                <ChannelViewAndUpdatedTimeContainer>
                                  <DotChangingScreens as={BsDot} />
                                  <ChannelViewsAndUpdatedTime>
                                    {each.viewCount} views
                                  </ChannelViewsAndUpdatedTime>
                                  <Dot as={BsDot} />
                                  <ChannelViewsAndUpdatedTime>
                                    {formatDistanceToNow(
                                      new Date(each.publishedAt),
                                      {
                                        addSuffix: true,
                                      },
                                    )
                                      .split(' ')
                                      .slice(1, 4)
                                      .join(' ')}
                                  </ChannelViewsAndUpdatedTime>
                                </ChannelViewAndUpdatedTimeContainer>
                              </VideoInformation>
                            </VideoTitleAndInformationContainer>
                          </ChannelLogoAndVideoDetails>
                        </LinkContainer>
                      </SavedListItem>
                    ))}
                  </SavedVideoContainer>
                </>
              )}
            </SavedVideosComponentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndSavedVideosContainer>
  </>
)

export default SavedVideosRoute
