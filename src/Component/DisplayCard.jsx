
import { BiAlarm } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';




const DisplayCard = ({data , cookHandle}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=data;
//   console.log(cookHandle);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border-4 h-full">
                <figure 
                className="mx-10 mt-10 h-[210px] overflow-hidden flex justify-center items-center rounded-xl ">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl w-full h-auto  object-contain "
                    />
                </figure>
                <div className="card-body items-start justify-start  ">
                    <h2 className="card-title font-semibold">{recipe_name}</h2>
                    <p>{short_description}</p>
                
                    < hr />
                    <div className="flex flex-col justify-between ">
                    <div>
                        <h3 className="font-semibold text-xl text-gray-700 my-3 ">Ingredients: <span>{ingredients.length}</span></h3>
                        <ul className="list-disc pl-4 my-2 text-gray-500 font-semibold">
                            {
                                ingredients.map((ing,idx)=>  <li key={idx}>{ing}</li>  )
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className=" flex text-gray-500 font-semibold ">
                        <p className="flex gap-2 items-center"><span><BiAlarm /></span> <span>{preparing_time}</span> minutes</p>
                        <p className="flex gap-2 items-center"><span><AiOutlineFire /></span> <span>{calories}</span> calores</p>
                       
                    </div>
                    <div className="card-actions mt-5 ">
                    <button onClick={()=>cookHandle(data)} className="btn rounded-full px-7 bg-[#0BE58A] border-none font-bold">Want to Cook</button>
          
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DisplayCard;
DisplayCard.propTypes = {
    data: PropTypes.object.isRequired,
   cookHandle : PropTypes.func.isRequired
}