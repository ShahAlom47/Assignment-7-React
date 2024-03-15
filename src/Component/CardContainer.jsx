import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";


const CardContainer = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('cDatas.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    console.log(datas);
    return (
        <div className=" grid gap-5 grid-cols-1 lg:grid-cols-2 ">
            {
                datas.map(data=> <DisplayCard key={data.recipe_id} data={data}></DisplayCard>)
            }
        
        </div>
    );
};

export default CardContainer;