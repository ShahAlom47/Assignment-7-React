
import PropTypes from 'prop-types';
const DisplayCookList = ({items,index,PreparingBtnHandel}) => {
    return (
        
        <tr className=" ">
        <td className='ml-3'>{index+1}</td>
        <td>{items.recipe_name}</td>
        <td>{items.preparing_time}</td>
        <td>{items.calories}</td>
        <td> <button onClick={()=>PreparingBtnHandel(items)} className=" text-sm lg:text-base rounded-full lg:px-7 px-2 py-1 hover:bg-[#4cc894cc] active:translate-x-1 bg-[#0BE58A] border-none lg:font-bold">Preparing</button>
        </td>
    </tr>
        
      
    );
};

export default DisplayCookList;
DisplayCookList.propTypes = {
    items: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    PreparingBtnHandel: PropTypes.func.isRequired,
  
}