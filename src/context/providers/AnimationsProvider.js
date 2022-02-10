import { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({children}) => {
    const scrollAnimations = () =>{
       
        const animation = (elements, className) => {
            elements.forEach((element) =>{
                const elementPosition = element.getBoundingClientRect().top;
                const viewPortHeight = window.innerHeight - 100;
    
                if(elementPosition < viewPortHeight){
                    element.classList.add(className)
                }else{
                    element.classList.remove(className);
                }
            });
        };

        const elements = document.querySelectorAll('.animation');
        const heading_elements = document.querySelectorAll('.heading-animation');
        animation(elements, 'animate');
        animation(heading_elements, 'heading-animate');
    }
    useEffect(() =>{

        window.addEventListener('scroll', scrollAnimations)

    },[])

    return(
        <AnimationsContext.Provider value>
            {children}
        </AnimationsContext.Provider>
    )
}

export default AnimationsProvider;