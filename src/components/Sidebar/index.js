import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarMenuContainerWrapper,
  SidebarItemsContainer,
  SidebarItem,
  EachNavigationContainer,
  Icon,
  EachNavigationName,
  SidebarContactContainer,
  SidebarContactText,
  SidebarContactImages,
  SidebarContainerFootLine,
} from './styledComponents'

const Sidebar = props => {
  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <SidebarMenuContainerWrapper value={lightTheme}>
            <SidebarItemsContainer>
              <SidebarItem>
                <EachNavigationContainer
                  as={Link}
                  to="/"
                  selection={match.path === '/'}
                  theme={lightTheme}
                >
                  <Icon as={AiFillHome} selection={match.path === '/'} />
                  <EachNavigationName>Home</EachNavigationName>
                </EachNavigationContainer>
              </SidebarItem>

              <SidebarItem>
                <EachNavigationContainer
                  as={Link}
                  to="/trending"
                  selection={match.path === '/trending'}
                  theme={lightTheme}
                >
                  <Icon as={HiFire} selection={match.path === '/trending'} />
                  <EachNavigationName>Trending</EachNavigationName>
                </EachNavigationContainer>
              </SidebarItem>

              <SidebarItem>
                <EachNavigationContainer
                  as={Link}
                  to="/gaming"
                  selection={match.path === '/gaming'}
                  theme={lightTheme}
                >
                  <Icon
                    as={SiYoutubegaming}
                    selection={match.path === '/gaming'}
                  />
                  <EachNavigationName>Gaming</EachNavigationName>
                </EachNavigationContainer>
              </SidebarItem>

              <SidebarItem>
                <EachNavigationContainer
                  as={Link}
                  to="/saved-videos"
                  selection={match.path === '/saved-videos'}
                  theme={lightTheme}
                >
                  <Icon
                    as={MdPlaylistAdd}
                    selection={match.path === '/saved-videos'}
                  />
                  <EachNavigationName>Saved Videos</EachNavigationName>
                </EachNavigationContainer>
              </SidebarItem>
            </SidebarItemsContainer>
            <SidebarContactContainer value={lightTheme}>
              <SidebarContactText>Contact Us</SidebarContactText>
              <div>
                <SidebarContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SidebarContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SidebarContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </div>
              <SidebarContainerFootLine value={lightTheme}>
                Enjoy! Now to see your channels and recommendations!
              </SidebarContainerFootLine>
            </SidebarContactContainer>
          </SidebarMenuContainerWrapper>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Sidebar)
