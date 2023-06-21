import { Bar } from 'react-chartjs-2'
import { parDataTypes } from '../../interfaces/parDataTypes'

interface BarChartProps {
  chartData: parDataTypes[]
  id?: string
  nums: number[]
  title: string
  labelMappingHandler: (val: parDataTypes) => string
}

export const BarChart = ({
  chartData,
  id,
  nums,
  title,
  labelMappingHandler,
}: BarChartProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
      <Bar
        data={{
          labels: chartData
            .map(labelMappingHandler)
            .filter((value, index, array) => array.indexOf(value) === index),
          datasets: [
            {
              label: 'Participants Applied',
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
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title,
            },
            legend: {
              position: 'top' as const,
            },
          },
        }}
        id={id}
      />
    </div>
  )
}
