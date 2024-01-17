
import icon_loading from './img/loading.png';
import './Loading.css';

function LoadingPage(){

    return(
        <div className="loading-page">
            <img src={icon_loading} alt="" className='loading-icon' />
        </div>
    )
}
export default LoadingPage;