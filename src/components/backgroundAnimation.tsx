import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const words = [
	'Github Actions',
	'Github',
	'Reactjs',
	'NextJs',
	'Javascript',
	'NodeJs',
	'Typescript',
];

export const BackgroundAnimation = () => (
	<div className="fixed inset-0 z-0 opacity-20">
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[5, 10, 10]} />

			{[...Array(105)].map((_, i) => {
				const randomIndex = Math.floor(Math.random() * words.length);
				const randomX = Math.random() * 10 - 5;
				const randomY = Math.random() * 10 - 5;
				const randomZ = Math.random() * 10 - 5;
				const randomRotationX = Math.random() * Math.PI;
				const randomRotationY = Math.random() * Math.PI;
				const randomRotationZ = Math.random() * Math.PI;

				return (
					<Text
						key={i}
						fontSize={0.5}
						position={[randomX, randomY, randomZ]}
						rotation={[
							randomRotationX,
							randomRotationY,
							randomRotationZ,
						]}
						color="#3B82F6"
					>
						{words[randomIndex]}
						<meshStandardMaterial
							transparent
							opacity={0.8}
							color="#3B82F6"
						/>
					</Text>
				);
			})}

			<OrbitControls enableZoom={false} autoRotate />
		</Canvas>
	</div>
);
