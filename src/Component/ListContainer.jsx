
import PropTypes from 'prop-types';
import DisplayCookList from './DisplayCookList';
import DisplayCurrenCook from './DisplayCurrenCook';
import { useState } from 'react';

const ListContainer = ({ cookList,currenCook, PreparingBtnHandel }) => {
    const [totalTime , setTotalTime]=useState(0);
    const [totalCal , setTotalCal]=useState(0);

    const  setTOtalTimeCal =(time,calori)=>{

       setTotalCal(totalCal+calori);
       setTotalTime(totalTime+time);
    }
    return (
        <div>
            <div className="   ">
                <div className="heading text-center w-8/12 mx-auto pb-3 border-b-4">
                    <h1 className="font-semibold text-xl">Want to cook: <span>{cookList.length}</span> </h1>
                </div>
                <div className="  ">
                    <table className="">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th>     x</th>
                            </tr>
                        </thead>
                        <tbody className="my-4">
                            {
                                cookList.map((items, index) => <DisplayCookList index={index} items={items} key={index} PreparingBtnHandel={PreparingBtnHandel}></DisplayCookList>)
                            }
                        </tbody>

                    </table>
                </div>

            </div>
            <hr />

            <div className=" mt-5 ">
                <div className="heading text-center w-8/12 mx-auto pb-3 border-b-4">
                    <h1 className="font-semibold text-xl">Currently cooking: <span>{currenCook.length}</span> </h1>
                </div>
                <div className=" border-4 ">
                    <table className="w-full text-start">
                        <thead className="text-start">
                            <tr className="p-4">
                                <th>No</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                currenCook.map((item, index) =>   <DisplayCurrenCook  setTOtalTimeCal={ setTOtalTimeCal} item={item} index={index} key={index}></DisplayCurrenCook> )
                            }

                     
                        </tbody>

                    </table>
                </div>

            </div>
        <div className="totalContainer text-lg font-semibold  bg-slate-300 py-3 px-4 my-4 rounded-lg ">

            <h1>Total Time : {totalTime} min</h1>
            <h1>Total Calories = {totalCal} cal.</h1>
        </div>
        </div>
    );
};

export default ListContainer;
ListContainer.propTypes = {
    cookList: PropTypes.array.isRequired,
    currenCook: PropTypes.array.isRequired,
    PreparingBtnHandel: PropTypes.func.isRequired,

}