import { Helmet } from 'react-helmet-async';

function NotFound(){
    return(
        <div>
            <Helmet>
                <title>Not Page</title>
                <meta name = "description" content="Not Found Page" />
            </Helmet>


            <h1>Not found page</h1>
        </div>
    )
}

export default NotFound;