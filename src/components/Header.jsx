import { useState } from 'react'
import Navigation from './Navigation'

function Header() {
	const [active, setActive] = useState('home')
    window.onscroll = function() {scrollTransition()}

    function scrollTransition() {
        if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
            document.querySelector('#main-header').className = 'scrolled-header'
            document.querySelector('#logo').src = '/personal_logo225.png'
        } else {
            document.querySelector('#main-header').className = 'initial-header'
            document.querySelector('#logo').src = '/personal_logo_transparent.png'
        }
    }

	return (
		<>
			<div id='main-header' className='initial-header'>
				<div className='clickable flex flex-row items-center gap-4'>
					<img id='logo' src='/personal_logo_transparent.png' alt='personal logo' width='75' height='75' />
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
