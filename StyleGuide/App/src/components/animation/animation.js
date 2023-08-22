import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './animation.scss';

const Animations = () => {
	const [isAnimated, setIsAnimated] = useState(false);

	const animationProps = useSpring({
		to: {
			transform: isAnimated ? 'rotate(-90deg)' : 'rotate(0deg)',
			backgroundColor: isAnimated ? '#143872' : '#f68b1f',
		},
		config: {
			duration: 500,
			tension: 5000,
			friction: 5000,
		},
	});

	const handleToggleAnimation = () => {
		setIsAnimated(!isAnimated);
	};

	return (
		<>
			<div className="uc">
				<div className="uc_animation">
					<animated.div className="uc_animation_piece pieceOne" style={{ ...animationProps }} />
					<animated.div className="uc_animation_piece pieceTwo" style={{ ...animationProps }} />
					<animated.div className="uc_animation_piece pieceThree" style={{ ...animationProps }} />
				</div>
				<button onClick={handleToggleAnimation}>Toggle Animation</button>
			</div>
			
		</>
	);
}

export default Animations