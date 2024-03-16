
import PropTypes from 'prop-types';
const DisplayCookList = ({items,index}) => {
    return (
        
        <tr className="bg-gray-300">
        <td> {index+1} </td>
        <td> {items.recipe_name} </td>
        <td>{items.preparing_time}</td>
        <tr>  {items.calories} </tr>
        <td> <button className=" rounded-full px-7 py-1 hover:bg-[#4cc894cc] active:translate-x-1 bg-[#0BE58A] border-none font-bold">Preparing</button>
        </td>
    </tr>
        
      
    );
};

export default DisplayCookList;
DisplayCookList.propTypes = {
    items: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  
}