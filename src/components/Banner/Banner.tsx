import Image from 'next/image';
import React from 'react';

const Banner = () => {
	return (
		<section>
			<div className="banner-container">
				<div className="banner-desc">
					<h1 className="banner-title">
						Building digital products, brands & experience
					</h1>
					<p className="banner-para">
						digital agency is your online team management tool that
						easy and prompt
					</p>
					<button className="banner-btn">Contact Us</button>
				</div>
				<div className="image-container">
					<Image
                    className='banner-image'
						src="/images/banner-image.svg"
						alt="banner image"
						width={400}
						height={550}
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
