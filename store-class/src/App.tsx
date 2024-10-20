import ShopItemFunc from './ShopItemClass.tsx'
import style from './main.module.css'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  
  return (
    <div className={style.container}>
    <div className={style.backgroundElement}>
    </div>
    <div className={style.highlightWindow}>
      <div className={style.highlightOverlay}></div>
    </div>
    <div className={style.window}>
      <ShopItemFunc cardInfo={item} />
    </div>
  </div>
  )
}

export default App
