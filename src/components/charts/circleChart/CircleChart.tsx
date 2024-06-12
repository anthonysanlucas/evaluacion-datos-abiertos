import './index.css'

interface CircleChartProps {
  color?: string
  percentage?: number
  size?: number
  text?: string
}

function CircleChart({
  color = '#00acc1',
  percentage = 30,
  size = 200,
  text = 'Yay 30% progress!'
}) {
  const radius = 15.91549431
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg
      className="circle-chart"
      viewBox="0 0 33.83098862 33.83098862"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg">
      <circle
        className="circle-chart__background"
        stroke="#efefef"
        strokeWidth="2"
        fill="none"
        cx="16.91549431"
        cy="16.91549431"
        r={radius}
      />
      <circle
        className="circle-chart__circle"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="none"
        cx="16.91549431"
        cy="16.91549431"
        r={radius}
      />
      <g className="circle-chart__info">
        <text
          className="circle-chart__percent"
          x="16.91549431"
          y="15.5"
          alignmentBaseline="central"
          textAnchor="middle"
          fontSize="8">
          {percentage}%
        </text>
        <text
          className="circle-chart__subline"
          x="16.91549431"
          y="20.5"
          alignmentBaseline="central"
          textAnchor="middle"
          fontSize="2">
          {text}
        </text>
      </g>
    </svg>
  )
}

export default CircleChart
