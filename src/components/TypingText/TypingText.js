import './TypingText.css'
import { useEffect, useState } from "react"

export const TypingText = ({sentence}) => {

    const period = 2000
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [delta, setDelta] = useState(300 - Math.random() * 100)


    useEffect(() => {
        const tick = () => {
            let fullText = sentence
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
            setText(updatedText)
            isDeleting && setDelta(prevDelta => prevDelta / 2)
            if (!isDeleting && updatedText.length === fullText.length) {
                setIsDeleting(true)
                setDelta(period)
            } else if (isDeleting && updatedText.length === 0) {
                setIsDeleting(false)
                setDelta(300 - Math.random() * 100)
            }
        }

        const ticker = setInterval(tick, delta)

        return () => clearInterval(ticker)

    }, [delta, text, isDeleting, sentence]);

    return (
        <p className="typing-text">
            <span>{text}</span>
        </p>
    )
}