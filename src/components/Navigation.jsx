function Navigation() {
	const links = ['about', 'work', 'contact'];

	return (
		<>
			<nav>
				<ul id='nav-menu' className='flex flex-row items-center h-full'>
					{links.forEach(link => {
						return (
							<>
								<li>
									<a
										className='block py-6 px-8 text-base-100 text-xl hover:font-semibold hover:text-secondary'
										href={`#${link}`}
									>
										{link}
									</a>
								</li>
							</>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Navigation
