import React from 'react'
import DynamicTable from './task/task'
import Tabledata from './table/table'
import Bulb from './body/body'
import Fake from './fake/fake'

const App = () => {
  return (
    <div>
      <DynamicTable/>
      <Tabledata/>
      <Bulb/>
      <Fake/>
    </div>
  )
}

export default App
