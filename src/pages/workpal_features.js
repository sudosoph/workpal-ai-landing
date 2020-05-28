import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/hermes/iphone1.png'
import get_started from '../images/hermes/get_started.png'
import hermes_logo from '../images/hermes/hermes_logo.png'
import ChatIcon from "../components/svgs/chat"
import HeartIcon from "../components/svgs/heart"
import TimeIcon from "../components/svgs/time"

const WorkpalFeatures = () => (
    <div>
        <div className="section-work">
            <h3 className="header-work">Work smarter. Achieve your goals.</h3>
        </div>
        <div className="Section-Features">
            <div className="FeatureGroup">
                <div className="section-info">
                    <TimeIcon />  
                    <h3>Time, Tasks, and Goals</h3>
                    <h1>Time Management</h1>
                    <p>Time management helps you to reduce long-term stress by giving you a powerful set of tools based on proven frameworks on task prioritization, time-blocking, and goal setting. By leveraging AI/ML and Behavioral Science, Workpal helps you materialize your goals.</p>
                </div>
                <div className="section-info">
                    <HeartIcon />  
                    <h3>Stress, Physical, Mental Wellbeing</h3>
                    <h1>Personal Health</h1>
                    <p>You spend a lot of time at work, so it’s good to keep your good health in mind while you're there. Through proactive healthcare, deep learning, and conversational AI, Workpal will assist in helping you relieve stress and become a healthier version of yourself. </p>
                </div> 
                <div className="section-info">
                    <ChatIcon />  
                    <h3>Self Awareness, Habit Formation</h3>
                    <h1>Life Coaching</h1>
                    <p>Workpal is an AI-powered life coach, with the aim to help individuals focus on their present life, celebrate the wins of the past, suggest any necessary adjustments, and helps them move forward with realizing positive goals in their personal and professional life.</p>
                </div>
            </div>                     
        </div>
    </div>
)

export default WorkpalFeatures
