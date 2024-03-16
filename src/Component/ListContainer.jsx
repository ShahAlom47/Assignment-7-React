
import PropTypes from 'prop-types';
import DisplayCookList from './DisplayCookList';
import DisplayCurrenCook from './DisplayCurrenCook';


// import { useEffect, useState } from 'react';

const ListContainer = ({ cookList, currenCook, PreparingBtnHandel }) => {

let time =0;
let calories=0;
    return (
        <div>
            <div className="   ">
                <div className="heading text-center w-full mx-auto pb-3 border-b-4">
                    <h1 className="font-semibold text-xl rounded-lg shadow-gray-700 shadow-lg py-3 text-gray-600 bg-gray-200">Want to cook: <span>{cookList.length}</span> </h1>
                </div>
                <div className=" tableContainer ">
                    <table className="w-full text-gray-600 ">
                        <thead>
                            <tr className='bg-slate-200 rounded-xl '>
                                <th className='lg:py-3 lg:px-2'>No</th>
                                <th className='lg:py-3 lg:px-2'>Name</th>
                                <th className='lg:py-3 lg:px-2'>Time</th>
                                <th className='lg:py-3 lg:px-2'>Calories</th>
                                <th className='lg:py-3 lg:px-2'>     -</th>
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

            <div className=" mt-8 ">
                <div className="heading text-center w-full mx-auto pb-3 border-b-4">
                    <h1 className="font-semibold text-xl rounded-lg shadow-gray-700 shadow-lg py-3 text-gray-600 bg-gray-200">Currently cooking: <span>{currenCook.length}</span> </h1>
                </div>
                <div className="  mt-4 ">
                    <table className="w-full text-start text-gray-600">
                        <thead className="text-start">
                            <tr className="lg:p-4 bg-slate-200 rounded-xl">
                                <th className='lg:py-3 lg:px-2'>No</th>
                                <th className='lg:py-3 lg:px-2'>Name</th>
                                <th className='lg:py-3 lg:px-2'>Time</th>
                                <th className='lg:py-3 lg:px-2'>Calories</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                currenCook.map((item, index) => {
                                    const times=parseInt(item[0].preparing_time)
                                    const Calori=parseInt(item[0].calories)
                                    time=time+times;
                                    calories=calories+Calori

                                    return (
                                        <DisplayCurrenCook item={item} index={index} key={index}>

                                        </DisplayCurrenCook>)

                                })
                            }


                        </tbody>

                    </table>
                </div>

            </div>
            <div className="totalContainer text-lg font-semibold  bg-slate-300 py-3 px-4 my-4 rounded-lg ">

                <h1>Total Time : {time } min</h1>
                <h1>Total Calories = { calories} cal.</h1>
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