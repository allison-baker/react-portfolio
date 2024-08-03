import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function ArrowLink({ direction, color, link }) {
	const colors = {
		dark: 'bg-base-content text-base-content',
		light: 'bg-base-100 text-base-100',
	}
    const arrows = {
        up: faArrowUp,
        down: faArrowDown
    }

	return (
		<>
			<a
				className={`${colors[color]} bg-opacity-15 absolute bottom-10 right-10 rounded-full w-12 h-12 flex items-center justify-center`}
				href={`#${link}`}
			>
				<FontAwesomeIcon icon={arrows[direction]} size='lg' />
			</a>
		</>
	)
}

export default ArrowLink
