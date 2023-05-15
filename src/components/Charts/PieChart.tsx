import { Pie } from 'react-chartjs-2'
const PieChart = ({
  id,
  nums,
  labels,
  title,
}: {
  id?: string
  nums: number[]
  labels: string[]
  title?: string
}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Participants Applied',
              data: nums,
              backgroundColor: [
                '#4c4caa',
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
              text: title,
            },
          },
        }}
        id={id}
      />
    </div>
  )
}

export default PieChart
