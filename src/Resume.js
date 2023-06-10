import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2003 - 2014"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Jeevan Marg Sophia Secondary School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Deoria, Uttar Pradesh, India</h4>
                    <p>
                        Matriculation, Indian School of Certificate Education (ICSE)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014 - 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Delhi Public School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ranchi, Jharkhand, India</h4>
                    <p>
                        Intermediate, Central Board of Secondary School (CBSE)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Kalinga Institute of Industrial Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bhubaneswar, Odisha, India</h4>
                    <p>
                        Bachelor of Technology, Information Technology
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">University of Birmingham</h3>
                    <h4 className="vertical-timeline-element-subtitle">Birmingham, United Kingdom</h4>
                    <p>
                        Master of Science, Cyber Security
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Resume;
