---
title: Pave the road
description: It took me months to get AI agents working for me. My team shouldn't have to pay that cost again, one engineer at a time.
date: 2026-10-14
draft: false
---

In [The day it clicked](/writing/the-day-it-clicked/), I wrote about the months it took before AI agents started working for me. The models were never the hard part. Changing how I work was. So was getting the agent access to every tool I use, and building a harness I'd trust at work.

I got through it mostly on my own. Then I looked around.

A lot of the engineers on my team were stuck in exactly the same place. Same questions, same missing access, same uneasy feeling about letting an agent loose on real systems. Every one of them was about to pay the cost I had just paid, separately, one engineer at a time.

That's the part I couldn't let go of.

## Why it falls to tech leads

I don't think every engineer should have to become a tooling expert before an agent is useful to them. Most of them are heads down on delivery. They don't have a few spare weeks to wire up integrations and figure out guardrails, and they shouldn't need them.

Tech leads are in a different spot. We already touch a lot of systems, a little at a time, so we've usually done most of the wiring once already. We also see the whole team. When five people hit the same wall in the same week, that isn't five problems. It's one problem that keeps getting paid for.

So the job is simple to describe: pay the setup cost once, so your team doesn't pay it over and over.

## What I'm paving

I'm building a shared set of tools for my team. Nothing exotic, just the things I wish I'd had on day one.

- **Connectors.** Access to the systems people use every day, so the agent can actually see what they see. The token helper and observability connector from the last post are good examples. Building them took me real time. Using them should take nobody any.
- **Guardrails.** Checks that stop the agent from doing things it shouldn't. This is the part that makes people comfortable trying it on real work, and the part almost nobody builds for themselves.
- **Shared setup.** A common config and set of skills everyone can start from, instead of a blank page.
- **Docs and onboarding.** A way in that doesn't need me in the room.

## What I'm deliberately not sharing: prompts

The first thing most teams build is a shared prompt library. I'm not building one, on purpose.

**A copied prompt means someone else did the thinking.** The whole point is that the engineer stays in charge. You own what ships, no matter who typed it, and that's hard to do when you're running someone else's instructions.

**If you don't understand a prompt, you can't tell when its output is wrong.** A prompt you wrote yourself comes with a sense of what good looks like. A borrowed one doesn't.

**Everyone works differently.** The agent should adapt to the engineer, not the other way round. A prompt that fits how I think might be exactly wrong for how you do.

**Prompts don't travel well.** On a team where people use different harnesses and different models, the same prompt can behave very differently from one setup to the next. It looks shared, but it isn't really the same thing for everyone.

So the rule I'm working with is: share the road, not the driving. Tools, access and guardrails are shared. How you talk to the agent, and what you decide, stays yours.

## The response so far

I've shown it to a bunch of engineers, and to people who aren't engineers at all. The reaction has been the same: when can I have it?

The non-engineers surprised me most. I'd been thinking of this as an engineering problem. It turns out the wall I hit, too much setup before anything useful happens, is in front of a lot more people than I expected.

## If you're a tech lead

You probably went through some version of my months already. That experience is worth more than it feels like. You know where the walls are, because you hit them.

Look at your team and find the wall they keep hitting. Then take it down once, for everyone.
