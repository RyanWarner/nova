import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Tech = props => {
  const { data } = props

  return (
    <S.TechComponent>
      {data.icon}
      <S.Text>
        <S.Title>{data.display}</S.Title>
        <S.Description>{data.description}</S.Description>
      </S.Text>
    </S.TechComponent>
  )
}

Tech.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.object,
    display: PropTypes.string,
    description: PropTypes.string
  })
}

export default Tech
