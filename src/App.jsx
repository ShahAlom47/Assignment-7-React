
import { useState } from 'react'
import './App.css'
import CardContainer from './Component/CardContainer'
import ListContainer from './Component/ListContainer'
import Header from './Component/header'


function App() {
const [cookList, setCookList]=useState([]);
const [currenCook,setCurrentCook]=useState([]);

  const cookHandle =(data)=>{
const chackData= cookList.some((id)=>id.recipe_id===data.recipe_id)
if(!chackData){ setCookList([...cookList,data])}
}

const PreparingBtnHandel =(pData)=>{
const removeData = cookList.filter(item=>item.recipe_id!==pData.recipe_id)
setCookList(removeData)
const AddData = cookList.filter(item=>item.recipe_id===pData.recipe_id)
setCurrentCook([...currenCook,AddData])

}

console.log(currenCook);


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
      <div className='cardContainer flex-1 lg:px-5 my-6 '>
        <CardContainer cookHandle={cookHandle}></CardContainer>

      </div>
      <div className='ListConatainer lg:w-4/12 border-4 rounded-xl my-6'>
      <ListContainer cookList={cookList} currenCook={currenCook} PreparingBtnHandel={PreparingBtnHandel}></ListContainer>
     

      </div>
      </div>

    </main>
      
   
    </>
  )
}

export default App
