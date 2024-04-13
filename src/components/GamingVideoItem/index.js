import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LinkContainer,
  GamingListItem,
  GamingThumbnailImage,
  GameTitle,
  GameViews,
} from './styledComponents'

const GamingVideoItem = props => {
  const {gamingVideoDetails} = props
  //   console.log(gamingVideoDetails)
  const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LinkContainer as={Link} to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle value={lightTheme}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </GamingListItem>
          </LinkContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
