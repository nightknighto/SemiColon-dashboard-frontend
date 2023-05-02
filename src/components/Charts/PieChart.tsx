import { Pie } from 'react-chartjs-2'

interface YearGain {
  id: number
  year: number
  userGain: number
  userLost: number
}

const PieChart = ({
  chartData,
  id,
}: {
  chartData: YearGain[]
  id?: string
}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <Pie
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
        id={id}
      />
    </div>
  )
}

export default PieChart
