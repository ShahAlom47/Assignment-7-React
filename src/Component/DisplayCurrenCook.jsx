
import PropTypes from 'prop-types';
const DisplayCurrenCook = ({item, index}) => {
   
    // setTOtalTimeCal(item[0]?.preparing_time,item[0]?.calories);
    return (

        <tr className="">
            <td> {index+1} </td>
            <td> {item[0]?.recipe_name} </td>
            <td> {item[0]?.preparing_time} </td>
            <td>   {item[0]?.calories} </td>

        </tr>


    );
};

export default DisplayCurrenCook;
DisplayCurrenCook.propTypes = {
    item: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    // setTOtalTimeCal: PropTypes.func.isRequired,
 
}