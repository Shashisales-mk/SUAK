import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import './ThankYouPage.css'
import { Link } from 'react-router-dom'

const ThankYouPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="thank-you-container">
      {/* Animated background lines */}
      <div className="background-lines">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="line"
            style={{
              top: `${i * 5}%`,
              animationDuration: `${10 + i * 0.5}s`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#000' : '#ff7000'
                }, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="content-card">
        <h1 className="title">Thank You!</h1>
        <p className="message">Your job application has been successfully submitted.</p>
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }
          }}
          className="emoji"
        >
          🎉
        </motion.div>
        <p className="sub-message">We'll be in touch soon. Good luck!</p>
        <Link to="/" className='bak-button'>


          Back to Home

        </Link>
      </div>
    </div>
  )
}

export default ThankYouPage