
import './App.css'
import logo from './assets/logo.png'
import DoubleDollar from './assets/DoubleDollar.png'



function App() {
  

  return (
    <>
      <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            {/* my-XI */}
          </a>
        </div>
        <div className="flex items-center mr-1">
          <span className='mr-1' >60000000000</span>
          <span className=' mr-1 ' >Coin</span>
          <img src={DoubleDollar} alt="Double Dollar" className="h-6 w-6 ml-2" />
        </div>
      </div>
      
    </>
  )
}

export default App
