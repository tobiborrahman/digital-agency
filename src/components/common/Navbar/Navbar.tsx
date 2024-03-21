import Image from 'next/image';

const Navbar = () => {
	return (
		<section className="container">
			<nav className="navbar">
				<div>
					<h2 className="logo">Digital Agency</h2>
				</div>

				<div className="menu-icon">
					<Image
						src="/images/menu.svg"
						alt="menu icon"
						width={20}
						height={15.595}
					/>
				</div>

				<ul className="list-items">
					<li>Home</li>
					<li>About</li>
					<li>Testimonials</li>
					<li>Contact</li>
				</ul>
			</nav>
		</section>
	);
};

export default Navbar;
