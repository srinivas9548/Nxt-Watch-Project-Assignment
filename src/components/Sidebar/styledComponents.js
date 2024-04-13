import styled from 'styled-components'

export const SidebarMenuContainerWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px;
    height: 120vh;
    width: 242px;
    background-color: ${props => (props.value === true ? null : '#212121')};
  }
`
export const SidebarItemsContainer = styled.ul`
  padding-left: 0px;
`

export const SidebarItem = styled.li`
  list-style-type: none;
`
export const EachNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#475569' : '#ebebeb')};
  height: 35px;
  padding: 25px 20px 25px 20px;
  margin-left: 0px;
  margin-right: 0px;
  text-decoration: none;
  width: 240px;
  background-color: ${props => {
    if (props.selection === true) {
      return props.theme === true ? '#e2e8f0' : '#424242'
    }
    return null
  }};
`

export const Icon = styled.p`
  color: ${props => (props.selection === true ? '#ff0000' : null)};
`

export const EachNavigationName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  padding-bottom: 3px;
  margin: 30px;
`

export const SidebarContactContainer = styled.div`
  width: 100%;
  font-weight: 700;
  color: ${props => (props.value === true ? '#1e293b' : '#cbd5e1')};
  padding: 20px;
`

export const SidebarContactText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`
export const SidebarContactImages = styled.img`
  width: 30px;
  margin-right: 15px;
`
export const SidebarContainerFootLine = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.value === true ? '#475569' : '#ebebeb')};
  font-weight: 500;
`
