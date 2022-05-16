import React from 'react'
import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

export type ButtonProps = {
  onClick: () => void
  style?: string
  link?: string
  label: string
}

export default function Button({
  link,
  onClick,
  label,
  style = 'primary',
}: ButtonProps): JSX.Element {
  const Component = link ? 'a' : 'button'

  const className = joinClassNames([styles.root, styles[style]])

  return (
    <Component onClick={onClick} className={className}>
      {label}
    </Component>
  )
}
