import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NavigationAndNotFoundContainer,
  NotFoundComponentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFoundRoute = () => (
  <>
    <Header />
    <NavigationAndNotFoundContainer>
      <Sidebar />
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme, changedAttributesOnThemeChange} = value

          const {notFoundImage} = changedAttributesOnThemeChange()

          return (
            <NotFoundComponentContainer value={lightTheme}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading value={lightTheme}>
                Page Not Founds
              </NotFoundHeading>
              <NotFoundDescription value={lightTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundComponentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndNotFoundContainer>
  </>
)

export default NotFoundRoute
