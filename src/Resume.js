import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
    return (
        <div className="resume" id="resume">
            <h1>Resume</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="February 2023 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Cyber Security Project Manager</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cyber Waves BV, Amsterdam, Netherlands</h4>
                    <p>
                        Responsibilities:
                        <ul>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April 2020 - July 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Sales & Marketing Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">HighRadius, Hyderabad, India</h4>
                    <p>
                        Responsibilities:
                        <ul>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="December 2019 - January 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">WordPress Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">R&C Estate, Cairo, Egypt</h4>
                    <p>
                        Responsibilities:
                        <ul>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="September 2021 - September 2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science, Cyber Security</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Birmingham, Birmingham, United Kingdom</h4>
                    <p>
                        Achievements:
                        <ul>
                            <li>Achievement 1</li>
                            <li>Achievement 2</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2017 - May 2021"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Technology, Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha</h4>
                    <p>
                        Achievements:
                        <ul>
                            <li>Achievement 1</li>
                            <li>Achievement 2</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Resume;
