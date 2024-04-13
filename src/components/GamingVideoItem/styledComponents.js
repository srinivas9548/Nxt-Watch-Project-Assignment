import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 0px 10px 35px 10px;
  @media screen and (min-width: 576px) {
    width: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 0px 20px 40px 20px;
  }
  @media screen and (min-width: 992px) {
    width: 270px;
  }
`
export const GamingThumbnailImage = styled.img`
  width: 100%;
  border-radius: 8px;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.value === true ? ' #1e293b' : '#ffffff')};
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
