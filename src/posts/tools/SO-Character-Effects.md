---
title: "Scriptable Object Effects"
description: "Generate and trigger effects and player feedback from the same triggers without writing code"
published: true
highlight: false
---

All of the player feedback systems that I have used in unity projects have been decentralized, making it hard to remember to use all of them or have them activate for the same triggers.

For Right As Rain in particular where there is a big focus on pooled generic objects that have dynamic behaviors. In order for the same game object to use different player feedback, I needed a way to trigger effects that weren't tied to the game objects themselves. I also wanted it to be easy to test, expand, and create new effects without code.

I also needed to sync the effects for online multiplayer efficiently.

The solution I created was a ScriptableObject based framework to trigger effects. The current effects that can be triggered are:
- Transform Scale
- Sprite Color
- SpawnPrefab
	- There is the ability to set dynamic timings for particles with this one
- Controller Rumble
- Local Hitstun via Rigidbody2D freezing
- Timescale
- Animation
- Audio
- ScreenShake

I have plans to add the following but are less critical to the ones above
- post process effects
- materials
- material value setting
- animation timing

Some of these effects are a switch, they turn on, then turn off. Some have a curve or a gradient that the move through over the time that the effect is playing.



Issues
- Has a dependency to PrimeTween which is my tween library of choice. If another developer wants to use a this tool but a different tween library there may be conflicts. 
	- I have plans to try and remove this dependency as its not too embedded within the tool
- Currently effects require a component that needs an animator, player input, and a sprite renderer. Meaning all effects, even ones that don't use those components require a reference to them.
	- I want to transition to using components that use interfaces specific to each effect, so the effect player doesn't need all the extraneous components