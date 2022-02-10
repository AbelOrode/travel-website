import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer/Footer'
const PageContainer = ({data, children}) => {

    return(
        <div>
            <Header heading = {data.heading}/>
            <div className='page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 animation'>
                            {children}
                        </div>
                        <div className='col-6'>
                            <div className='page__info'>
                                <h2 className='heading heading-animation'>{data.heading}</h2>
                                <h1 className='page__info__heading heading-animation'>{data.pageHeading}</h1>
                                <p className='page__info__msg animation'>{data.message}</p>
                                <div className='page__info__link animation'>
                                    <Link to = '' className='btn-dark'>Go Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default PageContainer;