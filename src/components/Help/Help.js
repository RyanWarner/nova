import React, { Component } from 'react'

import * as S from './styles'
import { SlackLogo, VideoPlayer } from 'app/ui-kit/Icons'

export default class Help extends Component {
  render () {
    return (
      <S.HelpComponent>
        <S.Title>Need help?</S.Title>
        <S.Description>
          Purchase a community subscription and unlock unlimited access to
        </S.Description>
        <S.Features>
          <S.StyledFeatureCard title='Live chat' icon={<SlackLogo />} />
          <S.StyledFeatureCard title='Courses' icon={<VideoPlayer />} />
        </S.Features>
        <S.StyledHighlightLink
          text='Learn more'
          href='https://yawnch.com/how-it-works'
          color='sea10'
        />
      </S.HelpComponent>
    )
  }
}
