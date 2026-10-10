// Digital CV, from Zach's LinkedIn export (Profile.pdf, not committed). Newest first.
export interface Role {
	title: string;
	start: string;
	end?: string; // omit for current
	summary?: string;
	highlights?: string[];
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
		"I came up through network operations and DevOps, led an AWS consulting practice, and now help set the technical direction for a game-scale infrastructure platform. I lead through influence and relationships, not authority: earning trust, building alignment across teams, and helping the engineers around me do their best work. And I care about the unglamorous parts: clear interfaces, safe defaults, and making the right thing the easy thing for the engineers who build on what I make.",
	employers: [
		{
			org: "one24",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "Founder and engineer",
					start: "May 2026",
					summary: "Open source tools that make AI coding agents more capable and safer to use day to day: three pi packages, and Kiln.",
					highlights: [
						"pi-halo: a workbench for pi, with Build and Plan modes, a git diff view, and commands that draft commit messages and pull requests",
						"pi-domain: persistent memory, so an agent carries decisions, preferences and lessons between sessions",
						"pi-containment: a guard layer that decides which actions an agent can take on its own, which need approval, and which are never allowed",
						"Kiln (in design): a standalone, agent-driven CI/CD system where deterministic pipelines decide pass or fail and agents triage failures, propose fixes and watch rollouts",
					],
				},
			],
		},
		{
			org: "Riot Games",
			location: "Waterloo, Ontario",
			roles: [
				{
					title: "Principal engineer, infrastructure",
					start: "Oct 2020",
					summary:
						"Technical leader for the infrastructure platform behind League of Legends, VALORANT and the rest of Riot’s games, from cloud foundations and container orchestration to deployment tooling and AI-assisted operations.",
					highlights: [
						"Set the technical direction for modernizing the core deployment and orchestration layers",
						"Lead the design and operation of a global, game-scale platform on Amazon EKS",
						"Help shape how Riot brings AI to players, including the architecture for serving models in production",
						"Build AI tooling that makes everyday engineering faster and safer",
						"Help lead a multi-year infrastructure efficiency strategy, with savings in data streaming and game server scheduling",
						"Help build a self-service platform for deploying internal apps",
						"Mentor engineers and help shape how senior technical leaders work together across the org",
					],
				},
				{
					title: "Senior systems engineer (contract)",
					start: "Oct 2019",
					end: "Oct 2020",
					summary:
						"Built geo-aware DNS for core services and made the proxy fleet scale automatically with demand.",
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
						"Led the AWS practice for North America, running on-site delivery teams of consultants and client staff through cloud and DevOps transformations at top-tier Canadian financial institutions. Drove strategic partner work with AWS, including rolling out the Well-Architected Partner Program across North America and training AWS consultants. Supported new business through pre-sales, requirements gathering and solution design, and audited client environments for improvements. Helped build the recruiting and interview process for the Canadian office.",
					highlights: ["Ignite talk at DevOpsDays Toronto (2019): “Preventative and Detective Control for Security Conscious Organizations”"],
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
						"Ran IT for a 60+ person organization across four Ontario offices, providing 24/7 support to local and remote staff. Managed core systems including Active Directory, Exchange, Lotus Domino, BlackBerry Enterprise Server and the EMR servers, on a secure multi-site Cisco network. Planned and rolled out new deployments such as VoIP, eFax and EMR, from product research and purchasing through installation. Managed vendor relationships and met regularly with senior management to keep IT aligned with company finances and goals.",
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
						"Built database-driven web applications in PHP and MySQL for a design studio, working remotely. Created easy-to-use content management systems and turned Photoshop designs into HTML and CSS pages. Managed the Linux development and production hosting servers, and helped with project management on team projects.",
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
