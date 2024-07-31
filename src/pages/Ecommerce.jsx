import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosMore } from 'react-icons/io'
import { DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import { Doughnut, LineChart, SparkLine, Stacked, Button } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

import {
    earningData,
    medicalproBranding,
    recentTransactions,
    weeklyStats,
    dropdownData,
    SparklineAreaData,
    econPieChartData,
    ecomPieChartData
}
from '../data/dummy'

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
    id='time'
    fields={{ text:'Time' , value:'Id' }}
    style={{ border:'none', color: currentMode === 'Dark' && 'white'}}
    value='1'
    dataSource={dropdownData}
    popupHeight="220px"
    popupWidth='120px'
    />
  </div>
  )

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext()

  return (
		<div className='mt-24 p-2 pb-4 m-2 md:p-10 md:m-10 md:rounded-3xl rounded-xl bg-gray-200'>
			<h1>Вы в панеле управления сервером!</h1>
		</div>
	)
}

export default Ecommerce