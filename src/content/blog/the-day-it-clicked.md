---
title: The day it clicked
description: I struggled with AI agents for months. Then I answered a hard question about a system I'd never touched, in about an hour, while juggling other projects.
date: 2026-10-13
draft: false
---

For months, I didn't get it.

The models weren't the hard part. Everything around them was. I had to figure out how to change the way I work, get the agent access to all the tools I use, and build a harness that fit. As a tech lead, my day doesn't look like a typical engineer's on a team. I touch a lot of systems, a little at a time, and every one of them needed wiring up.

I bounced between tools. One got ruled out for policy reasons. Another never quite fit. Then I landed on [pi](https://pi.dev), and it just worked. It was minimal and fast, and I could bend it to how I work. It also had almost no guardrails. The model could drive tools pretty much however it wanted, and that's not something I could take to work and feel good about.

So I finally set aside real time to figure it out: the integrations, the habits, and the guardrails I wished it had. Somewhere along the way, without a single big moment, it changed. I stopped asking the agent to do my job and started asking it to carry the parts of the job that wear me down. Then a ticket landed that showed me how far that had gone.

## The question

A couple of months earlier, a web application firewall in front of one of our busiest APIs had started blocking real users. It was running a strict OWASP ruleset, and normal traffic had crept close enough to the blocking threshold that it tipped over. By the time anyone declared an incident, it had been going for hours.

The follow-up ticket asked a simple question: how much headroom do we have now, and can we monitor it so this doesn't happen again?

I knew what a WAF was. I knew how anomaly scoring works and roughly where I'd look. What I didn't know was this vendor. I'd never logged into it, never read its docs, never used its analytics API. Normally that's a day or two of reading before you even start on the actual question. Tasks like this sit in a backlog for a week while everyone hopes someone else picks them up.

## About an hour

I gave the agent the ticket, the incident write-up and the question. Then I mostly went back to what I was building that day, and checked in between other work.

The first thing it needed was access. It didn't have the integrations, so we built them on the spot: a small helper for storing and loading API tokens, and a connector to our observability platform. It could read the firewall config, but the audit trail didn't go back far enough to show who had changed what, and when. It said so plainly instead of guessing at the history.

Then it got to work, and it came back with things I didn't expect.

- **The question couldn't be answered as asked.** The firewall only logs the anomaly score when a request gets blocked. Near-misses aren't recorded anywhere, so true headroom can't be measured today. That's not a guess. It's a finding, and it changed the whole ticket.
- **One outlier.** It audited every zone we have. One was running a far stricter ruleset than the rest, and it was seeing about fifty times more challenges than the next busiest.
- **A backtest.** It replayed two months of data against a simple rule: alert when blocks run 1.3 times higher than the same hour four weeks running. That rule would have fired before the original incident started, hours before anyone declared it.

It proposed three ways to monitor this going forward. I picked one. When it reported the numbers, I asked how much to trust them, since the analytics are sampled. It checked: totals were stable on busy paths, noisy on quiet ones, so the alert needs a volume floor.

Counting the time to set up the tooling, I spent about an hour on it. Spread across an evening, flipping between this and two other projects.

Three months earlier, I'd have blocked off a day or two, and I'd have come back with a less useful answer.

I'm not going to pretend I stayed calm about it. For a while afterward I felt like Bradley Cooper in *Limitless*: the same brain, suddenly with access to everything it had ever half-read. The difference is that my pill came with an audit trail.

## What actually changed

The agent didn't know anything I couldn't have looked up. That's the point. What it removed was the cost of looking it up. The understanding was still mine: what a WAF is for, what a good alert looks like, which of three options was worth recommending, and when a number needed a second look. The vendor trivia was the part I'd never need again.

That's the shift I keep coming back to. Work that took a day or two now takes under an hour, not because the work got easier but because the slow parts did. And context switching, which used to be the most expensive thing an engineer did, is getting close to free. I proved that to myself by doing it three times in one evening.

It only worked because I was in the loop. The agent made assumptions, like every model does. I made the decisions. I wrote more about that in [Engineers in charge](/manifesto/), which is the closest thing I have to a summary of everything I learned the slow way.

If you're still in the months where it doesn't click, I've been there. Pick one boring task you hate and make the agent carry it. Start there.

*Next: why tech leads are in the best position to get their engineers here faster.*
