import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavbarHeader,
  HeaderWebsiteLogoImage,
  HeaderItemsContainer,
  HeaderItem,
  HeaderItemsButton,
  HeaderProfileImage,
  HeaderHamburgerMenuPopup,
  Icons,
  PoppingContainer,
  PopupCloseButton,
  PopupContentsContainer,
  PopupContents,
  EachNavigationItemInPopup,
  EachPopupNavigationContainer,
  IconPopup,
  EachNavigationItemName,
  HeaderDesktopLogoutButtonContainer,
  HeaderDesktopLogoutButton,
  LogoutPopupContainer,
  LogoutPopupText,
  CancelConfirmButtons,
  LogoutPopupCancelButton,
  LogoutPopupConfirmButton,
  HeaderMobileLogoutButtonContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme, changeTheme, changedAttributesOnThemeChange} = value

        const {watchLogoImage} = changedAttributesOnThemeChange()

        const onClickThemeChange = () => {
          changeTheme()
        }

        return (
          <NavbarHeader value={lightTheme}>
            <Link to="/">
              <HeaderWebsiteLogoImage src={watchLogoImage} alt="website logo" />
            </Link>
            <HeaderItemsContainer>
              <HeaderItem>
                <HeaderItemsButton
                  type="button"
                  data-testid="theme"
                  onClick={onClickThemeChange}
                >
                  {lightTheme ? (
                    <FaMoon />
                  ) : (
                    <FiSun style={{color: '#ffffff'}} />
                  )}
                </HeaderItemsButton>
              </HeaderItem>
              <HeaderItem>
                <HeaderProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderHamburgerMenuPopup>
                  <Popup
                    modal
                    trigger={
                      <HeaderItemsButton type="button">
                        <Icons as={GiHamburgerMenu} value={lightTheme} />
                      </HeaderItemsButton>
                    }
                  >
                    {close => (
                      <PoppingContainer value={lightTheme}>
                        <PopupCloseButton
                          type="button"
                          value={lightTheme}
                          onClick={() => close()}
                        >
                          <IoMdClose size={20} />
                        </PopupCloseButton>
                        <PopupContentsContainer>
                          <PopupContents>
                            <EachNavigationItemInPopup
                              selection={match.path === '/'}
                              theme={lightTheme}
                            >
                              <EachPopupNavigationContainer
                                as={Link}
                                to="/"
                                onClick={() => close()}
                              >
                                <IconPopup
                                  as={AiFillHome}
                                  selection={match.path === '/'}
                                />
                                <EachNavigationItemName>
                                  Home
                                </EachNavigationItemName>
                              </EachPopupNavigationContainer>
                            </EachNavigationItemInPopup>

                            <EachNavigationItemInPopup
                              selection={match.path === '/trending'}
                              theme={lightTheme}
                            >
                              <EachPopupNavigationContainer
                                as={Link}
                                to="/trending"
                                onClick={() => close()}
                              >
                                <IconPopup
                                  as={HiFire}
                                  selection={match.path === '/trending'}
                                />
                                <EachNavigationItemName>
                                  Trending
                                </EachNavigationItemName>
                              </EachPopupNavigationContainer>
                            </EachNavigationItemInPopup>

                            <EachNavigationItemInPopup
                              selection={match.path === '/gaming'}
                              theme={lightTheme}
                            >
                              <EachPopupNavigationContainer
                                as={Link}
                                to="/gaming"
                                onClick={() => close()}
                              >
                                <IconPopup
                                  as={SiYoutubegaming}
                                  selection={match.path === '/gaming'}
                                />
                                <EachNavigationItemName>
                                  Gaming
                                </EachNavigationItemName>
                              </EachPopupNavigationContainer>
                            </EachNavigationItemInPopup>

                            <EachNavigationItemInPopup
                              selection={match.path === '/saved-videos'}
                              theme={lightTheme}
                            >
                              <EachPopupNavigationContainer
                                as={Link}
                                to="/saved-videos"
                                onClick={() => close()}
                              >
                                <IconPopup
                                  as={MdPlaylistAdd}
                                  selection={match.path === '/saved-videos'}
                                />
                                <EachNavigationItemName>
                                  Saved Videos
                                </EachNavigationItemName>
                              </EachPopupNavigationContainer>
                            </EachNavigationItemInPopup>
                          </PopupContents>
                        </PopupContentsContainer>
                      </PoppingContainer>
                    )}
                  </Popup>
                </HeaderHamburgerMenuPopup>
              </HeaderItem>
              <HeaderItem>
                <HeaderDesktopLogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <HeaderDesktopLogoutButton type="button">
                        Logout
                      </HeaderDesktopLogoutButton>
                    }
                  >
                    {close => (
                      <LogoutPopupContainer value={lightTheme}>
                        <LogoutPopupText value={lightTheme}>
                          Are you sure, you want to logout?
                        </LogoutPopupText>
                        <CancelConfirmButtons>
                          <LogoutPopupCancelButton
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopupCancelButton>
                          <LogoutPopupConfirmButton
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </LogoutPopupConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopupContainer>
                    )}
                  </Popup>
                </HeaderDesktopLogoutButtonContainer>
                <HeaderMobileLogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <HeaderItemsButton type="button">
                        <Icons as={FiLogOut} value={lightTheme} />
                      </HeaderItemsButton>
                    }
                  >
                    {close => (
                      <LogoutPopupContainer value={lightTheme}>
                        <LogoutPopupText value={lightTheme}>
                          Are you sure, you want to logout?
                        </LogoutPopupText>
                        <CancelConfirmButtons>
                          <LogoutPopupCancelButton
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopupCancelButton>
                          <LogoutPopupConfirmButton
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </LogoutPopupConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopupContainer>
                    )}
                  </Popup>
                </HeaderMobileLogoutButtonContainer>
              </HeaderItem>
            </HeaderItemsContainer>
          </NavbarHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
