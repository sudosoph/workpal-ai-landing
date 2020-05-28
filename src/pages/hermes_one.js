import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/hermes/workpal_iOS.png'
import get_started from '../images/hermes/get_started.png'
import hermes_logo from '../images/hermes/hermes_logo.png'

const HermesDesc = () => (
    <div className="Section">
      <div className="SectionGroup">
        <img className="screenshot" src={screenshot} />     
        <div className="section-info">
            <h3>An AI-Powered Friend and Coach</h3>
            <h1>Meet Workpal 👋</h1>
            <p>Workpal is here to help you do your best work and realize your goals. As many individuals and organizations are attempting to vis-à-vis interactions with others, Workpal is not only here to assist through the transition, but to 10x yourself and your wellbeing. Moreover, Workpal is actively working on Applied AI research on open-domain natural language generation and vocal biomarkers for non-invasive diagnostics.</p>
            <button className="get_started" />        
        </div>
      </div>                     
    </div>
)

export default HermesDesc
