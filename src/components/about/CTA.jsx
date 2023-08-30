import React from 'react'
import CV from '../../assets/RavellCV.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary"> <h5>Download CV</h5></a>
    </div>
  )
}

export default CTA