import errorLogo from '../Component/Assets/img/404.jpg';
import { useRouteError } from 'react-router-dom';
import Header from './Header';

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <div className='errorImage'>
                <img src={errorLogo} />
                <h2>{ err.status + ' : Page ' + err.statusText }</h2>
            </div>
        </>
    )
}

export default Error;