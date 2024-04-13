import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  background-color: ${props => (props.value === true ? '#ffffff' : '#212121')};
  width: 100%;
`
export const HeaderWebsiteLogoImage = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const HeaderItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  width: 40%;
  @media screen and (min-width: 576px) {
    width: 28%;
  }
  @media screen and (min-width: 768px) {
    width: 24%;
  }
  @media screen and (min-width: 1200px) {
    width: 15%;
  }
`
export const HeaderItem = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
`
export const HeaderItemsButton = styled.button`
  font-size: 24px;
  background-color: transparent;
  padding-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const HeaderProfileImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 26px;
  }
`
export const HeaderHamburgerMenuPopup = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Icons = styled.p`
  color: ${props => (props.value ? null : '#ffffff')};
`

export const PoppingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.value ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupCloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  font-size: 25;
  color: ${props => (props.value ? null : '#ffffff')};
  padding-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PopupContentsContainer = styled.div`
  height: 100%;
`
export const PopupContents = styled.ul`
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  list-style-type: none;
`
export const EachNavigationItemInPopup = styled.li`
  display: flex;
  justify-content: center;
  background-color: ${props => {
    if (props.selection === true) {
      return props.theme === true ? '#e2e8f0' : '#212121'
    }
    return null
  }};
`

export const EachPopupNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: #475569;
  margin-left: 0px;
  margin-right: 0px;
  padding: 20px;
  min-width: 230px;
`

export const IconPopup = styled.p`
  color: ${props => (props.selection === true ? '#ff0000' : null)};
`

export const EachNavigationItemName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 15px;
`
export const HeaderDesktopLogoutButtonContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const HeaderDesktopLogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #4f46e5;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #4f46e5;
  border-radius: 3px;
  padding: 4px 14px;
  outline: none;
  cursor: pointer;
`
export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.value === true ? '#ffffff' : '#000000')};
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.5);
`

export const LogoutPopupText = styled.p`
  font-family: 'Roboto':
  font-size: 16px;
  color: ${props => (props.value === true ? '#00306e' : '#ffffff')};
  font-weight: 500;
`

export const CancelConfirmButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`

export const LogoutPopupCancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #7e858e;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
`

export const LogoutPopupConfirmButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
`

export const HeaderMobileLogoutButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
