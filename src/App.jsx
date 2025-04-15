import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

export default function App() {
    const [showSurprise, setShowSurprise] = useState(false);

    const handleReveal = () => {
        setShowSurprise(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6 text-center font-sans">
            <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
            <audio autoPlay loop>
                <source src="happy-birthday-314197.mp3" type="audio/mpeg" />
            </audio>

            <h1 className="text-5xl sm:text-6xl font-bold text-pink-700 mb-4 animate-bounce" style={{ fontFamily: 'Great Vibes, cursive' }}>
                🎉 Happy Birthday, Kamal 💖
            </h1>

            <p className="max-w-xl text-lg sm:text-xl text-gray-800 mb-6">
                Today is your day, and even though we may be miles apart, my heart is right there with you. Click below for a little surprise! 💌
            </p>

            {!showSurprise ? (
                <button
                    className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition-all duration-300"
                    onClick={handleReveal}
                >
                    🎁 Tap to Reveal
                </button>
            ) : (
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl animate-fade-in">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">To the one who holds my heart,</h2>
                    <p className="text-gray-700 leading-relaxed">
                        On this special day, I want you to know just how deeply you are loved. Your laughter is my favorite sound, your smile my favorite sight, and your happiness my greatest wish.
                        <br /><br />
                        Even from afar, I feel so close to you. I think of all the beautiful memories we will make and all the dreams we’ve yet to live. You make my life brighter just by being in it, and I can’t wait for the day I get to say all of this to you in person.
                        <br /><br />
                        May this birthday be the beginning of a year filled with love, adventure, and everything your heart desires.
                    </p>
                </div>
            )}

            <footer className="mt-10 text-sm text-gray-600">
                Built with 💗 just for you
            </footer>
        </div>
    );
}
