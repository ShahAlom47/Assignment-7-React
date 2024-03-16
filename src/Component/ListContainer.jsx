
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
                <div className="heading text-center w-8/12 mx-auto pb-3 border-b-4">
                    <h1 className="font-semibold text-xl">Want to cook: <span>{cookList.length}</span> </h1>
                </div>
                <div className="  ">
                    <table className="w-full">
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