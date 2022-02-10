import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import AboutImage from '../components/pages-parts/AboutImage'
const  About = () => {

    const [state] = useState({
        heading: 'about us',
        pageHeading: 'World best travel agency company since 2005',
        message: 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
            t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
             a qui officia deserunt mollit anim id est laborum.`
            
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return(
        <div>
            <Helmet> The helmet library is basically for SEO purpose 
                <title>About Page</title>
                <meta name = "description" content="travel friends about page" />
            </Helmet>

            <PageContainer data={state}> 
                <AboutImage/>
            </PageContainer> 
        </div>
       
    )
}

export default About;