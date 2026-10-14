// Styles /rss.xml when someone opens it in a browser. Feed readers ignore it.
import sans from "@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2?url";
import { SITE } from "../site";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// pubDate looks like "Wed, 14 Oct 2026 00:00:00 GMT"; show it the way the site does ("October 14, 2026").
const monthChoose = months
	.map((m, i) => `<xsl:when test="$m = '${m}'">${monthNames[i]}</xsl:when>`)
	.join("");

const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
<xsl:output method="html" encoding="UTF-8" doctype-system="about:legacy-compat" indent="no"/>

<xsl:template name="date">
	<xsl:param name="d"/>
	<xsl:variable name="m" select="substring($d, 9, 3)"/>
	<xsl:choose>${monthChoose}</xsl:choose>
	<xsl:text> </xsl:text>
	<xsl:value-of select="number(substring($d, 6, 2))"/>
	<xsl:text>, </xsl:text>
	<xsl:value-of select="substring($d, 13, 4)"/>
</xsl:template>

<xsl:template match="/">
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="robots" content="noindex"/>
	<title>RSS feed | ${SITE.name}</title>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
	<script>try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
	<style>
		@font-face { font-family: "Schibsted Grotesk Variable"; font-style: normal; font-display: swap; font-weight: 400 900; src: url(${sans}) format("woff2-variations"); }
		:root { --bg:#ffffff; --surface:#f5f6f8; --ink:#22252b; --muted:#5d636e; --rule:#e1e4ea; --accent:#1f4fa8; --plate:#d62839; --plate-text:#ffffff;
			--sans:"Schibsted Grotesk Variable", system-ui, sans-serif; --mono:ui-monospace, "SFMono-Regular", Menlo, monospace; --gutter:clamp(1.25rem, 4vw, 2.5rem); color-scheme:light; }
		@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg:#16181d; --surface:#1f2228; --ink:#e8eaee; --muted:#a3a9b4; --rule:#2f333b; --accent:#8fb3f5; color-scheme:dark; } }
		:root[data-theme="dark"] { --bg:#16181d; --surface:#1f2228; --ink:#e8eaee; --muted:#a3a9b4; --rule:#2f333b; --accent:#8fb3f5; color-scheme:dark; }
		*, *::before, *::after { box-sizing: border-box; }
		html { background: var(--bg); color: var(--ink); font-family: var(--sans); line-height: 1.5; -webkit-text-size-adjust: 100%; }
		/* font-family on body too: the polyfill adds a reset that sets body to the initial font. */
		body { margin: 0; font-family: var(--sans); }
		a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 0.18em; }
		a:hover { text-decoration-thickness: 2px; }
		.wrap { width: 100%; max-width: 64rem; margin-inline: auto; padding-inline: var(--gutter); }
		header { padding-block: 1.75rem; }
		.wordmark { display: inline-block; font-size: 1.375rem; letter-spacing: -0.035em; line-height: 1; white-space: nowrap; padding: 0.14em 0.36em 0.18em; background: var(--plate); color: var(--plate-text); border-radius: 0.24em 0.24em 0.46em 0.46em; text-decoration: none; }
		.wordmark .one { font-weight: 550; } .wordmark .num { font-weight: 850; }
		h1, h2, h3 { font-weight: 650; line-height: 1.15; letter-spacing: -0.015em; margin: 0; }
		h1 { font-size: 2.25rem; margin-top: clamp(2rem, 6vw, 4rem); }
		.lede { color: var(--muted); margin: 0.75rem 0 1.5rem; max-width: 36rem; }
		.subscribe { display: flex; gap: 0.5rem; max-width: 36rem; margin-bottom: 3rem; }
		.subscribe code { flex: 1; min-width: 0; overflow-x: auto; white-space: nowrap; font-family: var(--mono); font-size: 0.9375rem; background: var(--surface); border: 1px solid var(--rule); border-radius: 6px; padding: 0.55rem 0.75rem; }
		.subscribe button { font: inherit; font-weight: 600; color: var(--bg); background: var(--ink); border: 0; border-radius: 6px; padding: 0.55rem 1rem; cursor: pointer; }
		h2 { font-size: 1.3125rem; color: var(--muted); font-weight: 600; margin-bottom: 0.5rem; }
		ol { list-style: none; margin: 0; padding: 0; }
		li { display: grid; grid-template-columns: 11rem 1fr; column-gap: 2rem; padding-block: 1.25rem; }
		li + li { border-top: 1px solid var(--rule); }
		time { color: var(--muted); font-size: 0.9375rem; padding-top: 0.2rem; }
		h3 { font-size: 1.3125rem; }
		h3 a { color: var(--ink); text-decoration: none; }
		h3 a:hover { color: var(--accent); text-decoration: underline; }
		li p { margin: 0.4rem 0 0; color: var(--muted); max-width: 36rem; }
		footer { margin-top: 5rem; padding-block: 3rem 2.5rem; border-top: 1px solid var(--rule); color: var(--muted); font-size: 0.9375rem; }
		footer a { color: var(--muted); } footer a:hover { color: var(--ink); }
		@media (max-width: 40rem) { li { grid-template-columns: 1fr; } }
	</style>
</head>
<body>
	<header class="wrap"><a href="/" class="wordmark" aria-label="one24, home"><span aria-hidden="true"><span class="one">one</span><span class="num">24</span></span></a></header>
	<main class="wrap">
		<h1>Follow the writing</h1>
		<p class="lede">This is the RSS feed for my posts. Paste its address into any feed reader and new posts will show up there as soon as they're published.</p>
		<div class="subscribe">
			<code id="feed-url"><xsl:value-of select="/rss/channel/atom:link[@rel='self']/@href"/></code>
			<button type="button" id="copy" hidden="">Copy</button>
		</div>
		<h2>Latest posts</h2>
		<ol>
			<xsl:for-each select="/rss/channel/item">
				<li>
					<time><xsl:call-template name="date"><xsl:with-param name="d" select="pubDate"/></xsl:call-template></time>
					<div>
						<h3><a href="{link}"><xsl:value-of select="title"/></a></h3>
						<p><xsl:value-of select="description"/></p>
					</div>
				</li>
			</xsl:for-each>
		</ol>
	</main>
	<footer class="wrap"><a href="/">Back to one24.ai</a></footer>
	<script>
		(function () {
			var b = document.getElementById("copy"), u = document.getElementById("feed-url");
			if (!b || !u || !navigator.clipboard) return;
			b.hidden = false;
			b.addEventListener("click", function () {
				navigator.clipboard.writeText(u.textContent.trim()).then(function () {
					b.textContent = "Copied";
					setTimeout(function () { b.textContent = "Copy"; }, 2000);
				});
			});
		})();
	</script>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
`;

export function GET() {
	return new Response(xsl, { headers: { "Content-Type": "text/xsl; charset=utf-8" } });
}
