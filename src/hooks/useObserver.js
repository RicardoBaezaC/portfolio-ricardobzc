import { useEffect, useState } from 'react'

export const useObserver = ({threshold}) => {

    const [elements, setElements] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show-effect', entry.isIntersecting)
            });
        },{
            threshold: threshold
        })

        elements.forEach(element => {
            observer.observe(element)
        })

        return () => observer.disconnect()

    }, [elements, threshold])

    return setElements

}
