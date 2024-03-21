import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-container">
					<div>
						<h6 className="footer-title">Digital Agency</h6>
						<p className="footer-desc">
							Building digital products, <br /> brands &
							experience
						</p>
					</div>
					<div>
						<h6 className="footer-title">Resources</h6>
						<li className="footer-link">Guides</li>
						<li className="footer-link">Blog</li>
						<li className="footer-link">Customer Stories</li>
						<li className="footer-link">Glossery</li>
					</div>
					<div>
						<h6 className="footer-title">Company</h6>
						<li className="footer-link">About Us</li>
						<li className="footer-link">Careers</li>
						<li className="footer-link">partners</li>
						<li className="footer-link">Contact Us</li>
					</div>
					<div>
						<h6 className="footer-title">Social Media</h6>
						<li className="footer-link">LinkedIn</li>
						<li className="footer-link">Facebook</li>
						<li className="footer-link">Instagram</li>
						<li className="footer-link">Twitter</li>
					</div>
				</div>
				<p className="copyright">
					© Matheus. Todos os direitos reservados
				</p>
			</div>
		</div>
	);
};

export default Footer;
