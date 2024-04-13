import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'
import HomeVideoItem from '../HomeVideoItem'
import FailureView from '../FailureView'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NavigationSidebarAndHomeContainer,
  HomeContainer,
  BannerContainer,
  BannerContentsContainer,
  BannerNxtWatchLogo,
  BannerText,
  GetItNowBannerButton,
  BannerCloseButton,
  HomeContent,
  SearchFieldContainer,
  SearchInputField,
  SearchButton,
  NoVideosContainer,
  NoSearchResultsImage,
  NoSearchResultsText,
  TryDifferentText,
  RetryButton,
  VideoListContainer,
  LoaderViewContainer,
  LoaderComponent,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosData: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
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
      //   console.log(updatedData)
      this.setState({
        homeVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  renderVideosSuccessView = () => {
    const {homeVideosData} = this.state
    const result = Object.keys(homeVideosData)

    return result.length > 0 ? (
      <VideoListContainer>
        {homeVideosData.map(eachVideo => (
          <HomeVideoItem key={eachVideo.id} videoItemDetails={eachVideo} />
        ))}
      </VideoListContainer>
    ) : (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <NoVideosContainer>
              <NoSearchResultsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoSearchResultsText value={lightTheme}>
                No Search results found
              </NoSearchResultsText>
              <TryDifferentText>
                Try different key words or remove search filter
              </TryDifferentText>
              <RetryButton type="button" onClick={this.onRetry}>
                Retry
              </RetryButton>
            </NoVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

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

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <>
        <Header />
        <NavigationSidebarAndHomeContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <HomeContainer data-testid="home" value={lightTheme}>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerContentsContainer>
                        <BannerNxtWatchLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <GetItNowBannerButton type="button">
                          GET IT NOW
                        </GetItNowBannerButton>
                      </BannerContentsContainer>
                      <div>
                        <BannerCloseButton
                          type="button"
                          data-testid="close"
                          onClick={this.onClickCloseBanner}
                        >
                          <GrFormClose />
                        </BannerCloseButton>
                      </div>
                    </BannerContainer>
                  )}
                  <HomeContent>
                    <SearchFieldContainer>
                      <SearchInputField
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        theme={lightTheme}
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        theme={lightTheme}
                        onClick={this.getVideosData}
                        data-testid="searchButton"
                      >
                        <BsSearch size={15} />
                      </SearchButton>
                    </SearchFieldContainer>
                    {this.renderHomeVideos()}
                  </HomeContent>
                </HomeContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationSidebarAndHomeContainer>
      </>
    )
  }
}

export default Home
