import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://www.shareicon.net/data/256x256/2016/05/24/770105_man_512x512.png"
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Full Stack Java Web Developer</h1>

							<hr />

							<p>HTML/CSS | Bootstrap | JavaScript | React | Java | MariaDB</p>

							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/khanh-ngo-8863193/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/khan-ngo" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Freecodecamp */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>

								{/* Youtube */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
