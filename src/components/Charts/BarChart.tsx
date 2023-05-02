import { Bar } from 'react-chartjs-2'

interface YearGain {
  id: number
  year: number
  userGain: number
  userLost: number
}

export const BarChart = ({
  chartData,
  id,
}: {
  chartData: YearGain[]
  id?: string
}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
      <Bar
        data={{
          labels: chartData.map((data) => data.year),
          datasets: [
            {
              label: 'Users Gained',
              data: chartData.map((data) => data.userGain),
              backgroundColor: [
                'red',
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
