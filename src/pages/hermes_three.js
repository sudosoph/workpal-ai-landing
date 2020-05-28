import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/hermes/screenshot_3.png'
import get_started from '../images/hermes/get_started.png'
import health_prof from '../images/hermes/healthprof.png'

const HermesMTA = () => (
    <div className="Section">
      <div className="SectionGroup">
        <img className="screenshot" src={screenshot} />     
        <div className="section-info">
            <img className="hermes" src={health_prof} />     
            <h3>Protective + Friendly</h3>
            <h1>NYC Frontline Workers 🦸</h1>
            <p>Heroes of NYC, we thank you for your courage and fight. Hermes, an AI deity, is here to help you through this crisis to make your days a little bit easier. Emotional support, encouragement, check-ins on how you're feeling, COVID updates, and free resources.</p>
            <button className="get_started" />        
        </div>
      </div>                     
    </div>
)

export default HermesMTA
