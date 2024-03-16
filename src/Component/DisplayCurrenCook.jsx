
import PropTypes from 'prop-types';
const DisplayCurrenCook = ({item, index,  setTOtalTimeCal}) => {
    console.log(item);
    setTOtalTimeCal(item[0]?.preparing_time,item[0]?.calories);
    return (

        <tr className="bg-gray-300">
            <td> {index+1} </td>
            <td> {item[0]?.recipe_name} </td>
            <td> {item[0]?.preparing_time} </td>
            <tr>   {item[0]?.calories} </tr>

        </tr>


    );
};

export default DisplayCurrenCook;
DisplayCurrenCook.propTypes = {
    item: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    setTOtalTimeCal: PropTypes.func.isRequired,
 
}