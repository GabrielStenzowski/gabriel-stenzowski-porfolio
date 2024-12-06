'use client'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

type SocialProps = {
  containerStyles: string
  iconStyles: string
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com' },
  { icon: <FaLinkedinIn />, path: 'https://linkedin.com' },
]

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
