import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

const Contact = () => {

    const[state] = useState({
        heading: 'Contact Us',
        pageHeading: 'leave your message in the contact form',
        message: 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
            t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
             a qui officia deserunt mollit anim id est laborum.`
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return(
        <>
            <Helmet>
                <title>Contact Page</title>
                <meta name = 'description' content='travel friends contact page'/>
            </Helmet>
            <PageContainer data={state}>
                <ContactForm/>
            </PageContainer>
        </>
    )

}

export default Contact;