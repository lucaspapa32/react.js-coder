import {useEffect, useState} from 'react'
import Item from "../Item/Item"
import { getItems, getItemsByCategory, getItemsByType } from "../../services/firestore"
import './Itemlist.css'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import brazo from '../../assets/brazo.png'

function Itemlist(){
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let { cat, type } = useParams()

    useEffect(()=> { // mostrar los datos de los productos de la categoria o tipo
        if(cat === undefined && type === undefined ) {
            getItems()
                .then( (respuestaDatos) => {
                    setData([])
                    setData(respuestaDatos)})
                .finally(() => setIsLoading(false))
        } else if (type === undefined) {
            getItemsByCategory(cat)
                .then((respuestaDatos) =>  {
                    setData([])
                    setData(respuestaDatos)})
                .finally(() => setIsLoading(false))
        } else if (cat === undefined){
            getItemsByType(type)
                .then((respuestaDatos) =>  setData(respuestaDatos))
                .finally(() => setIsLoading(false))
        }
    }, [cat, type])
    return(
        <div>
            {isLoading && <Loader/>}
            <div className="item-list__inner">
                
                {
                data.map((item)=> {
                    return (
                        <Item
                            id={item.id}
                            key={item.id}
                            price={item.price}
                            title={item.title}
                            detail={item.detail}
                            img={item.img}
                            stock={item.stock}
                        />
                    )
                })
                }
            </div>
            { isLoading ? '' : 
            <div className='app__brazo-container'>
                <img src={brazo} alt="brazo de hojas" className='app__brazo-logo'></img>
                <h2 className='app__brazo-text'>Tómate la B12!💛</h2>
            </div>
            }
        </div>
    )
}

export default Itemlist