import { getTrends } from '../../../../utils/APICalls'
import TrendList from '../../../components/trendList'

export default async function Explore () {
  const trends = await getTrends('trending')
  return (
    <TrendList trends={trends} />
  )
}
