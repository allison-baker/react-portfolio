function Navigation() {
	return (
		<>
			<nav>
				<ul className='flex flex-row items-center h-full'>
					<li>
						<a className='block py-6 px-8 text-base-100 hover:font-semibold hover:text-secondary' href='#about'>
							about
						</a>
					</li>
					<li>
						<a className='block py-6 px-8 text-base-100 hover:font-semibold hover:text-secondary' href='#work'>
							work
						</a>
					</li>
					<li>
						<a className='block py-6 px-8 text-base-100 hover:font-semibold hover:text-secondary' href='#contact'>
							contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
