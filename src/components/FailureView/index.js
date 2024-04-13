import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme, changedAttributesOnThemeChange} = value

        const {failureViewImage} = changedAttributesOnThemeChange()

        return (
          <FailureViewContainer>
            <FailureImage src={failureViewImage} alt="failure view" />
            <FailureHeading value={lightTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again later.
            </FailureDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
