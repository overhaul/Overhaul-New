import React from "react"

const Marquee = ({text, linkText, link}) => {
    
    let marqueeText = text 
    const marqueeLength = text.length
    const minLength = 200
    const separator = ('  ')

    if (marqueeLength < minLength) {
        const repetitions = (minLength / marqueeLength)
        for (let index = 0; index < repetitions; index++) {
             marqueeText = (text + separator).repeat(repetitions)
        }
    } else {
        marqueeText = text + separator
    }
    return(
        <>
        <div class="marquee">
            <div>
                <a className={'cursor-text--' + linkText } href={link}><span>{marqueeText}&nbsp;</span></a>
            </div>
        </div>
        </>
    )
}

export default Marquee
