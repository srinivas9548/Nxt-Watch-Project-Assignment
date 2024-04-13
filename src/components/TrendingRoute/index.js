import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  NavigationAndTrendingContainer,
  TrendingComponentContainer,
  LoaderViewContainer,
  LoaderComponent,
  TrendingTopHeaderContainer,
  TrendingLogo,
  TrendingHeading,
  TrendingVideoContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosData: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingData()
  }

  renderTrendingRouteSuccessView = lightTheme => {
    const {trendingVideosData} = this.state
    // console.log(trendingVideosData)

    return (
      <>
        <TrendingTopHeaderContainer theme={lightTheme}>
          <TrendingLogo as={HiFire} theme={lightTheme} />
          <TrendingHeading value={lightTheme}>Trending</TrendingHeading>
        </TrendingTopHeaderContainer>

        <TrendingVideoContainer theme={lightTheme} data-testid="trending">
          {trendingVideosData.map(eachItem => (
            <TrendingVideoItem
              key={eachItem.id}
              trendingVideoDetails={eachItem}
            />
          ))}
        </TrendingVideoContainer>
      </>
    )
  }

  renderTrendingFailureView = () => <FailureView onRetry={this.onRetry} />

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

  renderTrendingRoute = lightTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingRouteSuccessView(lightTheme)
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
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
        <NavigationAndTrendingContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <TrendingComponentContainer>
                  {this.renderTrendingRoute(lightTheme)}
                </TrendingComponentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationAndTrendingContainer>
      </>
    )
  }
}

export default TrendingRoute
