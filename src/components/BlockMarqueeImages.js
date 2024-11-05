import React from "react"

const MarqueeImages = ({images}) => {
   
    let marqueeImages = images 
    const marqueeLength = marqueeImages.length
    const minLength = 7

    if (marqueeLength < minLength) {
        const repetitions = (minLength / marqueeLength)
        for (let index = 0; index < repetitions; index++) {
            marqueeImages = (marqueeImages).concat(marqueeImages)
        }
    }

    return(
        <>
        <div className="marquee-images">
            <div>
                { marqueeImages.map((image, index) => (
                    <img src={image.src} alt={image.alt} width='140' placehodeler='blurred' layout='fixed' className='marquee-images_image' key={index} />
                ))}
            </div>
        </div>
        </>
    )
}

export default MarqueeImages
