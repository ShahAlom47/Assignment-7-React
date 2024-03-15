
import './App.css'
import CardContainer from './Component/CardContainer'
import Header from './Component/header'

function App() {


  return (
    <>
    <div className='Header mb-24 '>

      <Header></Header>
    </div>
    <main>
      <div className='Heading text-center mb-6'>
    <h1 className='text-4xl font-bold mb-5'>Our Recipes</h1>
    <p >Embark on a Flavorful Culinary Journey with Our Diverse Collection of Exquisite Recipes to Satisfy Every Palate and Preference!</p>

      </div>
      <div className='flex flex-col lg:flex-row '>
      <div className='cardContainer flex-1 px-5 py-6 '>
        <CardContainer></CardContainer>

      </div>
      <div className='ListConatainer w-4/12'>


      </div>
      </div>

    </main>
      
   
    </>
  )
}

export default App
