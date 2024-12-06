import React, {useState, useEffect} from 'react';

const CalendlyBlock = ({className}) => {
    const [showCalendly, setShowCalendly] = useState(true);

    useEffect(() => {
        document.cookie = "calendlyClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        // Check if the cookie is set
        const calendlyClosed = document.cookie.split('; ').find(row => row.startsWith('calendlyClosed='));
        if (calendlyClosed) {
            setShowCalendly(false);
        }

        // Load the Calendly CSS
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    
        // Load the Calendly widget script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            // Clean up the script and link when the component unmounts
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);
    
    const handleCalendlyClick = (e) => {
        // Initialize the Calendly popup widget
        e.preventDefault();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: 'https://calendly.com/overhaulmatt/di-30-minute-call' });
        }
    };

    const handleClosePopup = (e) => {
        // Hide the Calendly block when the user clicks "No Thanks."
        e.preventDefault();
        document.cookie = `calendlyClosed=true; path=/;`;
        setShowCalendly(false);
    };

    return (
        showCalendly && (
            <div className={`calendly-block ${className}`}>
                <p>Book a free discovery call or let’s grab a coffee.</p>
                <div className="buttons">
                    <a href="#" onClick={handleCalendlyClick} className='btn-calendly'>
                        Let’s do it!
                    </a>
                    <a href="#" onClick={handleClosePopup} className='btn-close'>
                        No Thanks.
                    </a>
                </div>
            </div>
        )
    )
};

export default CalendlyBlock