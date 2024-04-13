import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsComponentContainer,
  TrendingVideoAndDetailsContainer,
  EachVideoThumbnailImage,
  VideoTitle,
  VideoDetailsContainer,
  ViewsAndUpdatedTimeContainer,
  ChannelViewsAndUpdatedTime,
  ButtonsContainer,
  CustomizeButton,
  ButtonText,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelLogoImage,
  ChannelTitle,
  ChannelSubscriber,
  ChannelDescription,
  LoaderViewContainer,
  LoaderComponent,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoItemDetailsApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        description: data.video_details.description,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemDetailsSuccessView = lightTheme => {
    const {videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetails
    return (
      <TrendingVideoAndDetailsContainer>
        <EachVideoThumbnailImage
          as={ReactPlayer}
          url={videoUrl}
          controls
          width="100%"
          height="60vh"
        />

        <VideoTitle value={lightTheme}>{title}</VideoTitle>
        <VideoDetailsContainer>
          <ViewsAndUpdatedTimeContainer>
            <ChannelViewsAndUpdatedTime>
              {viewCount} views
            </ChannelViewsAndUpdatedTime>
            <BsDot size={25} />
            <ChannelViewsAndUpdatedTime>
              {formatDistanceToNow(new Date(publishedAt), {
                addSuffix: true,
              })
                .split(' ')
                .slice(1, 4)
                .join(' ')}
            </ChannelViewsAndUpdatedTime>
          </ViewsAndUpdatedTimeContainer>
          <NxtWatchContext.Consumer>
            {value => {
              const {
                likedList,
                dislikedList,
                savedList,
                addAsLikedVideos,
                addAsDisLikedVideos,
                addOrRemoveAsOrSavedVideos,
              } = value

              const {match} = this.props
              const {params} = match
              const {id} = params

              const onClickLikeBtn = () => {
                addAsLikedVideos(id)
              }

              const onClickDisLikeBtn = () => {
                addAsDisLikedVideos(id)
              }

              const onClickSaveOrUnSaveBtn = () => {
                addOrRemoveAsOrSavedVideos(videoDetails)
              }

              const savedListIds = savedList.map(each => each.id)
              const saveButtonText = savedListIds.includes(id)
                ? 'Saved'
                : 'Save'

              return (
                <ButtonsContainer>
                  <CustomizeButton
                    type="button"
                    onClick={onClickLikeBtn}
                    value={likedList.includes(id)}
                  >
                    <BiLike size={18} />
                    <ButtonText>Like</ButtonText>
                  </CustomizeButton>

                  <CustomizeButton
                    type="button"
                    onClick={onClickDisLikeBtn}
                    value={dislikedList.includes(id)}
                  >
                    <BiDislike size={18} />
                    <ButtonText>Dislike</ButtonText>
                  </CustomizeButton>

                  <CustomizeButton
                    type="button"
                    onClick={onClickSaveOrUnSaveBtn}
                    value={savedListIds.includes(id)}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{saveButtonText}</ButtonText>
                  </CustomizeButton>
                </ButtonsContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </VideoDetailsContainer>
        <HorizontalLine />
        <ChannelDetailsContainer>
          <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
          <div>
            <ChannelTitle value={lightTheme}>{name}</ChannelTitle>
            <ChannelSubscriber>{subscriberCount} subscribers</ChannelSubscriber>
            <ChannelDescription>{description}</ChannelDescription>
          </div>
        </ChannelDetailsContainer>
      </TrendingVideoAndDetailsContainer>
    )
  }

  renderVideoItemDetailsFailureView = () => (
    <FailureView onRetry={this.getVideoItemData} />
  )

  renderLoadingView = () => (
    <LoaderViewContainer data-testid="loader">
      <LoaderComponent
        as={Loader}
        type="ThreeDots"
        color="#4f46e5"
        height="50"
        width="50"
      />
    </LoaderViewContainer>
  )

  renderVideoItemDetails = lightTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView(lightTheme)
      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <VideoItemDetailsComponentContainer
                  data-testid="videoItemDetails"
                  value={lightTheme}
                >
                  {this.renderVideoItemDetails(lightTheme)}
                </VideoItemDetailsComponentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetailsRoute
