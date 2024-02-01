import espiral from '../../assets/espiral.png'
import './Loader.css'
function Loader(){


    return (
        <div className='loader__container'>
            <div className='loader__inner'>
                <img src={espiral} alt="espiral" className='loader__image animation-grow'/>
            </div>
        </div>
    )
}


export default Loader