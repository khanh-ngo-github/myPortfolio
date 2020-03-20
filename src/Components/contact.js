import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Khanh Ngo</h2>
						<img
							src="https://www.shareicon.net/data/256x256/2016/05/24/770105_man_512x512.png"
							alt="avatar"
							style={{ height: '250px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Full Stack Java Developer with over 19 years of IT experience in fast paced enterprise
							environments in financial, insurance, travel, and e-Commerce. A productive team player
							focused on open communication to maximize efficiency. Experience working in a fast paced,
							culturally diverse environments spanning multiple time zones, roles, and functions. Very
							good trouble shooting skills, excellent work ethics, and strong multiple tasking skills.
							Experience practicing agile software development concepts and processes. Demonstrated
							willingness to take action to build and develop new skills. Proven ability to learn, grasp,
							and quickly utilize new concepts.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										(857) 600-8439
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-envelope" aria-hidden="true" />
										khan.ngo@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-skype" aria-hidden="true" />
										khan.ngo
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
