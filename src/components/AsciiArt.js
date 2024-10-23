import React, { useEffect, useRef, useState } from 'react';

const AsciiArt = ({imageChild}) => {
    const isTouchDevice = () => 'ontouchstart' in window;
    const container = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let scaleX = 4.81;
        let scaleY = 0.61;
        let image = container.current.querySelector('picture img');
        const timer = setInterval(() => {
            image = container.current.querySelector('picture img');
            
            if (image) {
                if (image.complete) {
                    setImageLoaded(true);
                    clearInterval(timer);
                } else {
                    image.onload = () => {
                        setImageLoaded(true);
                        clearInterval(timer);
                    };
                }
            }
        }, 100);
        
        if (!imageLoaded) return;
        clearInterval(timer);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const asciiContainer = document.createElement('pre'); // Container for ASCII art
        container.current.appendChild(asciiContainer);

        if (window.innerWidth < 660) {
            scaleX =1.61;
            scaleY = 0.61;
        }

        // Dynamically calculate ASCII width based on image width (pixels)
        const imageWidth = image.width;
        const imageHeight = image.height;

        // Adjust ASCII width based on desired resolution and scale factor
        const asciiWidth = Math.floor(imageWidth / scaleX); // Reduce width to create more manageable ASCII resolution
        const asciiHeight = Math.floor(asciiWidth * (imageHeight / imageWidth) * scaleY); // Adjust height based on aspect ratio

        canvas.width = asciiWidth;
        canvas.height = asciiHeight;

        // Draw image to canvas with scaled down resolution
        ctx.drawImage(image, 0, 0, asciiWidth, asciiHeight);

        // Get image data from the canvas
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Convert the image to grayscale ASCII art
        const originalAsciiArt = convertToAscii(imageData, 1); // Initial brightness level is 1 (normal brightness)
        asciiContainer.innerHTML = originalAsciiArt; // Use innerHTML to inject the ASCII characters

        let animationInterval = null; // Track the current animation interval

        // Add hover event to animate brightness in steps
        asciiContainer.addEventListener('mouseenter', function () {
            if (!isTouchDevice()) {
                clearInterval(animationInterval); // Clear any existing animation interval
                animateBrightness(imageData, asciiContainer, 1, -1, 700); // Animate brightness to disappear
            }
        });


        // Add event to revert back to original ASCII and brightness
        asciiContainer.addEventListener('mouseleave', function () {
            if (!isTouchDevice()) {
                clearInterval(animationInterval); // Clear any existing animation interval
                animateBrightness(imageData, asciiContainer, -1, 1, 300); // Revert back to normal brightness
            }
        });

        asciiContainer.addEventListener('click', function () {
            if (isTouchDevice()) {
                clearInterval(animationInterval); // Clear any existing animation interval
                animateBrightness(imageData, asciiContainer, 1, -1, 700); // Animate brightness to disappear
            }
        });

        document.addEventListener('click', function (e) {
            if (isTouchDevice() && e.target !== asciiContainer && !container.current.classList.contains('section-active')) {
                clearInterval(animationInterval); // Clear any existing animation interval
                animateBrightness(imageData, asciiContainer, -1, 1, 300); // Revert back to normal brightness
            }
        });

        window.addEventListener('scroll', function (e) {
            if (isTouchDevice() && window.scrollY + window.outerHeight/2 > container.current.offsetTop && !container.current.classList.contains('section-active')) {
                container.current.classList.add('section-active');
                clearInterval(animationInterval); // Clear any existing animation interval
                animateBrightness(imageData, asciiContainer, 1, -1, 300); // Revert back to normal brightness
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth < 660) {
                scaleX =1.61;
                scaleY = 0.61;
            }
            const imageWidth = image.width;
            const imageHeight = image.height;
            const asciiWidth = Math.floor(imageWidth / scaleX); // Reduce width to create more manageable ASCII resolution
            const asciiHeight = Math.floor(asciiWidth * (imageHeight / imageWidth) * scaleY); // Adjust height based on aspect ratio
            canvas.width = asciiWidth;
            canvas.height = asciiHeight;
            ctx.drawImage(image, 0, 0, asciiWidth, asciiHeight);
            imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const asciiArt = convertToAscii(imageData, 1);
            asciiContainer.innerHTML = asciiArt;
        });

        // Function to animate brightness gradually from start to end level
        function animateBrightness(imageData, container, startLevel, endLevel, duration) {
            const steps = 30; // Number of animation steps
            const stepDuration = duration / steps; // Duration for each step
            let currentStep = 0;

            const isBrightening = startLevel < endLevel; // Determine if we are brightening or dimming

            // Clear the previous interval before starting a new one
            animationInterval = setInterval(() => {
                currentStep++;

                // Use linear interpolation for brightness progression
                const progress = currentStep / steps;
                const brightnessLevel = startLevel + (endLevel - startLevel) * progress;

                // If we are brightening (to reveal the image), convert all to spaces at a certain threshold
                const asciiArt = convertToAscii(imageData, brightnessLevel, progress, isBrightening);
                container.innerHTML = asciiArt;

                // Stop the interval when animation completes
                if (currentStep >= steps) {
                    clearInterval(animationInterval);
                }
            }, stepDuration);
        }

        // Function to convert image data to ASCII art with adjustable brightness
        function convertToAscii(imageData, brightnessLevel, progress, isBrightening) {
            // 4-bit grayscale ASCII characters set from dark to light
            // const asciiChars = ['N', 'N', 'N', '%', '?', '*', '+', ';', ':', '.', ' '].reverse(); // More space for lighter effect
            const asciiChars = ['N', 'N', 'N', '%', '?', '*', '+', ';', ':', '.', ' '].reverse();
            const pixels = imageData.data;
            let ascii = '';

            for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < imageData.width; x++) {
                    const index = (y * imageData.width + x) * 4;
                    let r = pixels[index];
                    let g = pixels[index + 1];
                    let b = pixels[index + 2];

                    // Convert to grayscale by averaging the RGB values
                    let brightness = (r + g + b) / 3;

                    // Adjust brightness based on the current animation step
                    brightness *= brightnessLevel; // Scale brightness

                    // Clamp brightness to ensure it stays within valid range
                    brightness = Math.max(0, Math.min(255, brightness));

                    // If progress is above a certain threshold, turn everything into spaces
                    if (progress >= 0.8 && !isBrightening) {
                        ascii += ' '; // Turn into space to reveal the image
                    } else {
                        const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
                        ascii += asciiChars[charIndex];
                    }
                }
                ascii += '\n'; // Newline for each row of characters
            }
            return ascii;
        }
    }, [imageLoaded]);

    

  return (
    <div
      className="ascii-image-container"
      ref={container}
    //   onMouseEnter={() => !isTouchDevice() && animateBrightness(1, -1, 700)}
    //   onMouseLeave={() => !isTouchDevice() && animateBrightness(-1, 1, 300)}
    //   onClick={() => isTouchDevice() && animateBrightness(1, -1, 700)}
    >
      {/* <StaticImage
        className="ascii-image"
        src="../src/images/OverhaulOffice.jpg"
        alt="The OverhaulMedia Boardroom"
        placeholder="blurred"
      /> */}
      {imageChild}
    </div>
  );
};

export default AsciiArt;
