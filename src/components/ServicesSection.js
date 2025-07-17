"use client"

import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Slide } from "react-awesome-reveal"

const ServicesSection = () => {
  const services = [
    {
      icon: "/arrow-right.png",
      title: "Guide you every step",
      description:
        "On the other hand we denounce righteous indignation and dislike men who beguiled demoralized by the charms pleasure",
    },
    {
      icon: "/arrow-right.png",
      title: "Unlock the power of AI",
      description:
        "On the other hand we denounce righteous indignation and dislike men who beguiled demoralized by the charms pleasure",
    },
    {
      icon: "/arrow-right.png",
      title: "Design intelligent workflows",
      description:
        "On the other hand we denounce righteous indignation and dislike men who beguiled demoralized by the charms pleasure",
    },
    {
      icon: "/arrow-right.png",
      title: "Deploy scalable AI solutions",
      description:
        "On the other hand we denounce righteous indignation and dislike men who beguiled demoralized by the charms pleasure",
    },
    {
      icon: "/arrow-right.png",
      title: "Drive growth and efficiency",
      description:
        "On the other hand we denounce righteous indignation and dislike men who beguiled demoralized by the charms pleasure",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="services-section py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <Slide direction="left" triggerOnce>
              <div className="services-header">
                <motion.h2
                  className="services-title"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Empower Your Business with AI & Generative AI Consulting
                </motion.h2>
              </div>
            </Slide>
          </Col>
          <Col lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Row>
                {services.map((service, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        y: -10,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      className="service-card"
                    >
                      <div className="service-icon" style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#f5f6fa', margin: '0 auto' }}>
                        <motion.div
                         // className="icon-circle"
                          //style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          whileHover={{
                            rotate: 360,
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <img
                            src={service.icon || "/placeholder.svg"}
                            alt={service.title}
                            className="service-icon-img"
                            style={{ width: 32, height: 32, objectFit: 'contain' }}
                          />
                        </motion.div>
                      </div>
                      <motion.h4
                        className="service-title"
                        whileHover={{ color: "#4c63d2" }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h4>
                      <p className="service-description">{service.description}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ServicesSection
