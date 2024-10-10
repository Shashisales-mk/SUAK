import React, { useState, useEffect, useRef } from 'react';

const JobCard = ({ job }) => {
    const [isShareOptionsVisible, setShareOptionsVisible] = useState(false);
    const shareOptionsRef = useRef(null);

    const jobUrl =` ${window.location.origin}/job-detail/${job._id}`;

    const toggleShareOptions = () => {
        setShareOptionsVisible(prev => !prev);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jobUrl).then(() => {
            alert('Job link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
        setShareOptionsVisible(false);
    };

    const sendEmail = () => {
        const subject = encodeURIComponent('Check out this job');
        const body = encodeURIComponent(`I found this interesting job: ${jobUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        setShareOptionsVisible(false);
    };

    // Close share options when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shareOptionsRef.current && !shareOptionsRef.current.contains(event.target)) {
                setShareOptionsVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <a className="learn-more" href={`/job-detail/${job._id}`}>Learn More</a>
            
            <button className="share-btn" onClick={toggleShareOptions}>
                Share
            </button>

            {isShareOptionsVisible && (
                <div className="share-options" ref={shareOptionsRef} style={{ display: 'flex' }}>
                    <button className="share-option" data-action="copy" onClick={copyToClipboard}>Copy Link</button>
                    <button className="share-option" data-action="email" onClick={sendEmail}>Email</button>
                </div>
            )}
        </div>
    );
};

export default JobCard;