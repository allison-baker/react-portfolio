function Navigation({ active, setActive }) {
	const classes = {
		active: 'block py-6 px-8 text-secondary text-xl',
		inactive: 'block py-6 px-8 text-base-100 text-xl',
	}
	const links = ['about', 'work', 'contact']

	return (
		<>
			<nav>
				<ul className='flex flex-row items-center h-full'>
					{links.map((link) => {
						return (
							<li key={link}>
								<a
									className={link === active ? classes.active : classes.inactive}
									href={`#${link}`}
									onClick={() => {
										setActive(link)
									}}
								>
									{link}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Navigation
