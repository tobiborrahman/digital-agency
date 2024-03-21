import Banner from '@/components/Banner/Banner';
import Companies from '@/components/Companies/Companies';
import BrandingSection from '@/components/bramding-section/BrandingSection';
import CustomSection from '@/components/custom-section/CustomSection';
import CustomerSupport from '@/components/customer-support/CustomerSupport';
import Testimonials from '@/components/testimonials/Testimonials';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<Banner />
			<Companies />
			<BrandingSection />
			<CustomSection />
			<Testimonials />
			<CustomerSupport />
		</>
	);
};

export default HomePage;
