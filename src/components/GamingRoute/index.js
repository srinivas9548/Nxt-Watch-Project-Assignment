import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'
import FailureView from '../FailureView'

import {
  NavigationAndGamingContainer,
  GamingComponentContainer,
  GamingTopHeaderContainer,
  GamingLogo,
  GamingHeading,
  GamingVideoContainer,
  LoaderViewContainer,
  LoaderComponent,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingVideosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachGame => ({
        id: eachGame.id,
        thumbnailUrl: eachGame.thumbnail_url,
        title: eachGame.title,
        viewCount: eachGame.view_count,
      }))
      this.setState({
        gamingVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingRouteSuccessView = lightTheme => {
    const {gamingVideosData} = this.state
    // console.log(gamingVideosData)

    return (
      <>
        <GamingTopHeaderContainer theme={lightTheme}>
          <GamingLogo as={SiYoutubegaming} theme={lightTheme} />
          <GamingHeading value={lightTheme}>Gaming</GamingHeading>
        </GamingTopHeaderContainer>

        <GamingVideoContainer theme={lightTheme} data-testid="gaming">
          {gamingVideosData.map(eachItem => (
            <GamingVideoItem key={eachItem.id} gamingVideoDetails={eachItem} />
          ))}
        </GamingVideoContainer>
      </>
    )
  }

  renderGamingRouteFailureView = () => (
    <FailureView onRetry={this.getGamingData} />
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

  renderGamingRoute = lightTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingRouteSuccessView(lightTheme)
      case apiStatusConstants.failure:
        return this.renderGamingRouteFailureView()
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

        <NavigationAndGamingContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <GamingComponentContainer>
                  {this.renderGamingRoute(lightTheme)}
                </GamingComponentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationAndGamingContainer>
      </>
    )
  }
}

export default GamingRoute
