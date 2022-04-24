import React from 'react'
import { IconType } from 'react-icons'

import styles from './Icon.module.scss'

type Props = {
  which: IconType
  size: number
}

const Icon = ({ which: TheIcon, size }: Props) => (
  <TheIcon className={styles.icon} size={size} />
)

export default Icon
