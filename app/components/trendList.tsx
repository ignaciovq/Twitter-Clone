import type { Trend } from '../../utils/trends'
import styles from '../styles/trend.module.css'
import TrendViewer from './trend'

export default function TrendList ({ trends, sidebar = false }:{trends: Trend[], sidebar?: boolean}) {
  const trendList = trends.map((trend: Trend) => <TrendViewer key={trend.tweetCount} trend={trend} />)
  const classes = sidebar ? `${styles.trend_list} ${styles.on_sidebar} flex_column` : `${styles.trend_list} flex_column`
  return (
    <div className={classes}>
      {trendList}
    </div>
  )
}
