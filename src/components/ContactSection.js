"use client"

import { useState } from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap"
import { motion } from "framer-motion"
import { Fade, Slide } from "react-awesome-reveal"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const consultationSteps = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  ]

  return (
    <section className="contact-section py-5">
      <Container>
        <Fade triggerOnce>
          <div className="consultation-banner mb-5">
            <motion.span className="consultation-label" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Need Consultation?
            </motion.span>
          </div>
        </Fade>
        <Row>
          <Col lg={6}>
            <Slide direction="left" triggerOnce>
              <div className="contact-content">
                <motion.h2
                  className="contact-title"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Have A Project? We Would Love To Hear From You.
                </motion.h2>
                <div className="consultation-steps">
                  {consultationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="step-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ x: 10 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="step-number"
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {index + 1}
                      </motion.div>
                      <p className="step-text">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Slide>
          </Col>
          <Col lg={6}>
            <Slide direction="right" triggerOnce>
              <motion.div
                className="contact-form-container"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 className="form-title" whileHover={{ color: "#4c63d2" }} transition={{ duration: 0.3 }}>
                  Get In Touch With Us
                </motion.h3>
                <Form onSubmit={handleSubmit}>
                  {[
                    { name: "fullName", label: "Full name", type: "text" },
                    { name: "phoneNumber", label: "Phone Number", type: "tel" },
                    { name: "email", label: "Email", type: "email" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FormGroup>
                        <motion.div
                          animate={{
                            color: focusedField === field.name ? "#4c63d2" : "#333",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Label for={field.name}>{field.label}</Label>
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            required
                          />
                        </motion.div>
                      </FormGroup>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FormGroup>
                      <motion.div
                        animate={{
                          color: focusedField === "message" ? "#4c63d2" : "#333",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label for="message">Message</Label>
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Input
                          type="textarea"
                          name="message"
                          id="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </motion.div>
                    </FormGroup>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(76, 99, 210, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button type="submit" className="submit-button w-100">
                      Send Message
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-right-vGpUEu2lcmKBWbmCnK0f8OfOXv1CzJ.png"
                        alt="arrow"
                        className="ms-2"
                        style={{ width: "12px", height: "12px", filter: "invert(1)" }}
                      />
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
