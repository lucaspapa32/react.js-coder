import { useState, useEffect } from 'react'
import { getBestItems } from "../../services/firestore"
import { Link } from 'react-router-dom'
import colorProtein from '../../assets/ProteinColor.webp'
import Item from '../Item/Item'
import Loader from '../Loader/Loader'
import './Indexcontainer.css'

function Indexcontainer(){
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> { // get items 'destacados'
            getBestItems()
            .then((respuestaDatos) =>  setData(respuestaDatos))
            .finally(() => setIsLoading(false))
    }, [])

    return(
        <div className='index__outer'>
            {isLoading && <Loader/>}
            <div className="index-container">
                <div className="index__bienvenido">
                    <h1> Bienvenido a Ironplant <h2>Somos la primera marca vegana en Chile de suplementos alimenticios</h2> </h1>
                </div>
                <div className="index__destacados-container">
                    <div className='index__proteins-container'>
                        <Link to="category/proteinas-vegetales"><img className='index__color-proteins' src={colorProtein} alt="proteinas" /></Link>
                    </div>
                    <div className='index__destacados'>
                        <h1>Conoce nuestros productos</h1>
                        <div className='index__products'>
                        
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
                    </div>
                    <div>
                        <Link to="/products"><h2 className='index__ver-productos'>Ver todos los productos</h2></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Indexcontainer