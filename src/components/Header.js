"use client"

import { Navbar, Nav, Container, Button } from "reactstrap"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      <motion.div
        className="top-banner"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2">
            <span className="text-white small">
              Get 20% Off Your First Month of DevOps & Cloud Services! Limited Time Offer.
            </span>
            <motion.a
              href="#"
              className="text-warning text-decoration-none small fw-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Your Discount Now!
            </motion.a>
          </div>
        </Container>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar className="custom-navbar" expand="lg">
          <Container>
            <motion.div
              className="d-flex align-items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="logo-container me-3">
                <motion.div
                  className="logo-circle"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="logo-inner"></div>
                </motion.div>
              </div>
              <span className="navbar-brand-text">INTELLECTT</span>
            </motion.div>
            <Nav className="ms-auto d-flex align-items-center" navbar>
              {["Company", "Services", "Industries", "Insights", "Careers", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  className="nav-item dropdown me-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="nav-link">
                    {item} <i className="fas fa-chevron-down ms-1"></i>
                  </span>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="cta-button">
                  Let's talk
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-right-vGpUEu2lcmKBWbmCnK0f8OfOXv1CzJ.png"
                    alt="arrow"
                    className="ms-2"
                    style={{ width: "12px", height: "12px", filter: "invert(1)" }}
                  />
                </Button>
              </motion.div>
            </Nav>
          </Container>
        </Navbar>
      </motion.div>
    </>
  )
}

export default Header
