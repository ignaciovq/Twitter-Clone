import { getTrends } from '../../../../utils/APICalls'
import TrendList from '../../../components/trendList'

export default async function Explore () {
  const trends = await getTrends('sports_unified')
  return (
    <TrendList trends={trends} />
  )
}
