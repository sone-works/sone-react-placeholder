import React from 'react'
import styles from './Placeholder.module.scss'

export interface IPlaceholderProps {
  display: string
  color?: string
  height?: string
}

const Placeholder: React.FC<IPlaceholderProps> = ({
  display,
  color = 'blue',
  height = 'auto',
}) => (
  <div
    className={styles.component}
    style={{ borderColor: color, color, height }}
  >
    <span>{display}</span>
  </div>
)

export default Placeholder
