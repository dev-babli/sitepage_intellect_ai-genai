"use client"

import { Container, Row, Col, Button } from "reactstrap"
import { motion } from "framer-motion"
import { Fade, Slide } from "react-awesome-reveal"

const FeaturesSection = () => {
  const features = [
    "Comprehensive UI/UX Assessment",
    "Deep Contextual Research and 360° Planning",
    "Wireframing & Prototyping",
  ]

  const serviceCards = [
    {
      title: "GenAI & LLM Integration",
      subtitle: "With over 10 year of experience B2C intelligent Sector",
      icon: "/ai-brain.png",
    },
    {
      title: "Agentic AI & AI Agents",
      subtitle: "Intelligent Sector",
      icon: "/ai-assistant.png",
    },
    {
      title: "NLP & Computer Vision",
      subtitle: "With over 10 year of experience B2C intelligent Sector",
      icon: "/vision.png",
    },
    {
      title: "ML Engineering & MLOps",
      subtitle: "With over 10 year of experience B2C intelligent Sector",
      icon: "/prompt-engineering.png",
    },
    {
      title: "AI Advisory & Responsible AI",
      subtitle: "With over 10 year of experience B2C intelligent Sector",
      icon: "/chatbot.png",
    },
    {
      title: "AI Automation (AI + RPA)",
      subtitle: "With over 10 year of experience B2C intelligent Sector",
      icon: "/automation.png",
    },
  ]

  return (
    <section className="features-section py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <Fade cascade damping={0.1} triggerOnce>
              <Row>
                {serviceCards.map((card, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <motion.div
                      className="feature-card"
                      whileHover={{
                        y: -8,
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div
                        className="feature-icon"
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: "#f5f6fa",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          margin: "0 auto 12px auto"
                        }}
                      >
                        <motion.img
                          src={card.icon || "/placeholder.svg"}
                          alt={card.title}
                          className="feature-icon-img"
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: "contain",
                            display: "block"
                          }}
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <motion.h5
                        className="feature-card-title"
                        whileHover={{ color: "#4c63d2" }}
                        transition={{ duration: 0.3 }}
                      >
                        {card.title}
                      </motion.h5>
                      <p className="feature-card-subtitle">{card.subtitle}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Fade>
          </Col>
          <Col lg={6}>
            <Slide direction="right" triggerOnce>
              <div className="features-content">
                <motion.h2
                  className="features-title"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Harness the full potential of Artificial Intelligence to innovate, automate, and grow.
                </motion.h2>
                <motion.p
                  className="features-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium lorem rem
                  aperiam eaque ipsa quae abillo inventore veritatis quasi architecto.
                </motion.p>
                <div className="features-list">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="check-icon"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        ✓
                      </motion.span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 212, 170, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="view-services-btn">
                    View All Services
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-right-vGpUEu2lcmKBWbmCnK0f8OfOXv1CzJ.png"
                      alt="arrow"
                      className="ms-2"
                      style={{ width: "12px", height: "12px", filter: "invert(1)" }}
                    />
                  </Button>
                </motion.div>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesSection
