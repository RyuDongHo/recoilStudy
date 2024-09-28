import React from 'react'
import STYLE from './style.js'

const ProfileImg = (props) => {
  const {profileImgSrc} = props;
  return <STYLE.ProfileImg src={profileImgSrc}/>
}

export default ProfileImg;
// parent dir 이름이 ui가 더 옳다