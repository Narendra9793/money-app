'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data={
    datasets : [
        {
            label:'Banks',
            data:[1234, 535, 2322, 4354],
            backgroundColor : ['#0747b6', '#2265d8', '#9763b3', '#9222e4']
        }
    ],
    labels:['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']
  }
  return <Doughnut
    data={data}
    options={{
        cutout : '60%',
        plugins : {
            legend :{
                display: false
            }
        }
    }}

   />
}

export default DoughnutChart
