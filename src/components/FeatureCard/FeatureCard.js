import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const FeatureCard = ({ icon, title, ...rest }) =>
  <S.FeatureCardComponent {...rest}>
    {icon}
    <S.Title>{title}</S.Title>
  </S.FeatureCardComponent>

FeatureCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string
}

export default FeatureCard
