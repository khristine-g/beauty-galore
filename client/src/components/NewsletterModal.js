import React, { useState } from 'react';
import '../NewsletterModal.css';

const NewsletterModal = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-image">
                    <img src="https://t4.ftcdn.net/jpg/05/39/14/79/360_F_539147967_q0oRyxFC266XAKNrnJfQ7e6o4kPblROE.jpg" alt="Newsletter" />
                </div>
                <div className="modal-text">
                    <h2>Sign Up to Our Newsletter</h2>
                    <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className="join-link">Join</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;
