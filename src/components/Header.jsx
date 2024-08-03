import { useState } from 'react'
import Navigation from './Navigation'

function Header() {
	const [active, setActive] = useState('home')

	return (
		<>
			<div className='fixed top-0 w-full flex flex-row items-stretch justify-between p-8 z-10'>
				<div className='clickable flex flex-row items-center gap-4'>
					<img src='/personal_logo_transparent.png' alt='personal logo' width='75' height='75' />
					<h1 className='text-xl font-bold text-base-100'>
						<a href='#home' onClick={() => setActive('home')}>
							al baker
						</a>
					</h1>
				</div>
				<Navigation active={active} setActive={setActive} />
			</div>
		</>
	)
}

export default Header
