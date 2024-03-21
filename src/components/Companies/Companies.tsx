import Image from 'next/image';
import React from 'react';

const Companies = () => {
	return (
		<div className="company-container">
			<div>
				<p className="company-para">Trusted by 4,000+ companies</p>
				<div className="company">
					<div>
						<Image
							className="company-logo"
							src="/images/shopify.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div>
						<Image
							className="company-logo"
							src="/images/slack.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div>
						<Image
							className="company-logo"
							src="/images/dropbox.svg"
							alt="shopify logo"
							width={140}
							height={48}
						/>
					</div>
					<div>
						<Image
							className="company-logo"
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
