import { Bar } from 'react-chartjs-2'
import { Participant } from '../types/Participant'

interface BarChartProps {
  labels: string[]
  id?: string
  nums: number[]
  subtitle: string
  title: string
}

export const BarChart = ({
  labels,
  id,
  nums,
  subtitle,
  title,
}: BarChartProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <Bar
        data={{
          labels: labels,
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
              text: subtitle,
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
