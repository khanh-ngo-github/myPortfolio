import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<h2 style={{ paddingTop: '4em' }}>Khanh Ngo</h2>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<p>
							Full Stack Java Developer with over 19 years of IT experience in fast paced enterprise
							environments in financial, insurance, travel, and e-Commerce. A productive team player
							focused on open communication to maximize efficiency. Experience working in a fast paced,
							culturally diverse environments spanning multiple time zones, roles, and functions. Very
							good trouble shooting skills, excellent work ethics, and strong multiple tasking skills.
							Experience practicing agile software development concepts and processes. Demonstrated
							willingness to take action to build and develop new skills. Proven ability to learn, grasp,
							and quickly utilize new concepts.
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Training</h2>
						<Education
							startYear="April"
							endYear="August, 2019"
							location="Cambridge, MA"
							schoolName="Platform by Per Scholas"
							schoolDescription="Training covered exploration on how to be efficient in Agile-Scrum project methodologies using Jira. 
              Managed databases requiring SQL and learned how to install, configure, connect, query with MariaDB.
              Additional topics included collections, basic I/O, JDBC, JPA, and Spring MVC."
						/>

						<Education
							startYear="March"
							endYear="June, 2017"
							location="Boston, MA"
							schoolName="General Assembly"
							schoolDescription="Full Stack web development program focusing on ES6 JavaScript, Bootstrap, JSON, jQuery, HTML5, 
                 CSS3, Ruby, Rails, Node, Express, Ember, React.js, MongoDB, Postgress, SQL, GIT, problem-solving, planning, modeling,
                 and maintaining applications with client-API architectures, as well as software engineering principles including design
                 patterns, sorting algorithms, big O notation, recursion, and data structures from linked lists to binary trees. 
                 This program requires work in teams and independently to build functioning sites that solve real- world business problems."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2>Experience</h2>

						<Experience
							startYear={2020}
							endYear="Present"
							jobName="TJX Companies"
							location="Framingham, MA"
							jobTitle="Web Operations Engineer"
							jobDescription="
              Support, monitor, and maintain critical web-functionality of 24/7 e-Commerce sites
              Leverage various Application Performance Management (APM) and web analytics tools
              "
						/>

						<Experience
							startYear="September 2019"
							endYear="February 2020"
							location="Boston, MA"
							jobName="Leisure Pass Group"
							jobTitle="Software Application Support Engineer / Java developer"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>

						<Experience
							startYear="June 2018"
							endYear="September 2019"
							location="Wakefield, MA"
							jobName="Vestmark"
							jobTitle="Software Application Support Engineer / Java developer"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>

						<h3>Liberty Mutual Insurance Group (2011 2018)</h3>
						<Experience
							startYear="June 2018"
							endYear="September 2019"
							location="Wakefield, MA"
							jobName="GoForCode Software Developer"
							jobTitle="GoForCode Software Developer"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<h3>Liberty Mutual Insurance Group (2011 2018)</h3>

						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<Skills skill="javascript" progress={100} />
						<Skills skill="HTML/CSS" progress={80} />
						<Skills skill="NodeJS" progress={50} />
						<Skills skill="React" progress={25} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
