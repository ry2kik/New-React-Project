import errorLogo from '../Component/Assets/img/404.jpg';

const Error = () => {
    return (
        <>
            <div className='errorImage'>
                <img src={errorLogo} />
            </div>
        </>
    )
}

export default Error;