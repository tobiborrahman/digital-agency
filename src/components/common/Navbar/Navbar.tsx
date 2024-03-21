import Image from 'next/image';

const Navbar = () => {
	return (
		<header className="header-section">
			<div className="nav-container">
				<div className="container flex-nav">
					<nav className="navbar">
						<div>
							<h2 className="logo">Digital Agency</h2>
						</div>

						<div>
							<div className="menu-icon">
								<Image
									src="/images/menu.svg"
									alt="menu icon"
									width={20}
									height={15.595}
								/>
							</div>

							<div className="nav-links">
								<ul className="list-items">
									<li>Home</li>
									<li>About</li>
									<li>Testimonials</li>
									<li>Contact</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
