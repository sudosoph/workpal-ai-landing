import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/hermes/screenshot_2.png'
import get_started from '../images/hermes/get_started.png'
import mta_operators from '../images/hermes/operators.png'

const HermesWorkers = () => (
    <div className="Section">
      <div className="SectionGroup">
        <div className="section-info">
            <div className="section-right">
                <img className="hermes" src={mta_operators} />   
                <h3>Supportive + Empathetic</h3>
                <h1>MTA Employees 🚈</h1>
                <p>These are exceptional difficult times for all, but especially to our employees. Hermes will help by checking in on a daily basis, providing updates on COVID, and connecting you to the right resources. Hermes will also check-in on your symptoms and whether you're coming to work. </p>
                <button className="get_started" />    
            </div>    
        </div>
        <img className="screenshot" src={screenshot} />     
      </div>                     
    </div>
)

export default HermesWorkers
