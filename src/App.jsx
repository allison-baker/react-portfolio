import './App.css'
import Header from './components/Header'

function App() {
	return (
		<>
			<Header />
			<main>
				<div id='home' className='h-screen flex flex-col justify-center bg-gradient'>
					<div className='w-full max-w-[1200px] mx-auto p-8 flex flex-col gap-6'>
						<h2 className='text-base-100 font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Welcome</h2>
						<p className='text-base-100 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl'>my name is Allison, and I'm a front-end web developer.</p>
					</div>
					<a className='bg-base-100 bg-opacity-15 text-base-100 absolute bottom-10 right-10 rounded-full p-4' href='#about'>
						ICON
					</a>
				</div>
				<div id='about' className='h-screen bg-base-100 p-8 relative'>
					<h2>about me</h2>
					<a className='bg-base-content bg-opacity-15 text-base-content absolute bottom-10 right-10 rounded-full p-4' href='#about'>
						ICON
					</a>
				</div>
				<div id='work' className='h-screen bg-gradient p-8 relative'>
					<h2>my work</h2>
					<a className='bg-base-100 bg-opacity-15 text-base-content absolute bottom-10 right-10 rounded-full p-4' href='#about'>
						ICON
					</a>
				</div>
				<div id='contact' className='h-screen bg-base-100 p-8 relative'>
					<h2>contact me</h2>
					<a className='bg-base-100 bg-opacity-15 text-base-100 absolute bottom-10 right-10 rounded-full p-4' href='#about'>
						ICON
					</a>
				</div>
			</main>
		</>
	)
}

export default App
