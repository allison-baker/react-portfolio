import './App.css'
import Header from './components/Header'
import ArrowLink from './components/ArrowLink'

function App() {
	// $('.clickable')
	// 	.addClass('pointer')
	// 	.on('mouseup.clickablediv', function (e) {
	// 		var link = $(this).find('a')

	// 		if (e.target == link[0] || !(e.which == 1 || e.which == 2)) {
	// 			return
	// 		}

	// 		e.preventDefault()
	// 		if (e.which == 2 || link.attr('target') == '_blank') {
	// 			window.open(link.attr('href'), '_blank')
	// 		} else {
	// 			window.location.href = link.attr('href')
	// 		}
	// 	})

	return (
		<>
			<Header />
			<main>
				<div id='home' className='h-screen flex flex-col justify-center bg-gradient'>
					<div className='w-full max-w-[1200px] mx-auto p-8 flex flex-col gap-6'>
						<h2 className='text-base-100 font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Welcome</h2>
						<p className='text-base-100 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
							my name is Allison, and I'm a front-end web developer.
						</p>
					</div>
					<ArrowLink direction='down' color='light' link='about' />
				</div>
				<div id='about' className='h-screen bg-base-100 p-8 relative'>
					<h2>about me</h2>
					<ArrowLink direction='down' color='dark' link='work' />
				</div>
				<div id='work' className='h-screen bg-gradient p-8 relative'>
					<h2>my work</h2>
					<ArrowLink direction='down' color='light' link='contact' />
				</div>
				<div id='contact' className='h-screen bg-base-100 p-8 relative'>
					<h2>contact me</h2>
					<ArrowLink direction='up' color='dark' link='home' />
				</div>
			</main>
		</>
	)
}

export default App
