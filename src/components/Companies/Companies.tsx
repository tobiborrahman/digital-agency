import Image from 'next/image';
import React from 'react';

const Companies = () => {
	return (
		<div className="company-container">
			<div>
				<p className="company-para">Trusted by 4,000+ companies</p>
				<div className="company">
					<div className="company-logo">
						<Image
							src="/images/shopify.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div className="company-logo">
						<Image
							src="/images/slack.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div className="company-logo">
						<Image
							src="/images/dropbox.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div className="company-logo">
						<Image
							src="/images/zoom.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Companies;
