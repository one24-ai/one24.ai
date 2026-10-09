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
		"I came up through network operations and DevOps, led an AWS consulting practice, and am now a principal engineer on Riot Games’ infrastructure platform, the foundation League of Legends and VALORANT run on. I care about the unglamorous parts: clear interfaces, safe defaults, and making the right thing the easy thing for the engineers who build on what I make.",
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
						"Kiln (in design): a standalone, agent-driven CI/CD system built on pi-durable, where deterministic pipelines decide pass or fail and agents triage failures, propose fixes and watch rollouts",
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
						"Keynote at Games on AWS Korea (2023) on how Riot and AWS build low-latency infrastructure for players",
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
			org: "Sourced Group",
			location: "Toronto, Ontario",
			roles: [
				{
					title: "Senior consultant, AWS practice lead (North America)",
					start: "Jul 2018",
					end: "Sep 2019",
				},
				{
					title: "Consultant",
					start: "Jun 2016",
					end: "Jul 2018",
					summary: "Delivered AWS and Azure solutions for large-scale enterprise cloud adoption.",
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
						"Built a DevOps culture and modern SDLC practices: self-service tools for developers to provision environments, and centralized logging on the ELK stack.",
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
					summary: "Built self-service tools and automation for standard changes in SaaS operations.",
				},
				{ title: "SaaS NOC administrator", start: "Aug 2013", end: "Oct 2014" },
			],
		},
		{
			org: "AccqCorp",
			location: "Waterloo, Ontario",
			roles: [{ title: "IT operations supervisor", start: "Jan 2009", end: "Aug 2013" }],
		},
	] as Employer[],
	skills: [
		"Platform engineering",
		"AWS",
		"Amazon EKS and Kubernetes",
		"AI tooling and coding agents",
		"Model serving",
		"TypeScript",
		"DNS",
		"Open source",
	],
	education: [{ school: "Mohawk College", credential: "Network Engineering and Security Analyst", years: "2006 to 2009" }],
};
