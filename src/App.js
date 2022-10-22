import './App.css';

import React from 'react'
import ImageSlider from './components/ImageSlider'

const App = () => {
  const slides=[
    {img:'./Assets/41702105_291146534821180_1470920088633737216_n.jpg'},
    {img:'./Assets/61553888_383990248870141_5753691855061516288_n.jpg'},
    {img:'./Assets/75640639_2775274455851306_6057121768286453760_n.jpg'},
    {img:'./Assets/92099094_3143860252326056_3141757165295894528_n.png'},
    {img:'./Assets/109805985_641195813149582_885843036902824012_n.jpg'},
    {img:'./Assets/274840143_511783227164985_4370718571667709383_n.jpg'},
    {img:'./Assets/311954807_4297561480368387_7418158042009123667_n.jpg'},
    {img:'./Assets/312022085_1244793106301508_671661767919323551_n.jpg'},
    {img:'./Assets/312118314_2572330692909286_1079351901411141709_n.jpg'},
    {img:'./Assets/312132545_407570171582181_699030587668412012_n.jpg'},
  ]
  return (
    <div>
      <h1>Photos Gallery</h1>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default App
