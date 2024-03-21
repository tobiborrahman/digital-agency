import Image from 'next/image';
import React from 'react';

const Banner = () => {
	return (
		<>
			<div className="banner-body">
				<div className="background"></div>
				<div className="container">
					<div className="banner-container">
						<div className="banner-desc">
							<h1 className="banner-title">
								Building digital products, brands & experience
							</h1>
							<p className="banner-para">
								digital agency is your online team management
								tool that easy and prompt
							</p>
							<button className="banner-btn">Contact Us</button>
						</div>
						<div className="image-container">
							<Image
								src="/images/banner-image.svg"
								alt="banner model"
								className="banner-image"
								width={445.5}
								height={450}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
