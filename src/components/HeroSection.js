"use client"

import { Container, Row, Col, Button } from "reactstrap"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3",
      )

    // Floating animation for the hero section
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className="hero-bg-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: "ai.webp",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px) brightness(0.95)',
        }}
      />
      <div className="hero-background" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-overlay"></div>
        <Container className="hero-container">
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <div className="hero-content" ref={heroRef}>
                <motion.h1
                  className="hero-title"
                  ref={titleRef}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AI & Gen AI Consulting
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  ref={subtitleRef}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Build. Evaluate. Generate.
                </motion.p>
                <motion.div
                  ref={buttonRef}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 167, 38, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="expert-button">TALK TO OUR EXPERTS</Button>
                </motion.div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-spacer"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection
