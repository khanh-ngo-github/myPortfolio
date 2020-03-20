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
					<Cell col={2}>
						<h2 style={{ paddingTop: '4em' }}>Khanh Ngo</h2>
						<hr style={{ borderTop: '3px solid #833fb2', width: '25%' }} />
						<p />
						<hr style={{ borderTop: '3px solid #833fb2', width: '25%' }} />
					</Cell>
					<Cell className="resume-right-col" col={10}>
						<h2>Training</h2>
						<Education
							startYear="April 2019"
							endYear="August 2019"
							location="Cambridge, MA"
							schoolName="Platform by Per Scholas"
							schoolDescription="Training covered exploration on how to be efficient in Agile-Scrum project methodologies using Jira. 
              Managed databases requiring SQL and learned how to install, configure, connect, query with MariaDB.
              Additional topics included collections, basic I/O, JDBC, JPA, and Spring MVC."
						/>

						<Education
							startYear="March 2017"
							endYear="June 2017"
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
							startYear="Febrary 2020"
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
							jobDescription="
							 Monitor, troubleshoot, and triage system health and database backups related issues
							 Troubleshoot issues across the stack (hardware, network, applications, database, storage)
							 Implemented production changes while adhering to standardized change control protocols
							 Utilized APM tools to monitor, track trends, and proposed solutions to recurring issues"
						/>

						<Experience
							startYear="June 2018"
							endYear="September 2019"
							location="Wakefield, MA"
							jobName="Vestmark"
							jobTitle="Software Application Support Engineer / Java developer"
							jobDescription="
							 Ensure durability, reliability, and efficiency of all applications
							 Work and collaborate with all stakeholders across the company
							 Reproduce customer bug reports for detailed troubleshooting and analysis
							 Identify and help implement opportunities for automation and operational efficiencies"
						/>

						<h3>Liberty Mutual Insurance Group (2011 2018)</h3>
						<Experience
							startYear="June 2018"
							endYear="September 2019"
							location="Boston, MA"
							jobName=""
							jobTitle="GoForCode Software Developer"
							jobDescription=" Successfully completed Web front-end training program with General Assembly in Boston, MA
 Contributed to efforts to port code from Dojo to React
							 Participated in efforts to transform the renewal experience for personal insurance policies"
						/>

						<Experience
							startYear="January 2013"
							endYear="October 2016"
							location="Boston, MA"
							jobName="Performance Team"
							jobTitle="Senior Software Systems Engineer"
							jobDescription="
							 Designed clear, comprehensive system, technical and infrastructure solutions in the monitoring space, that supported current and future direction
							 Reviewed major infrastructure designs from a monitoring perspective to ensure consistency, maintainability
							and flexibility with respect to overall system, technical and product architectures within a market
							 Worked effectively with senior systems engineers, developers, software owners (IT and business customers),
							production support teams, project managers, and senior managers
							"
						/>

						<Experience
							startYear="October 2011"
							endYear="January 2013"
							location="Boston, MA"
							jobName="Middleware Team "
							jobTitle="Senior Application Systems Engineer"
							jobDescription="
							 Partnered with application development teams to build and configure environments
							 Provided audit and compliance support for all middleware environments
							 Worked from specifications to develop or modify moderately complex middleware products
							 Participated in 24x7 on-call support working closely with other baseline teams to resolve issues
							 Performed related duties, such as documentation and metrics, as requested or assigned
							"
						/>
						<h3>State Street Corporation (2000 - 2011)</h3>
						<Experience
							startYear="November 2008"
							endYear="October 2011"
							location="Boston, MA"
							jobName=""
							jobTitle="Application Support | Junior Database Administrator"
							jobDescription="
							 Maintained, monitored, and supported UNIX/Linux Apps with Oracle Database servers
							 Deployment manager for application and database releases and upgrades
							 Project manager for system maintenance and upgrades
							"
						/>

						<Experience
							startYear="September 2007"
							endYear="November 2008"
							location="Boston, MA"
							jobName=""
							jobTitle="Trade Application Engineer"
							jobDescription="
							 Supported and maintained trading applications and infrastructure
							 Monitored electronic trade and FIX activities for immediate mitigation and resolution
							 Worked with Trading Desk, Market, and Middle Office to resolve any trade issues
							"
						/>

						<Experience
							startYear="September 2004"
							endYear="September 2007"
							location="Boston, MA"
							jobName="Data Center Operations"
							jobTitle="Night Shift Manager"
							jobDescription="
							 Technical Support Manager for the night shift Open Systems support in 24x7 environment
							 Provided technical support to administrators, developers, as well as internal and external clients
							 Responsible for staff selection, training and development, and performance reviews
							 Maintained staffing and resource management for major datacenters in Massachusetts
							 Problem management, post mortem analysis, and root cause analysis
							"
						/>

						<Experience
							startYear="September 2004"
							endYear="September 2007"
							location="Quincy, MA"
							jobName=""
							jobTitle="Systems Administrator | Deployment Manager"
							jobDescription="
							 Deployment Manager for Digital Report Library using IBM Rational ClearCase / ClearQuest MultiSite
							 Provided third tier support for real-time data delivery application
							 Business Continuity Manager (BCM) representing DRL development team
							"
						/>

						<Experience
							startYear="June 2001"
							endYear="August 2003"
							location="Westwood, MA"
							jobName=""
							jobTitle="Unix/NT Systems Administrator"
							jobDescription="
							 Provided third tier support for an enterprise level online data delivery application in 24x7 environment
							 Supported NT/Unix servers, web servers, Crystal Reporting application
							 Ensured all service level agreements are met for all global clients
							 Created and maintained shell and Perl scripts and AutoSys jobs for automation
							"
						/>

						<Experience
							startYear="April 2000"
							endYear="June 2001"
							location="Quincy, MA"
							jobName="Network Operating Center (NOC) "
							jobTitle="Communications Analyst"
							jobDescription="
							 Supported over 6,000 Solaris, AIX, HP UNIX/NT enterprise servers and applications world wide
							 Monitored system health and application functions
							 Active involvement in problem diagnosis, escalation, and resolution
							"
						/>

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
