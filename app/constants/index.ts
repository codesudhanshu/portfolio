export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Blockchain Developer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Nodejs",
		icon: "/tech/nodejs.png",
	},
	{
		name: "Expressjs",
		icon: "/tech/express.png",
	},
	{
		name: "SQL",
		icon: "/tech/sql.png",
	},
	{
		name: "MongoDB",
		icon: "/tech/mongodb.png",
	},
	{
		name: "GraphQL",
		icon: "/tech/graphql.png",
	},
	{
		name: "Solidity",
		icon: "/tech/solidity.png",
	},
	{
		name: "AWS",
		icon: "/tech/aws.png",
	}
	// {
	// 	name: "git",
	// 	icon: "/tech/git.webp",
	// }
	// {
	// 	name: "Tailwind CSS",
	// 	icon: "/tech/tailwind.webp",
	// },
	// {
	// 	name: "Three JS",
	// 	icon: "/tech/threejs.webp",
	// },
	// {
	// 	name: "git",
	// 	icon: "/tech/git.webp",
	// },
	// {
	// 	name: "figma",
	// 	icon: "/tech/figma.webp",
	// },
	// {
	// 	name: "bootstrap",
	// 	icon: "/tech/bootstrap.webp",
	// },
];

const experiences = [
	{
		title: "Software Engineer",
		company_name: "Risinginfra",
		icon: "/company/risinginfra.png",
		iconBg: "#383E56",
		date: "May 2024 -  current",
		points: [
			"Implement a dynamic and responsive frontend using React for property listings with advanced search and filter options, supported by a robust backend with MongoDB and Express.js to manage property data.",
			"Build secure authentication and authorization systems using Node.js and Express.js, implementing JWT for stateless authentication and creating role-specific permissions for admins, agents, and buyers.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly website using MERN STACK. ",
			"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website.",
			"Search Engine Optimization.",
		],
	},
	{
		title: "Full Stack Developer intern",
		company_name: "The Algohype Analytics",
		icon: "/company/thealgohype.png",
		iconBg: "#FFFFFF",
		date: "April 2023 - October 2024",
		points: [
			"Created robust ERP solutions, demonstrating proficiency in full-stack web development, particularly emphasizing front-end and back-end technologies such as the MERN stack.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly website using Reactjs and Nodejs.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the website's interactivity."
		],
	},
	{
		title: "Web Developer intern",
		company_name: "Oasis Infobyte",
		icon: "/company/oasis.png",
		iconBg: "#E6DEDD",
		date: "Feb 2023 - March 2023",
		points: [
			"Implemented meticulous attention to detail in UI/UX design, enhancing the visual appeal and functionality of web applications",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Sudhanshu Srivastava",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/sudhanshu-srivastava-553085217/",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Software Engineer Portfolio, where I have shared by design studies.",
		name: "Sudhanshu Srivastava",
		image: "/socialmedia/portfolio.svg",
		link: "https://sudhanshusrivastava-iota.vercel.app/",
	},
	{
		id: 3,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Sudhanshu Srivastava",
		image: "/tech/github.webp",
		link: "https://github.com/codesudhanshu",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Realestate Website",
		description:
			"Rising Infra real estate platform using the MERN stack, enhancing user experience with secure JWTauthentication and seamless Cloudinary integration for file management.",
		tags: [
			{
				name: "Reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/risinginfra.png",
		source_code_link: "https://github.com/codesudhanshu/Frontend",
		platform: "Vercel",
		deploy_link: "https://risinginfra.in",
	},
	{
		name: "Chrome Extension",
		description:
			"Built PromptSmith, an advanced platform that optimizes ChatGPT interactions through hand-crafted prompts, using JavaScript, Node.js, and MongoDB.",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
			},
			{
				name: "Nodejs",
				color: "orange-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/promptsmith.png",
		source_code_link: "https://github.com/codesudhanshu/PromptSmithBackend",
		platform: "Web",
		deploy_link: "https://chromewebstore.google.com/detail/promptsmith/lkcmilknknbcaedbbpkineglknfphmol",
	},
	{
		name: "Code Editor",
		description:
			"The application enables users to display and experiment with their web development projects, providing a platform akin to CodePen for a smooth coding experience.",
		tags: [
			{
				name: "Reactjs",
				color: "green-text-gradient",
			},
			{
				name: "Material Ui",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/codepen.png",
		source_code_link: "https://github.com/codesudhanshu/codeDocs",
		platform: "Vercel",
		deploy_link: "https://code-docs-eta.vercel.app/",
	},
	{
		name: "Social Media Plateform",
		description:
			"Led the development of a cutting-edge social media platform using the MERN stack, delivering a robust and scalable solution. Enhanced user engagement through dynamic image-sharing, fostering connections within a seamless interface.",
		tags: [
			{
				name: "Reactjs",
				color: "red-text-gradient",
			},
			{
				name: "Nodejs",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/socialmedia.png",
		source_code_link: "https://github.com/codesudhanshu/SocialmediaApplicationBackend",
		platform: "Vercel",
		deploy_link: "",
	},
	{
		name: "Student Attendance",
		description:
			"Developed a student attendance portal using MERN stack, enabling teachers to create students and mark their attendance. Integrated JWT and bcryptjs for security. Utilized Material UI and React JS for frontend. Deployed on Vercel.",
		tags: [
			{
				name: "Reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "Nodejs",
				color: "green-text-gradient",
			},
			{
				name: "MongoDB",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/student.png",
		source_code_link: "https://github.com/codesudhanshu/studentattendence",
		platform: "Vercel",
		deploy_link: "https://studentattendence.vercel.app/",
	},
	{
		name: "Worker Hire Plateform",
		description:
			"Developed a responsive website enabling seamless interaction between users and nearby workers by showcasing detailed worker profiles. Utilized HTML, CSS, and JavaScript to design intuitive user interfaces and implement core functionalities.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/worker.png",
		source_code_link: "https://github.com/codesudhanshu/cww",
		platform: "Netlify",
		deploy_link: "https://tubular-paletas-75a514.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
