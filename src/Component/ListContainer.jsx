

const ListContainer = () => {
    return (
        <div>
        <div className="   ">
            <div className="heading text-center w-8/12 mx-auto pb-3 border-b-4">
                <h1 className="font-semibold text-xl">Want to cook: <span>0</span> </h1>
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
                        <tr className="bg-gray-300">
                            <td> 1 </td>
                            <td> Chicken Caesar Salad  </td>
                            <td> 20 minutes</td>
                            <tr>  300 Caloris </tr>
                            <td> <button className=" rounded-full px-7 py-1 hover:bg-[#4cc894cc] active:translate-x-1 bg-[#0BE58A] border-none font-bold">Preparing</button>
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> Chicken Caesar Salad  </td>
                            <td> 20 minutes</td>
                            <tr>  300 Caloris </tr>
                            <td> <button className=" rounded-full px-7 py-1 hover:bg-[#4cc894cc] active:translate-x-1 bg-[#0BE58A] border-none font-bold">Preparing</button>
                            </td>
                        </tr>

                       
                    </tbody>
                  
                </table>
            </div>

        </div>
        <hr />

        <div className=" mt-5 ">
            <div className="heading text-center w-8/12 mx-auto pb-3 border-b-4">
                <h1 className="font-semibold text-xl">Currently cooking: <span>0</span> </h1>
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
                        <tr className="bg-gray-300">
                            <td> 1 </td>
                            <td> Chicken Caesar Salad  </td>
                            <td> 20 minutes</td>
                            <tr>  300 Caloris </tr>
                           
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> Chicken Caesar Salad  </td>
                            <td> 20 minutes</td>
                            <tr>  300 Caloris </tr>
                           
                        </tr>

                       
                    </tbody>
                  
                </table>
            </div>

        </div>
        
        </div>
    );
};

export default ListContainer;