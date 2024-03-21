import Image from 'next/image';
import React from 'react';

const BrandingSection = () => {
	return (
		<div>
			<div>
				<div className="branding-container">
					<div>
						<Image
							className="branding-image"
							src="/images/branding-image.svg"
							alt=""
							width={450}
							height={450}
						/>
					</div>
					<div className="branding-desc-container">
						<div>
							<h1 className="sub-heading">
								Branding & Design system
							</h1>
						</div>
						<p className="sub-para">
							Commonly used in the graphic, print & publishing
							industries for previewing visual layout and mockups
						</p>
						<Image
							className="large-image"
							src="/images/arrow-right.svg"
							alt="arrow icon"
							width={22.23}
							height={12}
						/>

						<div className="small-image">
							<Image
								src="/images/arrow-down.svg"
								alt="arrow icon"
								width={20}
								height={25}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandingSection;
