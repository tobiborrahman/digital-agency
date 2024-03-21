import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
	return (
		<div className="testimonial-section">
			<div className="container">
				<div className="test-container">
					<div className="test-header-desc">
						<div className="">
							<p className="test-para">TESTIMONIALS</p>
							<h1 className="sub-heading test-heading">
								Read What Other have to Say
							</h1>
						</div>
					</div>
					<div className="card-container">
						<div className="card">
							<div>
								<Image
									className="card-image"
									src="/images/card-1.svg"
									alt="card image 1"
									width={130}
									height={130}
								/>
							</div>
							<h5 className="card-title">Andrew Rathore</h5>
							<p className="card-desc">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nunc ullamcorper scelerisque
								mi, in malesuada felis malesuada vel.{' '}
							</p>
						</div>
						<div className="card">
							<div>
								<Image
									className="card-image"
									src="/images/card-2.svg"
									alt="card image 1"
									width={130}
									height={130}
								/>
							</div>
							<h5 className="card-title">Vera Duncan</h5>
							<p className="card-desc">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nunc ullamcorper scelerisque
								mi, in malesuada felis malesuada vel.{' '}
							</p>
						</div>
						<div className="card">
							<div>
								<Image
									className="card-image"
									src="/images/card-3.svg"
									alt="card image 1"
									width={130}
									height={130}
								/>
							</div>
							<h5 className="card-title">Mark Smith</h5>
							<p className="card-desc">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nunc ullamcorper scelerisque
								mi, in malesuada felis malesuada vel.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
