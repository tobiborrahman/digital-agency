import Image from 'next/image';
import React from 'react';

const CustomSection = () => {
	return (
		<div>
			<div>
				<div className="custom-container">
					<div>
						<Image
							src="/images/custom-image.svg"
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
							src="/images/arrow-right.svg"
							alt="arrow icon"
							width={22.23}
							height={12}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomSection;
