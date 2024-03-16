import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import PropTypes from 'prop-types';
// import { data } from "autoprefixer";


const CardContainer = ({ cookHandle }) => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('cDatas.json')
            .then(res => res.json())
            .then(data => setDatas(data))
            .catch(err => {
                console.log(err)
            }
            )
            .finally(() => {
                setLoading(false)
            })

    }, []);
    if(loading) return <div className="flex justify-center py-11"><span className="loading loading-spinner text-primary w-32"></span></div> 

    return (
        <div  className=" grid gap-5 grid-cols-1 lg:grid-cols-2 ">
            {
                datas.map(data => <DisplayCard key={data.recipe_id} data={data} cookHandle={cookHandle}></DisplayCard>)
            }

        </div>
    );
};

export default CardContainer;

CardContainer.propTypes = {
    cookHandle: PropTypes.func.isRequired
}