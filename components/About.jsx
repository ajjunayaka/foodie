import '../styles/about.css'
const About = () => {
	return (
		<div >
			<div className="about-page-sec-1">
				<div className="img">
					<p>About Us</p>
					<div className="link">
						<a href="/home">Home</a>
						<a href="">About us</a>
					</div>
				</div>
			</div>
			<div className="about-page-sec-2">
				
				<img src="https://foodess.com/wp-content/uploads/2018/05/jennifer-pallian-650631-unsplash-1229x1536.jpg.webp" width="50%" height="100%" alt="" />
				<div className='content-card'>
					<span>About Stories.</span>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
					<div className="cards">
						<div className="card">
							<span>100</span>
							<p>Years of Experienced</p>
						</div>
						<div className="card">
							<span>200</span>
							<p>Foods</p>
						</div>
						<div className="card">
							<span>300</span>
							<p>Lifestyle</p>
						</div>
						<div className="card">
							<span>400</span>
							<p>Happy customers</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default About;