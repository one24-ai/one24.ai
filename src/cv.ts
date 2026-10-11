// Digital CV, from Zach's LinkedIn export (Profile.pdf, not committed). Newest first.
export interface Role {
	title: string;
	start: string;
	end?: string; // omit for current
	summary?: string;
	highlights?: string[];
	groups?: { label: string; items: string[] }[]; // labelled bullet groups, shown after highlights
}

export interface Employer {
	org: string;
	location: string;
	roles: Role[];
}

export const CV = {
	headline: "Principal Engineer at Riot Games. Platform engineering, AWS and AI.",
	location: "Waterloo, Ontario, Canada",
	summary:
		"I came up through network operations and DevOps, led an AWS consulting practice, and for the last seven years have been a technical leader in moving Riot Games’ global platform from bare metal to the cloud, and to the cloud-native way of working that comes with it. Over the last four years, I’ve also shaped and delivered efficiency work that produced nine figures in recurring infrastructure savings. I lead through influence and relationships, not authority: earning trust, building alignment across teams, and helping the engineers around me do their best work.",
	// Names shown under the intro, in this order.
	workedWith: ["Riot Games", "AWS", "Deloitte", "Scotiabank", "TD Bank", "RBC", "Mastercard", "Government of Canada"],
	employers: [
		{
			org: "Riot Games",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "Principal Engineer, Infrastructure",
					start: "Oct 2020",
					summary:
						"Technical leader for the infrastructure platform behind games played by millions every day, including League of Legends and VALORANT. My scope covers cloud foundations, container orchestration, deployment tooling, cost efficiency, and AI for both players and engineers.",
					groups: [
						{
							label: "Platform",
							items: [
								"Drove key parts of Riot’s move out of 11 data centres into 18 AWS locations, putting games closer to players for a better experience and the low latency a game like VALORANT demands",
								"Led key design decisions for the global rollout of Riot’s Kubernetes platform on Amazon EKS, now running thousands of microservices across 14 regions",
								"Raised availability of core platform services to 99.9% by modernizing the stack on AWS",
							],
						},
						{
							label: "Results",
							items: [
								"Shaped and delivered a multi-year efficiency strategy that produced nine figures in recurring savings without compromising the player experience",
								"Influenced the design of Riot’s tooling for running AI models in production, now powering a launched player-facing feature with more on the way",
								"Built AI tooling that makes everyday engineering at Riot faster and safer",
								"Represent Riot as a key technical voice in its partnership with AWS, influencing how both companies build infrastructure for games",
							],
						},
						{
							label: "Leading through influence",
							items: [
								"Set the technical direction for the infrastructure platform, aligning 8 teams and ~70 engineers on a shared cloud-native roadmap without direct authority",
								"Built the forums where the infrastructure platform’s senior engineers make architecture decisions together, setting Riot-wide standards with the player experience in mind",
							],
						},
					],
				},
				{
					title: "Senior Systems Engineer (Contract)",
					start: "Oct 2019",
					end: "Oct 2020",
					highlights: [
						"Built geo-aware DNS for core services, routing players to the nearest healthy region",
						"Made the edge proxy fleet scale automatically with demand, ending manual scaling for launches and events",
						"Built deployment pipelines in Jenkins, Python and Terraform",
					],
				},
			],
		},
		{
			org: "Deloitte",
			location: "Remote",
			roles: [
				{
					title: "Consultant (Contract)",
					start: "Mar 2021",
					end: "May 2022",
					summary: "Occasional short-term cloud architecture engagements for Deloitte clients.",
					highlights: [
						"Assessed the architecture and processes behind Central 1’s real-time payments (RTR) platform on AWS and gave remediation recommendations to its stakeholders",
						"Analyzed multi-cloud strategy and wrote the initial cloud architecture for a federal defence-sector client in the Government of Canada",
					],
				},
			],
		},
		{
			org: "Sourced Group",
			location: "Toronto, Ontario",
			roles: [
				{
					title: "Senior Consultant, AWS Practice Lead (North America)",
					start: "Jul 2018",
					end: "Sep 2019",
					highlights: [
						"Led the AWS practice for North America, running on-site teams of consultants and client staff through cloud and DevOps transformations at Scotiabank, TD Bank, RBC and Mastercard",
						"Rolled out the AWS Well-Architected Partner Program across North America and trained AWS consultants",
						"Drove new business through pre-sales and solution design, and helped build the Canadian office’s recruiting and interview process",
					],
				},
				{
					title: "Consultant",
					start: "Jun 2016",
					end: "Jul 2018",
					highlights: [
						"Designed and built the foundations of a highly compliant, scalable Azure platform for a tier 1 Canadian bank",
						"Built a continuous delivery pipeline that stood up dynamic Azure environments for another of Canada’s largest banks",
						"Built a DevOps process and a resilient AWS platform for a complex Drupal environment, automated with Python, CloudFormation, ARM, Puppet and PowerShell",
					],
				},
			],
		},
		{
			org: "eSentire",
			location: "Cambridge, Ontario",
			roles: [
				{
					title: "DevOps Engineer",
					start: "Jul 2015",
					end: "Jun 2016",
					highlights: [
						"Core member of the team driving cloud adoption at a cybersecurity company, and its leading advocate for DevOps practices",
						"Built self-service environment provisioning, centralized ELK logging, and automated build-and-test for ready-to-deploy machine images",
					],
				},
			],
		},
		{
			org: "D2L",
			location: "Kitchener, Ontario",
			roles: [
				{
					title: "SaaS Operations Tools Administrator",
					start: "Oct 2014",
					end: "Jul 2015",
					highlights: [
						"Built self-service tools and automation for standard SaaS operations changes, integrated with monitoring, ITSM and capacity planning systems",
						"Partnered with information security on incident response, leading to a vulnerability management system that sharply cut response time to critical risks",
					],
				},
				{
					title: "SaaS NOC Administrator",
					start: "Aug 2013",
					end: "Oct 2014",
					highlights: [
						"Shift leader in the network operations centre, owning major incidents from troubleshooting through root cause analysis",
						"Built an incident notification app that kept every stakeholder informed with timely, consistent updates",
					],
				},
			],
		},
		{
			org: "AccqCorp",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "IT Operations Supervisor",
					start: "Jan 2009",
					end: "Aug 2013",
					summary:
						"Ran IT for a 60+ person organization across four Ontario offices, from 24/7 support and core systems on a multi-site Cisco network to new rollouts like VoIP and EMR.",
				},
			],
		},
		{
			org: "Fenton Design Studio",
			location: "Kansas City, Missouri (remote)",
			roles: [
				{
					title: "Web Developer",
					start: "Dec 2008",
					end: "Oct 2010",
					summary:
						"Built database-driven PHP and MySQL web apps and content management systems for a design studio, and ran its Linux hosting.",
				},
			],
		},
	] as Employer[],
	skills: [
		{
			label: "Leadership",
			items: ["Technical strategy", "Cross-team alignment", "Architecture decision-making", "Partner and vendor relationships"],
		},
		{
			label: "Technical",
			items: [
				"Platform engineering",
				"Cloud architecture (AWS, Azure)",
				"Kubernetes and Amazon EKS",
				"Infrastructure as code (Terraform)",
				"CI/CD and deployment tooling",
				"Cost efficiency",
				"AI platforms and model serving",
				"AI tooling and coding agents",
				"Python and TypeScript",
			],
		},
	],
	education: [{ school: "Mohawk College", credential: "Network Engineering and Security Analyst", years: "2006 to 2009" }],
};
