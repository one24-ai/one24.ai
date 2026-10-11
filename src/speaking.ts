// Talks and podcast appearances: shown on /speaking/ and listed in the printed CV. Newest first.
export interface Appearance {
	year?: string;
	title?: string; // omit to use the event name as the heading
	event: string;
	format: string;
	summary?: string;
	link?: string;
}

// Newest first. Add recordings or slides as `link` when they turn up.
export const TALKS: Appearance[] = [
	{
		year: "2023",
		event: "Games on AWS Korea",
		format: "Keynote and hour-long session",
		summary:
			"How Riot Games and AWS build the low-latency infrastructure behind League of Legends and VALORANT, with a keynote and a deeper session track.",
	},
	{
		year: "2019",
		title: "Preventative and Detective Control for Security Conscious Organizations",
		event: "DevOpsDays Toronto",
		format: "Ignite talk",
		summary:
			"Freedom within boundaries: a pipeline-driven framework of preventative and detective controls that lets developers move fast while the organization stays secure.",
		link: "https://devopsdays.org/events/2019-toronto/program/zach-koncir/",
	},
	{
		year: "2017",
		title: "Azure App Service Environment for Highly Compliant Scenarios",
		event: "Toronto Azure Group",
		format: "Meetup talk",
	},
	{
		year: "2017",
		title: "Jenkins Pipelines",
		event: "Puppet User Group and Pivotal Meetup",
		format: "Meetup talks",
	},
	{
		year: "2016",
		title: "AWS Fundamentals",
		event: "Pivotal Spring Conference",
		format: "Conference talk",
	},
];

export const PODCASTS: Appearance[] = [
	{
		year: "2023",
		title: "Building New Player Experiences at Riot Games",
		event: "The AWS Developers Podcast, episode 101",
		format: "Guest, with Ashwin Raghuraman (AWS)",
		summary:
			"How Riot uses the cloud to cut player ping through Riot Direct, the move to Kubernetes, and the tech behind fighting toxic voice chat.",
		link: "https://podcasts.apple.com/ca/podcast/episode-101-building-new-player-experiences-at-riot/id1574162669?i=1000636441064",
	},
];
