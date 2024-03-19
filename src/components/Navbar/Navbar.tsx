const Navbar = () => {
	return (
		<section className="container">
			<nav className="navbar">
				<div>
					<h2>Digital Agency</h2>
				</div>

				<div className="menu-icon">
					<svg viewBox="0 0 80 70" width="40" height="40">
						<rect width="70" height="10"></rect>
						<rect y="20" width="70" height="10"></rect>
						<rect y="40" width="70" height="10"></rect>
					</svg>
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
