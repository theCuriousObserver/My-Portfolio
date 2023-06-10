import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // import timeline styles

const Resume = () => {
    return (
        <div className="resume" id="resume">
            <h1 className="resume-heading">Resume</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="February 2023 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Cyber Security Project Manager</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cyber Waves BV, Amsterdam, Netherlands</h4>
                    <p>
                        Description of your role and responsibilities.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Resume;
