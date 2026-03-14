import { Linkedin, Github, Phone, MapPin } from 'lucide-react';

interface ContactMethod {
	icon: React.ReactNode;
	label: string;
	value: string;
	href?: string;
	color: string;
	glowColor: string;
}

export const orbitTagData = [
	{
		label: 'Next.js (App Router)',
		angle: 0,
		radius: 150,
		duration: 16,
		delay: 0,
		color: '#FFFFFF',
	},
	{
		label: 'React & React-Native',
		angle: 0,
		radius: 165,
		duration: 18,
		delay: -4,
		color: '#61DAFB',
	},
	{
		label: 'TypeScript (Strict)',
		angle: 0,
		radius: 185,
		duration: 22,
		delay: -8,
		color: '#3178C6',
	},
	{
		label: 'Expo',
		angle: 0,
		radius: 185,
		duration: 22,
		delay: -8,
		color: '#3178C6',
	},
	{
		label: 'TanStack Query',
		angle: 0,
		radius: 205,
		duration: 24,
		delay: -12,
		color: '#FF4154',
	},
	{
		label: 'Performance Optimization',
		angle: 0,
		radius: 225,
		duration: 28,
		delay: -16,
		color: '#22C55E',
	},
	{
		label: 'React Native / Expo',
		angle: 0,
		radius: 245,
		duration: 30,
		delay: -20,
		color: '#000020',
	},
	{
		label: 'API Integration',
		angle: 0,
		radius: 175,
		duration: 20,
		delay: -6,
		color: '#F59E0B',
	},
	{
		label: 'UI Architecture',
		angle: 0,
		radius: 260,
		duration: 34,
		delay: -24,
		color: '#8B5CF6',
	},
];

export const contactMethods: ContactMethod[] = [
	{
		icon: <Phone className="w-5 h-5" />,
		label: 'Phone',
		value: '+234 810 730 4148',
		href: 'tel:+2348107304148',
		color: '#68D391',
		glowColor: '#68D391',
	},
	{
		icon: <MapPin className="w-5 h-5" />,
		label: 'Location',
		value: 'Lagos, Nigeria',
		color: '#FC8181',
		glowColor: '#FC8181',
	},
];

export const socialLinks = [
	{
		icon: <Linkedin className="w-5 h-5" />,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/temitope-olowosuyi',
		bg: 'from-blue-600/20 to-blue-500/5',
		border: 'border-blue-500/30',
		hover: 'hover:border-blue-400/60',
		accent: '#60A5FA',
	},
	{
		icon: <Github className="w-5 h-5" />,
		label: 'GitHub',
		href: 'https://github.com/Topsurpass',
		bg: 'from-slate-600/20 to-slate-500/5',
		border: 'border-slate-500/30',
		hover: 'hover:border-slate-300/60',
		accent: '#CBD5E1',
	},
];

export const floatingDots = [
	{ delay: 0, x: '8%', y: '20%', size: 6 },
	{ delay: 1.2, x: '92%', y: '15%', size: 4 },
	{ delay: 0.6, x: '15%', y: '75%', size: 8 },
	{ delay: 2, x: '85%', y: '70%', size: 5 },
	{ delay: 1.5, x: '50%', y: '5%', size: 4 },
	{ delay: 0.3, x: '75%', y: '50%', size: 7 },
];

export const skills = [
	{
		name: 'React',
		category: 'Frontend',
		proficiency: 95,
		years: 4,
		color: '#61DAFB',
		description:
			'Component architecture, hooks, context, performance optimization',
		featured: true,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<ellipse
					cx="20"
					cy="20"
					rx="19"
					ry="7.6"
					stroke="#61DAFB"
					strokeWidth="1.5"
					fill="none"
				/>
				<ellipse
					cx="20"
					cy="20"
					rx="19"
					ry="7.6"
					stroke="#61DAFB"
					strokeWidth="1.5"
					fill="none"
					transform="rotate(60 20 20)"
				/>
				<ellipse
					cx="20"
					cy="20"
					rx="19"
					ry="7.6"
					stroke="#61DAFB"
					strokeWidth="1.5"
					fill="none"
					transform="rotate(120 20 20)"
				/>
				<circle cx="20" cy="20" r="2.5" fill="#61DAFB" />
			</svg>
		),
	},
	{
		name: 'TypeScript',
		category: 'Frontend',
		proficiency: 95,
		years: 3,
		color: '#3178C6',
		description: 'Type systems, generics, advanced patterns, strict mode',
		featured: true,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<rect
					x="2"
					y="2"
					width="36"
					height="36"
					rx="5"
					fill="#3178C6"
					opacity="0.15"
				/>
				<rect
					x="2"
					y="2"
					width="36"
					height="36"
					rx="5"
					stroke="#3178C6"
					strokeWidth="1.5"
					fill="none"
				/>
				<text
					x="7"
					y="28"
					fontFamily="monospace"
					fontSize="18"
					fontWeight="bold"
					fill="#3178C6"
				>
					TS
				</text>
			</svg>
		),
	},
	{
		name: 'Next.js',
		category: 'Frontend',
		proficiency: 95,
		years: 3,
		color: '#FFFFFF',
		description: 'App router, SSR, ISR, API routes',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<circle
					cx="20"
					cy="20"
					r="17"
					stroke="rgba(255,255,255,0.6)"
					strokeWidth="1.5"
					fill="none"
				/>
				<path
					d="M13 27V13l15 16"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M20 13h7"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		name: 'Tailwind CSS',
		category: 'Styling',
		proficiency: 96,
		years: 3,
		color: '#38BDF8',
		description: 'Utility-first styling, custom themes, responsive systems',
		featured: true,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<path
					d="M10 15c2-6.7 6.7-10 13.3-10C30 5 32.7 8.3 32.7 15c0 1.7-.3 3.3-.7 5 2-6.7 5.3-10 10-10"
					stroke="#38BDF8"
					strokeWidth="2"
					strokeLinecap="round"
					fill="none"
				/>
				<path
					d="M4 27c2-6.7 6.7-10 13.3-10C24 17 26.7 20.3 26.7 27c0 3.3-1.3 6.7-4 10-2-6.7-5.3-10-10-10"
					stroke="#38BDF8"
					strokeWidth="2"
					strokeLinecap="round"
					fill="none"
				/>
			</svg>
		),
	},
	{
		name: 'JavaScript',
		category: 'Frontend',
		proficiency: 95,
		years: 5,
		color: '#FCD34D',
		description: 'ES2024+, async/await, closures, design patterns',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<rect
					x="2"
					y="2"
					width="36"
					height="36"
					rx="5"
					fill="#FCD34D"
					opacity="0.12"
				/>
				<rect
					x="2"
					y="2"
					width="36"
					height="36"
					rx="5"
					stroke="#FCD34D"
					strokeWidth="1.5"
					fill="none"
				/>
				<text
					x="8"
					y="28"
					fontFamily="monospace"
					fontSize="17"
					fontWeight="bold"
					fill="#FCD34D"
				>
					JS
				</text>
			</svg>
		),
	},
	{
		name: 'React Native',
		category: 'Frontend',
		proficiency: 92,
		years: 2,
		color: '#C084FC',
		description:
			'Mobile development with React, Expo, performance optimization',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<circle
					cx="20"
					cy="8"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<circle
					cx="8"
					cy="28"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<circle
					cx="32"
					cy="28"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<path
					d="M20 12v6M14 26L20 18M26 26L20 18"
					stroke="#C084FC"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: 'CI/CD',
		category: 'DevOps',
		proficiency: 88,
		years: 2,
		color: '#C084FC',
		description: 'GitHub Actions, Vercel, automated testing pipelines',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<circle
					cx="20"
					cy="8"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<circle
					cx="8"
					cy="28"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<circle
					cx="32"
					cy="28"
					r="4"
					stroke="#C084FC"
					strokeWidth="1.5"
					fill="rgba(192,132,252,0.1)"
				/>
				<path
					d="M20 12v6M14 26L20 18M26 26L20 18"
					stroke="#C084FC"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: 'Node.js',
		category: 'Backend',
		proficiency: 90,
		years: 3,
		color: '#68D391',
		description: 'Express, REST APIs, middleware, async patterns',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<path
					d="M20 4L36 13.5V27L20 36L4 27V13.5L20 4Z"
					stroke="#68D391"
					strokeWidth="1.5"
					fill="rgba(104,211,145,0.1)"
				/>
				<path
					d="M20 10v20M12 15l8 5 8-5"
					stroke="#68D391"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: 'Python',
		category: 'Backend',
		proficiency: 90,
		years: 3,
		color: '#d7ce1f',
		description: 'Flask, Django, REST APIs, data processing',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<path
					d="M20 4L36 13.5V27L20 36L4 27V13.5L20 4Z"
					stroke="#d7ce1f"
					strokeWidth="1.5"
					fill="rgba(104,211,145,0.1)"
				/>
				<path
					d="M20 10v20M12 15l8 5 8-5"
					stroke="#68D391"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: 'REST APIs',
		category: 'Backend',
		proficiency: 95,
		years: 4,
		color: '#F6AD55',
		description: 'Design, integration, authentication, error handling',
		featured: false,
		svg: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-8 h-8"
			>
				<rect
					x="4"
					y="13"
					width="14"
					height="6"
					rx="3"
					stroke="#F6AD55"
					strokeWidth="1.5"
					fill="rgba(246,173,85,0.1)"
				/>
				<rect
					x="22"
					y="13"
					width="14"
					height="6"
					rx="3"
					stroke="#F6AD55"
					strokeWidth="1.5"
					fill="rgba(246,173,85,0.1)"
				/>
				<path
					d="M18 16h4M18 16l-2-3M18 16l-2 3"
					stroke="#F6AD55"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x="4"
					y="24"
					width="14"
					height="6"
					rx="3"
					stroke="#F6AD55"
					strokeWidth="1.2"
					fill="none"
					opacity="0.4"
				/>
				<rect
					x="22"
					y="3"
					width="14"
					height="6"
					rx="3"
					stroke="#F6AD55"
					strokeWidth="1.2"
					fill="none"
					opacity="0.4"
				/>
			</svg>
		),
	},
] as const;

export const projects = [
	{
		title: 'E-Learning Platform',
		description:
			'A full-stack e-learning platform with Next.js, TypeScript, Tailwind, and Django for backend. Features course browsing, signin,  exams and progress tracking.',
		tech: ['Next.js', 'TypeScript', 'Tailwind'],
		caseStudy: 1,
		link: 'https://intranext.vercel.app/',
		github: 'https://github.com/Topsurpass/intranext',
		accent: '#087fd4',
		accentAlt: '#3B82F6',
		tag: 'Full-Stack',
		featured: true,
		// Abstract SVG illustration
		illustration: (
			<svg
				viewBox="0 0 400 220"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				<rect width="400" height="220" fill="url(#g1)" rx="0" />
				<defs>
					<linearGradient
						id="g1"
						x1="0"
						y1="0"
						x2="400"
						y2="220"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#0d1929" />
						<stop offset="1" stopColor="#060d18" />
					</linearGradient>
				</defs>

				{/* Grid lines */}
				{[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
					<line
						key={x}
						x1={x}
						y1="0"
						x2={x}
						y2="220"
						stroke="rgba(99,179,237,0.06)"
						strokeWidth="1"
					/>
				))}
				{[44, 88, 132, 176].map((y) => (
					<line
						key={y}
						x1="0"
						y1={y}
						x2="400"
						y2={y}
						stroke="rgba(99,179,237,0.06)"
						strokeWidth="1"
					/>
				))}

				{/* ── Video Player Card ── */}
				<rect
					x="24"
					y="22"
					width="200"
					height="120"
					rx="8"
					fill="rgba(99,179,237,0.06)"
					stroke="rgba(99,179,237,0.2)"
					strokeWidth="1"
				/>
				{/* Player screen */}
				<rect
					x="24"
					y="22"
					width="200"
					height="88"
					rx="8"
					fill="rgba(10,20,40,0.8)"
				/>
				{/* Play button */}
				<circle
					cx="124"
					cy="66"
					r="18"
					fill="rgba(99,179,237,0.15)"
					stroke="rgba(99,179,237,0.4)"
					strokeWidth="1"
				/>
				<polygon
					points="119,58 119,74 135,66"
					fill="rgba(99,179,237,0.9)"
				/>
				{/* Progress bar */}
				<rect
					x="32"
					y="96"
					width="184"
					height="3"
					rx="2"
					fill="rgba(99,179,237,0.1)"
				/>
				<rect
					x="32"
					y="96"
					width="110"
					height="3"
					rx="2"
					fill="rgba(99,179,237,0.6)"
				/>
				{/* Scrubber dot */}
				<circle cx="142" cy="97.5" r="4" fill="#63B3ED" />
				{/* Time labels */}
				<text
					x="32"
					y="116"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.4)"
				>
					14:22
				</text>
				<text
					x="188"
					y="116"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.3)"
				>
					26:00
				</text>
				{/* Lesson title */}
				<rect
					x="32"
					y="120"
					width="100"
					height="6"
					rx="2"
					fill="rgba(99,179,237,0.12)"
				/>
				<rect
					x="32"
					y="130"
					width="65"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.07)"
				/>

				{/* ── Course Progress Panel ── */}
				<rect
					x="244"
					y="22"
					width="132"
					height="120"
					rx="8"
					fill="rgba(99,179,237,0.05)"
					stroke="rgba(99,179,237,0.18)"
					strokeWidth="1"
				/>
				<text
					x="256"
					y="42"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(99,179,237,0.5)"
				>
					MY COURSES
				</text>

				{/* Course 1 */}
				<rect
					x="256"
					y="50"
					width="14"
					height="14"
					rx="3"
					fill="rgba(99,179,237,0.15)"
				/>
				<text
					x="258"
					y="61"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(99,179,237,0.7)"
				>
					JS
				</text>
				<rect
					x="276"
					y="51"
					width="68"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.1)"
				/>
				<rect
					x="276"
					y="51"
					width="54"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.55)"
				/>
				<text
					x="348"
					y="57"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.5)"
				>
					78%
				</text>
				<rect
					x="276"
					y="59"
					width="45"
					height="3"
					rx="2"
					fill="rgba(99,179,237,0.06)"
				/>

				{/* Course 2 */}
				<rect
					x="256"
					y="74"
					width="14"
					height="14"
					rx="3"
					fill="rgba(59,130,246,0.15)"
				/>
				<text
					x="258"
					y="85"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(59,130,246,0.8)"
				>
					PY
				</text>
				<rect
					x="276"
					y="75"
					width="68"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.1)"
				/>
				<rect
					x="276"
					y="75"
					width="38"
					height="5"
					rx="2"
					fill="rgba(59,130,246,0.55)"
				/>
				<text
					x="348"
					y="81"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.5)"
				>
					55%
				</text>
				<rect
					x="276"
					y="83"
					width="55"
					height="3"
					rx="2"
					fill="rgba(99,179,237,0.06)"
				/>

				{/* Course 3 */}
				<rect
					x="256"
					y="98"
					width="14"
					height="14"
					rx="3"
					fill="rgba(168,85,247,0.15)"
				/>
				<text
					x="257"
					y="109"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(168,85,247,0.8)"
				>
					UI
				</text>
				<rect
					x="276"
					y="99"
					width="68"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.1)"
				/>
				<rect
					x="276"
					y="99"
					width="62"
					height="5"
					rx="2"
					fill="rgba(168,85,247,0.5)"
				/>
				<text
					x="348"
					y="105"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.5)"
				>
					91%
				</text>
				<rect
					x="276"
					y="107"
					width="40"
					height="3"
					rx="2"
					fill="rgba(99,179,237,0.06)"
				/>

				{/* Streak badge */}
				<rect
					x="256"
					y="120"
					width="108"
					height="16"
					rx="4"
					fill="rgba(251,191,36,0.08)"
					stroke="rgba(251,191,36,0.25)"
					strokeWidth="0.5"
				/>
				<text
					x="264"
					y="131"
					fontFamily="monospace"
					fontSize="7.5"
					fill="rgba(251,191,36,0.85)"
				>
					🔥 12-day streak
				</text>

				{/* ── Bottom Row ── */}

				{/* Quiz Card */}
				<rect
					x="24"
					y="154"
					width="115"
					height="52"
					rx="8"
					fill="rgba(99,179,237,0.05)"
					stroke="rgba(99,179,237,0.18)"
					strokeWidth="1"
				/>
				<text
					x="36"
					y="171"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(99,179,237,0.5)"
				>
					QUIZ · MODULE 3
				</text>
				{/* Options */}
				<circle
					cx="36"
					cy="184"
					r="3.5"
					fill="none"
					stroke="rgba(99,179,237,0.3)"
					strokeWidth="1"
				/>
				<rect
					x="44"
					y="181"
					width="45"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.1)"
				/>
				<circle cx="36" cy="196" r="3.5" fill="rgba(99,179,237,0.7)" />
				<rect
					x="44"
					y="193"
					width="60"
					height="5"
					rx="2"
					fill="rgba(99,179,237,0.2)"
				/>
				<text
					x="108"
					y="199"
					fontFamily="monospace"
					fontSize="9"
					fill="rgba(99,179,237,0.7)"
				>
					✓
				</text>

				{/* Certificate Card */}
				<rect
					x="151"
					y="154"
					width="73"
					height="52"
					rx="8"
					fill="rgba(251,191,36,0.05)"
					stroke="rgba(251,191,36,0.2)"
					strokeWidth="1"
				/>
				<text
					x="163"
					y="169"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(251,191,36,0.5)"
				>
					CERT
				</text>
				<circle
					cx="187"
					cy="183"
					r="10"
					fill="rgba(251,191,36,0.08)"
					stroke="rgba(251,191,36,0.3)"
					strokeWidth="0.8"
				/>
				<text
					x="182"
					y="187"
					fontFamily="monospace"
					fontSize="10"
					fill="rgba(251,191,36,0.8)"
				>
					★
				</text>
				<rect
					x="162"
					y="197"
					width="50"
					height="4"
					rx="2"
					fill="rgba(251,191,36,0.15)"
				/>

				{/* Student Stats */}
				<rect
					x="236"
					y="154"
					width="140"
					height="52"
					rx="8"
					fill="rgba(99,179,237,0.05)"
					stroke="rgba(99,179,237,0.18)"
					strokeWidth="1"
				/>
				<text
					x="248"
					y="170"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(99,179,237,0.5)"
				>
					STUDENTS
				</text>
				<text
					x="248"
					y="190"
					fontFamily="'Syne',sans-serif"
					fontSize="18"
					fontWeight="bold"
					fill="rgba(99,179,237,0.9)"
				>
					1,284
				</text>
				<text
					x="248"
					y="202"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(99,179,237,0.35)"
				>
					↑ 24 enrolled today
				</text>
				{/* Mini avatar stack */}
				{[320, 330, 340, 350].map((cx, i) => (
					<circle
						key={i}
						cx={cx}
						cy={182}
						r="8"
						fill={
							[
								'rgba(99,179,237,0.3)',
								'rgba(168,85,247,0.3)',
								'rgba(59,130,246,0.3)',
								'rgba(251,191,36,0.3)',
							][i]
						}
						stroke="rgba(6,13,24,0.8)"
						strokeWidth="1.5"
					/>
				))}
			</svg>
		),
	},
	{
		title: 'API Design for Intranext elearning web application',
		description:
			'Designed and implemented RESTful APIs for user authentication, course management, and progress tracking using Django REST Framework. Integrated third-party services for payment processing and email notifications.',
		tech: ['Python', 'Django', 'Docker'],
		caseStudy: 2,
		link: 'https://temz.pythonanywhere.com/swagger/',
		github: 'https://github.com/Topsurpass/intranextserver',
		accent: '#df1717',
		accentAlt: '#34D399',
		tag: 'Backend',
		featured: true,
		illustration: (
			<svg
				viewBox="0 0 400 220"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				<rect width="400" height="220" fill="url(#g2)" rx="0" />
				<defs>
					<linearGradient
						id="g2"
						x1="0"
						y1="0"
						x2="400"
						y2="220"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#081a12" />
						<stop offset="1" stopColor="#060d18" />
					</linearGradient>
				</defs>
				{[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
					<line
						key={x}
						x1={x}
						y1="0"
						x2={x}
						y2="220"
						stroke="rgba(104,211,145,0.05)"
						strokeWidth="1"
					/>
				))}
				{[44, 88, 132, 176].map((y) => (
					<line
						key={y}
						x1="0"
						y1={y}
						x2="400"
						y2={y}
						stroke="rgba(104,211,145,0.05)"
						strokeWidth="1"
					/>
				))}
				{/* Main chart area */}
				<rect
					x="30"
					y="24"
					width="220"
					height="130"
					rx="8"
					fill="rgba(104,211,145,0.04)"
					stroke="rgba(104,211,145,0.18)"
					strokeWidth="1"
				/>
				<text
					x="44"
					y="42"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(104,211,145,0.5)"
					letterSpacing="2"
				>
					LIVE METRICS
				</text>
				{/* Chart line */}
				<polyline
					points="44,120 76,105 108,115 140,88 172,95 204,70 236,78"
					fill="none"
					stroke="rgba(104,211,145,0.7)"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<polyline
					points="44,120 76,105 108,115 140,88 172,95 204,70 236,78 236,138 44,138"
					fill="url(#chartFill)"
					strokeWidth="0"
				/>
				<defs>
					<linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
						<stop stopColor="rgba(104,211,145,0.25)" />
						<stop offset="1" stopColor="rgba(104,211,145,0)" />
					</linearGradient>
				</defs>
				{/* Data points */}
				{[
					[44, 120],
					[76, 105],
					[108, 115],
					[140, 88],
					[172, 95],
					[204, 70],
					[236, 78],
				].map(([cx, cy], i) => (
					<circle
						key={i}
						cx={cx}
						cy={cy}
						r="3"
						fill="#68D391"
						opacity={i === 5 ? 1 : 0.4}
					/>
				))}
				{/* Tooltip */}
				<rect
					x="186"
					y="52"
					width="62"
					height="26"
					rx="5"
					fill="rgba(104,211,145,0.12)"
					stroke="rgba(104,211,145,0.3)"
					strokeWidth="0.8"
				/>
				<text
					x="195"
					y="63"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(104,211,145,0.6)"
				>
					REQUESTS
				</text>
				<text
					x="195"
					y="74"
					fontFamily="monospace"
					fontSize="9"
					fontWeight="bold"
					fill="#68D391"
				>
					4,832
				</text>
				{/* Right panel */}
				<rect
					x="268"
					y="24"
					width="102"
					height="58"
					rx="8"
					fill="rgba(104,211,145,0.04)"
					stroke="rgba(104,211,145,0.15)"
					strokeWidth="1"
				/>
				<text
					x="280"
					y="43"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(104,211,145,0.4)"
				>
					MODEL ACC.
				</text>
				<text
					x="278"
					y="66"
					fontFamily="'Syne',sans-serif"
					fontSize="22"
					fontWeight="bold"
					fill="rgba(104,211,145,0.95)"
				>
					94%
				</text>
				<rect
					x="268"
					y="92"
					width="102"
					height="58"
					rx="8"
					fill="rgba(104,211,145,0.04)"
					stroke="rgba(104,211,145,0.15)"
					strokeWidth="1"
				/>
				<text
					x="280"
					y="111"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(104,211,145,0.4)"
				>
					ANOMALIES
				</text>
				<rect
					x="280"
					y="120"
					width="72"
					height="6"
					rx="3"
					fill="rgba(104,211,145,0.1)"
				/>
				<rect
					x="280"
					y="120"
					width="20"
					height="6"
					rx="3"
					fill="#FC8181"
					opacity="0.7"
				/>
				<text
					x="310"
					y="127"
					fontFamily="monospace"
					fontSize="7"
					fill="rgba(252,129,129,0.7)"
				>
					3 detected
				</text>
				{/* Bottom status bar */}
				<rect
					x="30"
					y="164"
					width="340"
					height="34"
					rx="8"
					fill="rgba(104,211,145,0.03)"
					stroke="rgba(104,211,145,0.1)"
					strokeWidth="1"
				/>
				<circle cx="50" cy="181" r="5" fill="#68D391" opacity="0.8" />
				<text
					x="62"
					y="185"
					fontFamily="monospace"
					fontSize="8"
					fill="rgba(104,211,145,0.6)"
				>
					TensorFlow model running · AWS us-east-1 · 12ms latency
				</text>
			</svg>
		),
	},
	//{
	//	title: 'Collaboration Suite',
	//	description:
	//		'Enterprise-grade real-time collaboration tools with end-to-end encryption, live cursors, and conflict-free editing.',
	//	tech: ['TypeScript', 'Node.js', 'WebSockets', 'Redis'],
	//	caseStudy: 3,
	//	link: '#',
	//	github: '#',
	//	accent: '#F6AD55',
	//	accentAlt: '#FBBF24',
	//	tag: 'Real-time',
	//	featured: false,
	//	illustration: (
	//		<svg
	//			viewBox="0 0 400 220"
	//			fill="none"
	//			xmlns="http://www.w3.org/2000/svg"
	//			className="w-full h-full"
	//		>
	//			<rect width="400" height="220" fill="url(#g3)" rx="0" />
	//			<defs>
	//				<linearGradient
	//					id="g3"
	//					x1="0"
	//					y1="0"
	//					x2="400"
	//					y2="220"
	//					gradientUnits="userSpaceOnUse"
	//				>
	//					<stop stopColor="#1a1208" />
	//					<stop offset="1" stopColor="#060d18" />
	//				</linearGradient>
	//			</defs>
	//			{/* Document editor */}
	//			<rect
	//				x="30"
	//				y="20"
	//				width="200"
	//				height="175"
	//				rx="8"
	//				fill="rgba(246,173,85,0.04)"
	//				stroke="rgba(246,173,85,0.2)"
	//				strokeWidth="1"
	//			/>
	//			<rect
	//				x="30"
	//				y="20"
	//				width="200"
	//				height="28"
	//				rx="8"
	//				fill="rgba(246,173,85,0.08)"
	//			/>
	//			<text
	//				x="44"
	//				y="38"
	//				fontFamily="monospace"
	//				fontSize="8"
	//				fill="rgba(246,173,85,0.6)"
	//				letterSpacing="2"
	//			>
	//				DOCUMENT · LIVE
	//			</text>
	//			{/* Typing lines */}
	//			{[56, 70, 84, 98, 112, 126].map((y, i) => (
	//				<rect
	//					key={y}
	//					x="44"
	//					y={y}
	//					width={[160, 130, 155, 90, 145, 70][i]}
	//					height="7"
	//					rx="2"
	//					fill="rgba(246,173,85,0.1)"
	//				/>
	//			))}
	//			{/* Cursor 1 */}
	//			<rect
	//				x="125"
	//				y="84"
	//				width="2"
	//				height="11"
	//				rx="1"
	//				fill="#F6AD55"
	//				opacity="0.9"
	//			/>
	//			<rect
	//				x="125"
	//				y="76"
	//				width="36"
	//				height="12"
	//				rx="3"
	//				fill="rgba(246,173,85,0.15)"
	//				stroke="rgba(246,173,85,0.3)"
	//				strokeWidth="0.5"
	//			/>
	//			<text
	//				x="129"
	//				y="85"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(246,173,85,0.8)"
	//			>
	//				Temitope
	//			</text>
	//			{/* Cursor 2 */}
	//			<rect
	//				x="80"
	//				y="112"
	//				width="2"
	//				height="11"
	//				rx="1"
	//				fill="#68D391"
	//				opacity="0.9"
	//			/>
	//			<rect
	//				x="80"
	//				y="104"
	//				width="28"
	//				height="12"
	//				rx="3"
	//				fill="rgba(104,211,145,0.15)"
	//				stroke="rgba(104,211,145,0.3)"
	//				strokeWidth="0.5"
	//			/>
	//			<text
	//				x="84"
	//				y="113"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(104,211,145,0.8)"
	//			>
	//				Client
	//			</text>
	//			{/* Chat panel */}
	//			<rect
	//				x="248"
	//				y="20"
	//				width="122"
	//				height="175"
	//				rx="8"
	//				fill="rgba(246,173,85,0.03)"
	//				stroke="rgba(246,173,85,0.15)"
	//				strokeWidth="1"
	//			/>
	//			<rect
	//				x="248"
	//				y="20"
	//				width="122"
	//				height="28"
	//				rx="8"
	//				fill="rgba(246,173,85,0.07)"
	//			/>
	//			<text
	//				x="262"
	//				y="38"
	//				fontFamily="monospace"
	//				fontSize="8"
	//				fill="rgba(246,173,85,0.5)"
	//				letterSpacing="1"
	//			>
	//				CHAT
	//			</text>
	//			{/* Messages */}
	//			<rect
	//				x="258"
	//				y="58"
	//				width="80"
	//				height="20"
	//				rx="5"
	//				fill="rgba(246,173,85,0.1)"
	//				stroke="rgba(246,173,85,0.15)"
	//				strokeWidth="0.5"
	//			/>
	//			<text
	//				x="266"
	//				y="72"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(246,173,85,0.7)"
	//			>
	//				Looks great! 🔥
	//			</text>
	//			<rect
	//				x="272"
	//				y="86"
	//				width="84"
	//				height="20"
	//				rx="5"
	//				fill="rgba(99,179,237,0.1)"
	//				stroke="rgba(99,179,237,0.15)"
	//				strokeWidth="0.5"
	//			/>
	//			<text
	//				x="280"
	//				y="100"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(99,179,237,0.7)"
	//			>
	//				Updating now...
	//			</text>
	//			<rect
	//				x="258"
	//				y="114"
	//				width="72"
	//				height="20"
	//				rx="5"
	//				fill="rgba(104,211,145,0.1)"
	//				stroke="rgba(104,211,145,0.15)"
	//				strokeWidth="0.5"
	//			/>
	//			<text
	//				x="266"
	//				y="128"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(104,211,145,0.7)"
	//			>
	//				✓ E2E encrypted
	//			</text>
	//			{/* Online avatars */}
	//			<circle
	//				cx="262"
	//				cy="173"
	//				r="7"
	//				fill="rgba(246,173,85,0.2)"
	//				stroke="#F6AD55"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="259"
	//				y="177"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="#F6AD55"
	//			>
	//				T
	//			</text>
	//			<circle
	//				cx="278"
	//				cy="173"
	//				r="7"
	//				fill="rgba(104,211,145,0.2)"
	//				stroke="#68D391"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="275"
	//				y="177"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="#68D391"
	//			>
	//				C
	//			</text>
	//			<circle
	//				cx="294"
	//				cy="173"
	//				r="7"
	//				fill="rgba(99,179,237,0.2)"
	//				stroke="#63B3ED"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="291"
	//				y="177"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="#63B3ED"
	//			>
	//				A
	//			</text>
	//			<text
	//				x="308"
	//				y="177"
	//				fontFamily="monospace"
	//				fontSize="8"
	//				fill="rgba(246,173,85,0.4)"
	//			>
	//				+12 online
	//			</text>
	//		</svg>
	//	),
	//},
	//{
	//	title: 'IoT Monitoring System',
	//	description:
	//		'Real-time industrial IoT dashboard monitoring 500+ devices with GraphQL subscriptions, alerts, and Kubernetes orchestration.',
	//	tech: ['React', 'GraphQL', 'Kafka', 'Kubernetes'],
	//	caseStudy: 4,
	//	link: '#',
	//	github: '#',
	//	accent: '#C084FC',
	//	accentAlt: '#A78BFA',
	//	tag: 'DevOps / IoT',
	//	featured: false,
	//	illustration: (
	//		<svg
	//			viewBox="0 0 400 220"
	//			fill="none"
	//			xmlns="http://www.w3.org/2000/svg"
	//			className="w-full h-full"
	//		>
	//			<rect width="400" height="220" fill="url(#g4)" rx="0" />
	//			<defs>
	//				<linearGradient
	//					id="g4"
	//					x1="0"
	//					y1="0"
	//					x2="400"
	//					y2="220"
	//					gradientUnits="userSpaceOnUse"
	//				>
	//					<stop stopColor="#110a1a" />
	//					<stop offset="1" stopColor="#060d18" />
	//				</linearGradient>
	//			</defs>
	//			{/* Device grid */}
	//			{[0, 1, 2, 3, 4, 5].map((i) =>
	//				[0, 1, 2].map((j) => (
	//					<rect
	//						key={`${i}-${j}`}
	//						x={30 + i * 48}
	//						y={26 + j * 50}
	//						width="36"
	//						height="36"
	//						rx="6"
	//						fill={
	//							Math.random() > 0.85
	//								? 'rgba(252,129,129,0.15)'
	//								: 'rgba(192,132,252,0.06)'
	//						}
	//						stroke={
	//							Math.random() > 0.85
	//								? 'rgba(252,129,129,0.3)'
	//								: 'rgba(192,132,252,0.18)'
	//						}
	//						strokeWidth="0.8"
	//					/>
	//				))
	//			)}
	//			{/* Device icons (dots) */}
	//			{[0, 1, 2, 3, 4, 5].map((i) =>
	//				[0, 1, 2].map((j) => (
	//					<circle
	//						key={`d-${i}-${j}`}
	//						cx={48 + i * 48}
	//						cy={44 + j * 50}
	//						r="4"
	//						fill={
	//							(i === 2 && j === 1) || (i === 4 && j === 0)
	//								? '#FC8181'
	//								: '#C084FC'
	//						}
	//						opacity={
	//							(i === 2 && j === 1) || (i === 4 && j === 0)
	//								? 0.8
	//								: 0.4
	//						}
	//					/>
	//				))
	//			)}
	//			{/* Alert badge */}
	//			<rect
	//				x="82"
	//				y="58"
	//				width="46"
	//				height="16"
	//				rx="4"
	//				fill="rgba(252,129,129,0.15)"
	//				stroke="rgba(252,129,129,0.35)"
	//				strokeWidth="0.8"
	//			/>
	//			<text
	//				x="89"
	//				y="69"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(252,129,129,0.9)"
	//			>
	//				⚠ ALERT
	//			</text>
	//			{/* Right panel */}
	//			<rect
	//				x="324"
	//				y="24"
	//				width="60"
	//				height="56"
	//				rx="8"
	//				fill="rgba(192,132,252,0.05)"
	//				stroke="rgba(192,132,252,0.2)"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="334"
	//				y="42"
	//				fontFamily="monospace"
	//				fontSize="8"
	//				fill="rgba(192,132,252,0.5)"
	//			>
	//				ONLINE
	//			</text>
	//			<text
	//				x="332"
	//				y="64"
	//				fontFamily="'Syne',sans-serif"
	//				fontSize="20"
	//				fontWeight="bold"
	//				fill="rgba(192,132,252,0.95)"
	//			>
	//				498
	//			</text>
	//			<rect
	//				x="324"
	//				y="90"
	//				width="60"
	//				height="56"
	//				rx="8"
	//				fill="rgba(192,132,252,0.05)"
	//				stroke="rgba(252,129,129,0.2)"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="334"
	//				y="108"
	//				fontFamily="monospace"
	//				fontSize="8"
	//				fill="rgba(252,129,129,0.5)"
	//			>
	//				ERRORS
	//			</text>
	//			<text
	//				x="340"
	//				y="130"
	//				fontFamily="'Syne',sans-serif"
	//				fontSize="20"
	//				fontWeight="bold"
	//				fill="rgba(252,129,129,0.9)"
	//			>
	//				2
	//			</text>
	//			{/* Kafka stream bar */}
	//			<rect
	//				x="30"
	//				y="180"
	//				width="280"
	//				height="26"
	//				rx="8"
	//				fill="rgba(192,132,252,0.04)"
	//				stroke="rgba(192,132,252,0.12)"
	//				strokeWidth="1"
	//			/>
	//			<text
	//				x="44"
	//				y="196"
	//				fontFamily="monospace"
	//				fontSize="7"
	//				fill="rgba(192,132,252,0.4)"
	//				letterSpacing="1"
	//			>
	//				KAFKA STREAM
	//			</text>
	//			{[80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280].map(
	//				(x, i) => (
	//					<rect
	//						key={x}
	//						x={x}
	//						y={186 + (i % 3) * 3}
	//						width="8"
	//						height={6 + (i % 4) * 2}
	//						rx="1"
	//						fill="rgba(192,132,252,0.3)"
	//						opacity={0.4 + i * 0.04}
	//					/>
	//				)
	//			)}
	//		</svg>
	//	),
	//},
] as const;
