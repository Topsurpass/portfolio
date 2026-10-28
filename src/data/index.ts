export const profile = {
	name: 'Temitope Olowosuyi',
	role: 'Frontend Engineer',
	location: 'Lagos, Nigeria',
	timeZone: 'Africa/Lagos',
	email: 'temitopeabiodun685@gmail.com',
	phone: '+234 810 730 4148',
	phoneHref: 'tel:+2348107304148',
	cv: '/Temitope_Olowosuyi_CV.pdf',
	photo: '/temitope.jpg',
	github: 'https://github.com/Topsurpass',
	linkedin: 'https://linkedin.com/in/temitope-olowosuyi',
};

export type ProjectLink = { label: string; href: string };

export type Project = {
	slug: string;
	title: string;
	kind: string;
	role: string;
	summary: string;
	highlights: string[];
	stack: string[];
	images: { src: string; alt: string; url: string }[];
	links: ProjectLink[];
	note?: string;
};

export const projects: Project[] = [
	{
		slug: 'cross-africa',
		title: 'Cross Africa Marketplace',
		kind: 'Cross-border eCommerce',
		role: 'Frontend Developer · Dash Global Technologies',
		summary:
			'A marketplace connecting buyers with verified sellers across Africa — genuine products, secure checkout and delivery that actually crosses borders. I build its customer-facing storefront and the vendor and buyer dashboards behind it.',
		highlights: [
			'Built on the Next.js App Router with TypeScript, server-rendered and image-optimised for fast loads on mobile networks.',
			'Storefront with product search, delivery-location selection, category browsing, top-rated sellers and a rotating campaign hero.',
			'Dual-sided vendor and buyer dashboards, with every REST endpoint wired through TanStack Query for consistent loading and error states.',
			'Seller onboarding and business flows that link to cross-border logistics partners.',
		],
		stack: [
			'Next.js',
			'TypeScript',
			'TanStack Query',
			'Tailwind CSS',
			'REST APIs',
		],
		images: [
			{
				src: '/work/cross-africa.jpg',
				alt: 'Cross Africa Marketplace homepage with search, campaign hero and trust badges',
				url: 'marketplace.crossafrica.co',
			},
		],
		links: [
			{
				label: 'Visit marketplace',
				href: 'https://marketplace.crossafrica.co/',
			},
		],
		note: 'Production · used by buyers and sellers across Africa.',
	},
	{
		slug: 'bethsplace',
		title: 'bethsplace',
		kind: 'Brand website · Client work',
		role: 'Design & frontend development',
		summary:
			'The online home for a premium handmade-bag brand serving individuals, organisations, events and souvenir orders. The site turns browsing into enquiries, sending every order request straight to the brand’s WhatsApp with the details already filled in.',
		highlights: [
			'Editorial, image-led design with a full-bleed hero and a mosaic collection grid that shows the craft up close.',
			'Scroll-driven motion with GSAP and Framer Motion — smooth, but kept light so the page stays fast on mobile.',
			'Order form and calls to action that open WhatsApp with order type, quantity and message prefilled.',
			'Clear buying journey: what we make, a five-step custom-order process, testimonials and FAQ.',
		],
		stack: [
			'Next.js 16',
			'React 19',
			'TypeScript',
			'Tailwind CSS 4',
			'GSAP',
			'Framer Motion',
		],
		images: [
			{
				src: '/work/bethsplace.jpg',
				alt: 'bethsplace homepage hero reading “Handmade bags, made to be held.”',
				url: 'bethsplace.com.ng',
			},
			{
				src: '/work/bethsplace-collection.jpg',
				alt: 'bethsplace collection grid of handmade handbags, totes and backpacks',
				url: 'bethsplace.com.ng/#collection',
			},
		],
		links: [
			{ label: 'Visit site', href: 'https://www.bethsplace.com.ng/' },
			{
				label: 'Source',
				href: 'https://github.com/Topsurpass/beths-official-website',
			},
		],
	},
	{
		slug: 'fraud-analyzer',
		title: 'Fraud Analyzer',
		kind: 'Fraud operations platform',
		role: 'Product design & frontend engineering',
		summary:
			'A fraud-operations suite where analysts write SQL detection rules once, schedule them, and review every flag in a single queue — a lightweight take on tooling banks pay millions for.',
		highlights: [
			'Monaco-powered SQL editor with severity levels and pattern categories such as velocity checks and round-tripping.',
			'Scheduled rules, a live status grid and an alert feed that shows every flag across Postgres, MySQL and SQLite sources.',
			'Case tracker for confirmed fraud, false positives and open investigations — the feedback loop for tuning rules.',
			'JWT auth with silent token refresh and role-based access for analysts, senior analysts and admins.',
		],
		stack: [
			'Next.js 16',
			'TypeScript',
			'TanStack Query',
			'Monaco Editor',
			'shadcn/ui',
			'Tailwind CSS',
		],
		images: [
			{
				src: '/work/fraud-analyzer.jpg',
				alt: 'Fraud Analyzer sign-in screen with a live risk chart and feature list',
				url: 'fraud-analyzer-dashboard.vercel.app',
			},
		],
		links: [
			{
				label: 'Live product',
				href: 'https://fraud-analyzer-dashboard.vercel.app/login',
			},
		],
		note: 'Private beta — demo access on request.',
	},
	{
		slug: 'intranext',
		title: 'Intranext',
		kind: 'Full-stack eLearning platform',
		role: 'Frontend lead & API design',
		summary:
			'An eLearning platform where students attend lectures, read course material, sit timed exams and submit assignments. I built both the Next.js frontend and the Django REST API behind it.',
		highlights: [
			'Server-rendered Next.js App Router frontend, tuned for fast first paint on low-bandwidth connections.',
			'Django and MySQL REST API covering authentication, course management and exam submissions.',
			'JWT auth with token refresh, documented end to end with Swagger / OpenAPI.',
		],
		stack: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Django REST',
			'MySQL',
		],
		images: [
			{
				src: '/work/intranext.jpg',
				alt: 'Intranext student sign-in screen',
				url: 'intranext.vercel.app',
			},
			{
				src: '/work/intranext-api.jpg',
				alt: 'Swagger documentation for the Intranext REST API',
				url: 'temz.pythonanywhere.com/swagger',
			},
		],
		links: [
			{ label: 'Live app', href: 'https://intranext.vercel.app/' },
			{
				label: 'API docs',
				href: 'https://temz.pythonanywhere.com/swagger/',
			},
			{
				label: 'Frontend source',
				href: 'https://github.com/Topsurpass/intranext',
			},
			{
				label: 'API source',
				href: 'https://github.com/Topsurpass/intranextserver',
			},
		],
	},
];

export const otherWork = [
	{
		title: 'Job Board API',
		description:
			'Production-ready job listing REST API with CRUD, filtering and pagination.',
		stack: 'Django · PostgreSQL',
	},
];

export type Role = {
	company: string;
	product?: string;
	title: string;
	period: string;
	location: string;
	summary: string;
	points: string[];
};

export const experience: Role[] = [
	{
		company: 'Dash Global Technologies',
		product: 'Cross Africa',
		title: 'Frontend Developer',
		period: 'Jul 2024 — Present',
		location: 'Lagos',
		summary:
			'Building the public site and dual-sided vendor and buyer dashboards for a logistics platform serving thousands of users across Africa.',
		points: [
			'Architected the landing page and both dashboards on Next.js 14 App Router with TypeScript.',
			'Integrated every backend REST endpoint with TanStack Query, with consistent loading, error and retry states.',
			'Stabilised legacy applications by resolving critical bugs, improving reliability and retention.',
			'Contribute to code reviews, pair programming and sprint planning.',
		],
	},
	{
		company: 'Flexwork',
		title: 'Lead Frontend Developer',
		period: 'Feb 2022 — Nov 2024',
		location: 'Ife',
		summary:
			'Led frontend development for a SaaS customer-service platform, from component architecture to performance.',
		points: [
			'Shipped responsive, cross-browser React and Next.js applications with TypeScript and Tailwind CSS.',
			'Improved Core Web Vitals with code splitting, lazy loading, image optimisation and caching.',
			'Set up state with Zustand and TanStack Query; forms with React Hook Form and Zod validation.',
			'Mentored junior developers and kept a disciplined GitFlow and review process.',
		],
	},
];

export const education = [
	{
		title: 'Software Engineering Programme',
		place: 'Holberton School · ALX',
		period: '2022 — 2024',
	},
	{
		title: 'B.Tech, Industrial Chemistry',
		place: 'Federal University of Technology, Akure',
		period: '2015 — 2019',
	},
];

export const capabilities = [
	{
		title: 'Product interfaces',
		body: 'Dashboards, data tables and multi-role flows that stay clear as the data and the team grow.',
		tools: [
			'React',
			'Next.js',
			'TanStack Table',
			'shadcn/ui',
			'Tailwind CSS',
		],
	},
	{
		title: 'Performance',
		body: 'Fast first paint and smooth interaction, measured against Core Web Vitals rather than guessed.',
		tools: [
			'Code splitting',
			'Lazy loading',
			'Image optimisation',
			'Caching',
		],
	},
	{
		title: 'Data & state',
		body: 'Predictable server and client state, typed from the API response through to the form field.',
		tools: ['TanStack Query', 'Zustand', 'Axios', 'Zod', 'React Hook Form'],
	},
	{
		title: 'Full-stack fluency',
		body: 'I build APIs too, so I design frontends that fit the backend instead of fighting it.',
		tools: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MySQL'],
	},
];
