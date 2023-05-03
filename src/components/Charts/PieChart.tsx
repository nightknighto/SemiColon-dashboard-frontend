import { Pie } from 'react-chartjs-2'
import { parDataTypes } from '../../interfaces/parDataTypes'

const PieChart = ({
  chartData,
  id,
  nums
}: {
  chartData: parDataTypes[]
  id?: string
  nums: number[]
}) => {

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <Pie
        data={{
          datasets: [
            {
              label: 'Users Gained',
              data: nums,
              backgroundColor: [
                '#4c4caa',
                '#ecf0f1',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0',
              ],
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        }}
        id={id}
      />
    </div>
  )
}

export default PieChart
