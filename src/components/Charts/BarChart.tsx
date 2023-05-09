import { Bar } from 'react-chartjs-2'
import { parDataTypes } from '../../interfaces/parDataTypes'

interface BarChartProps {
  chartData: parDataTypes[]
  id?: string
  nums: number[]
}

export const BarChart = ({ chartData, id, nums }: BarChartProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
      <Bar
        data={{
          labels: chartData.map((data) => data.createdAt.split('T')[0]),
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
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
            legend: {
              display: false,
            },
          },
        }}
        id={id}
      />
    </div>
  )
}
