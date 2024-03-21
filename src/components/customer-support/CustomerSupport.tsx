import Image from 'next/image';
import React from 'react';

const CustomerSupport = () => {
	return (
		<div>
			<div className="customer-support">
				<div className="customer-support-container">
					<div>
						<Image
							src="/images/customer-support.svg"
							alt=""
							width={450}
							height={450}
						/>
					</div>
					<div className="branding-desc-container">
						<div>
							<h1 className="sub-heading customer-title">
								Be a part of the next big thing
							</h1>
						</div>
						<p className="sub-para customer-desc">
							We work with Brans, Startups, to SMEs. Colaborate
							for more impact and growt
						</p>
						<button className="banner-btn">Contact Us</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerSupport;
