import React, { useState, useEffect } from 'react';

const CalendlyBlock = ({ className }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Load the minimized state from localStorage (if exists)
    useEffect(() => {
        const savedMinimizedState = localStorage.getItem('calendlyMinimized');
        if (savedMinimizedState !== null) {
            setIsMinimized(JSON.parse(savedMinimizedState));
        }

        // Set a timeout to show the Calendly block after 10 seconds
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // 10 seconds

        // Load Calendly CSS and widget script
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            clearTimeout(timeout);
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Save the minimized state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('calendlyMinimized', JSON.stringify(isMinimized));
    }, [isMinimized]);

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/overhaulmatt/di-30-minute-call' });
        }
    };

    const handleClosePopup = (e) => {
        e.preventDefault();
        setIsMinimized(true);
    };

    const handleInquireClick = (e) => {
        e.preventDefault();
        setIsMinimized(false);
    };

    return (
        isVisible && ( // Only render the Calendly block when isVisible is true
            <div className={`calendly-block ${className}`}>
                <div className={`calendly-block-container ${isMinimized ? 'minimized' : ''}`}>
                    <p>Book a free discovery call or let’s grab a coffee.</p>
                    <div className="buttons">
                        <a href="#" onClick={handleCalendlyClick} className="btn-calendly">
                            Let’s do it!
                        </a>
                        <a href="#" onClick={handleClosePopup} className="btn-close">
                            No Thanks.
                        </a>
                    </div>
                </div>
                <button
                    className={`btn-inquire ${isMinimized ? '' : 'hidden'}`}
                    onClick={handleInquireClick}
                >
                    Inquire
                </button>
            </div>
        )
    );
};

export default CalendlyBlock;
