import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: true,
  changedAttributesOnThemeChange: () => {},
  likedList: [],
  dislikedList: [],
  savedList: [],
  addAsLikedVideos: () => {},
  addAsDisLikedVideos: () => {},
  addOrRemoveAsOrSavedVideos: () => {},
})

export default NxtWatchContext
