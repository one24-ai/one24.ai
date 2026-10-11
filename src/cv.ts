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
	headline: "Principal engineer, infrastructure platforms. Platform engineering, AWS and AI.",
	location: "Waterloo, Ontario, Canada",
	summary:
		"I came up through network operations and DevOps, led an AWS consulting practice, and for the last seven years have helped Riot Games move a global games platform from bare metal to the cloud, along with the cloud-native way of building and running games that comes with it. Over the last four years, I’ve also helped lead efficiency work that delivered nine figures in recurring infrastructure savings. I lead through influence and relationships, not authority: earning trust, building alignment across teams, and helping the engineers around me do their best work.",
	// Names shown under the intro, in this order.
	workedWith: ["Riot Games", "AWS", "Deloitte", "Scotiabank", "TD Bank", "RBC", "Mastercard", "Government of Canada"],
	employers: [
		{
			org: "Riot Games",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "Principal engineer, infrastructure",
					start: "Oct 2020",
					summary:
						"Technical leader for the infrastructure platform behind games played by millions every day, including League of Legends and VALORANT. My scope covers cloud foundations, container orchestration, deployment tooling, cost efficiency, and AI for both players and engineers.",
					groups: [
						{
							label: "Platform",
							items: [
								"Helped lead Riot’s move out of 11 data centres into 18 AWS locations, putting games closer to players for a better experience and the low latency a game like VALORANT demands",
								"Helped lead the design and global rollout of Riot’s Kubernetes platform on Amazon EKS, now running thousands of microservices across 14 regions",
								"Raised availability of core platform services to 99.9% by modernizing the stack on AWS",
							],
						},
						{
							label: "Results",
							items: [
								"Shaped and delivered a multi-year efficiency strategy that produced nine figures in recurring savings without compromising the player experience",
								"Helped influence and design Riot’s tooling for running AI models in production, now powering a launched player-facing feature with more on the way",
								"Built AI tooling that makes everyday engineering at Riot faster and safer",
								"Key technical voice in Riot’s partnership with AWS, influencing how both companies build infrastructure for games",
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
					title: "Senior systems engineer (contract)",
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
					title: "Consultant (contract)",
					start: "Mar 2021",
					end: "May 2022",
					summary:
						"Took on occasional short-term contracts with Deloitte, providing cloud architecture advisory and delivery services to its clients. For Central 1, reviewed the application architecture and processes behind its RTR platform on AWS and gave remediation recommendations to stakeholders. For a federal defence-sector client in the Government of Canada, analyzed multi-cloud strategy and wrote the initial cloud architecture documentation.",
				},
			],
		},
		{
			org: "Sourced Group",
			location: "Toronto, Ontario",
			roles: [
				{
					title: "Senior consultant, AWS practice lead (North America)",
					start: "Jul 2018",
					end: "Sep 2019",
					summary:
						"Led the AWS practice for North America, running on-site delivery teams of consultants and client staff through cloud and DevOps transformations at financial institutions including Scotiabank, TD Bank, RBC and Mastercard. Drove strategic partner work with AWS, including rolling out the Well-Architected Partner Program across North America and training AWS consultants. Supported new business through pre-sales, requirements gathering and solution design, and audited client environments for improvements. Helped build the recruiting and interview process for the Canadian office.",
				},
				{
					title: "Consultant",
					start: "Jun 2016",
					end: "Jul 2018",
					summary:
						"Delivered AWS and Azure solutions for large-scale enterprise cloud adoption, mostly for Canada’s largest financial institutions. Designed and built the foundations of a highly compliant, scalable Azure platform for a tier 1 bank, and a continuous delivery pipeline that stood up dynamic environments on Azure for another. Built a DevOps process and a resilient AWS platform for a complex Drupal environment. Wrote the automation behind this work in Python, CloudFormation, ARM, Puppet and PowerShell.",
				},
			],
		},
		{
			org: "eSentire",
			location: "Cambridge, Ontario",
			roles: [
				{
					title: "DevOps engineer",
					start: "Jul 2015",
					end: "Jun 2016",
					summary:
						"Part of the core team driving cloud adoption at a cybersecurity company, and the person defining and advocating for DevOps across the organization. Built self-service tools for developers to provision consistent environments from dev through QA and UAT, and centralized logging on the ELK stack for internal DevOps services. Created an automated build-and-test process for ready-to-deploy machine images (AMI, Glance, OVF). Researched and recommended infrastructure improvements to management.",
				},
			],
		},
		{
			org: "D2L",
			location: "Kitchener, Ontario",
			roles: [
				{
					title: "SaaS operations tools administrator",
					start: "Oct 2014",
					end: "Jul 2015",
					summary:
						"Built self-service tools and automation for standard changes in SaaS operations, integrating monitoring and APM tools, the CRM, the ITSM platform and capacity planning systems. Partnered with the architecture team to automate how the SaaS platforms were operated and deployed. Worked with information security on incident triage and lessons learned, leading to a vulnerability management system that sharply cut response time to risks on critical infrastructure. Trained and mentored new team members and wrote the team’s operating procedures.",
				},
				{
					title: "SaaS NOC administrator",
					start: "Aug 2013",
					end: "Oct 2014",
					summary:
						"Shift leader in the network operations centre, monitoring client-facing SaaS applications and keeping production and test environments within their service levels. Took the lead during major incidents, owning the process from troubleshooting through root cause analysis. Built an incident notification web app that delivered timely, consistent updates to every stakeholder and kept information aligned across internal platforms. Enforced change management and kept to tight maintenance windows.",
				},
			],
		},
		{
			org: "AccqCorp",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "IT operations supervisor",
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
					title: "Web developer",
					start: "Dec 2008",
					end: "Oct 2010",
					summary:
						"Built database-driven PHP and MySQL web apps and content management systems for a design studio, and ran its Linux hosting.",
				},
			],
		},
	] as Employer[],
	skills: [
		"Platform engineering",
		"AWS",
		"Azure",
		"Amazon EKS and Kubernetes",
		"Terraform",
		"CI/CD",
		"Python",
		"AI tooling and coding agents",
		"Model serving",
		"TypeScript",
		"DNS",
		"Open source",
	],
	education: [{ school: "Mohawk College", credential: "Network Engineering and Security Analyst", years: "2006 to 2009" }],
};
