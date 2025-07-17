"use client"

import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Fade, Slide } from "react-awesome-reveal"

const PartnershipsSection = () => {
  const partners = [
    {
      name: "Red Hat",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red_Hat_logo.svg-Pzc6pAfFhUDibn14uXHUWKY6TLfAgM.png",
    },
    {
      name: "Google Cloud",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-cloud-logo-png_seeklogo-336116-I6TeMvlZmgAJq8YY2WmcxIwAxZ9UP4.png",
    },
    {
      name: "AWS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon_Web_Services_Logo.svg-rsQ4CDqTXNEkM9ouCEyKwg37I08m08.png",
    },
    {
      name: "UiPath",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uipath-HVup0dyuQSIerp9x4WVeQ92TTAm9wF.png",
    },
    {
      name: "IBM",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibm-NOtv3IKxZPydZ70FjpG8VloUmF5YEf.png",
    },
    {
      name: "Salesforce",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Salesforce.com_logo.svg-6ewW740mwnoZYemOn6zn7fUGks4SHo.png",
    },
    {
      name: "SAP",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sap-JTRU51ebeKuDf37kuPkUTImBEgoZBa.png",
    },
    {
      name: "Automation Anywhere",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automation-MASzf7LQBPzcnKEFJPLIBX5alaTOTL.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="partnerships-section py-5">
      <Container>
        <Fade triggerOnce>
          <motion.h2
            className="text-center partnerships-title mb-5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Alliances & Partnerships
          </motion.h2>
        </Fade>
        <Row className="align-items-center">
          <Col lg={6}>
            <Slide direction="left" triggerOnce>
              <motion.div
                className="partnership-image"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/western-chinese-business-hong-kong.jpg-gDJ2q8XD9Zk1hBlVOn4yFWxpKjoshy.jpeg"
                  alt="Business Partnership"
                  className="img-fluid rounded"
                />
              </motion.div>
            </Slide>
          </Col>
          <Col lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Row>
                {partners.map((partner, index) => (
                  <Col md={4} sm={6} key={index} className="mb-4">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="partner-card text-center"
                    >
                      <div className="partner-logo">
                        <motion.img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="img-fluid partner-logo-img"
                          whileHover={{
                            scale: 1.1,
                            filter: "grayscale(0)",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
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

export default PartnershipsSection
