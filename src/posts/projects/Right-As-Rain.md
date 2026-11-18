---
title: Right As Rain
description: An asymmetric weather themed PVP bullet hell with an affinity for puns.
published: false
highlight: true
priority: 100
backgroundColor: "#350A0CCC"
borderColor: "#FD763FFF"
titleColor: "#FD763FFF"
textColor: "#FD763FFF"
iconsrc: right-as-rain
iconAltText: Right As Rain
skills:
  - Unity
  - C#
  - Netcode
  - Object Pooling
  - Systems Design
---
# The Concept
Right as Rain is an asymmetric weather themed PVP bullet hell with an affinity for puns.

I started working on this project with a team where we had to pick a constraint from a list. We brainstormed a couple of ideas given our skill sets and boiled it down to 3, all of which used the same constraint of locked camera.
- A top down zelda-like where you could modify the tilemap and traverse it vertically
- A parkour platformer full of one screen action puzzles
- A pvp bullet hell where one player controls the "boss"
We voted anonomously on these three concepts and it was incredibly close between all three, there was 2 points between 3rd and 1st place, but the bullet hell won out.

It was at this time that we also nailed down the theme when someone mentioned weather, and there was an offhanded comment of "Its going to rain cats and dogs" and thus the affinity for weather puns was born.

# The Prototype
From the get-go we wanted the gameplay to be assymetric, we split the users into two, the "boss" and the "player". We wanted these to be balanced while having distinct gameplay and advantages from eachother. 
> (This split would later come back to bite us, and we would revert it, but it was useful during prototyping)

| Attribute          | Players                             | Bosses                                                 |
| ------------------ | ----------------------------------- | ------------------------------------------------------ |
| Health             | Little                              | A Lot                                                  |
| Movement           | Speedy                              | Limited                                                |
| Movement Option    | Yes                                 | No                                                     |
| Starting Attacks   | 2 Basic                             | 4 Complex                                              |
| Gameplay Varaition | Pickups<br>(attakcs, health, other) | Level Up<br>(more attacks, upgraded attacks, movement) |
The main way that we encouraged the players to interact with each other beyond "Get the other guys health bar to 0" was there was invisible timers everywhere. The boss would slowly level up and get stronger over time. Pickups would spawn over time letting the player power up if the boss didn't engage.

My favorite mechanic was that boss attacks would spawn pickup coins, which when the player collected 10 would spawn a pickup. This meant that players were weaving in and out of attacks naturally to get access to cool powerups.

This prototype culminated at the Falmouth Games Academy Expo where it won Best First Year Game.

https://studio-forecast.itch.io/right-as-rain

Even before the expo was done, we had already started talking about taking the project forward. Many people who played it asked if it was on steam or if we were going to put it on steam, and at the time, we said no. That was about to change...

# The Refactor
The very first thing we talked about when we talked about publishing Right as Rain was doing a full refactor of the project. We did this for a few reasons.
1. We weren't using object pooling 
	- For a bullet hell  game, this would be by far the single largest performance boost, and its crazy we didn't do it already
2. Easier content creation
	- We had a hard cap at 4 players, and for every thing a player needed you would need 4 copies of it. If we increased that to 8 players it would need 8 copies. That needed fixing.
	- When prototyping we were tried adding a couple of extra characters, attacks, pickups, and handicap modifiers, and all of them were incredibly tedious, or too difficult to test/add. (This is where the character splitting hurt us the most)
3. Online multiplayer
	- The single biggest piece of feedback we received from playtesters. 
	- Given our skillset at the time, it made sense to only do local multiplayer, but most people, really, really, really wanted online and steam remote play couldn't cut it (we tried). 

We created a monster of a UML diagram that was meant to plan and break down how systems were going to interact. This is where the distinction of "player" and "boss" was dissolved, as well as a few others.

We had 9 attack types that were mutually exclusive. The worst of which where the DamageZones and projectiles. DamageZones where supposed to be stationary (which is just a projectile that doesn't move), but there were damage zones that did move, and projectiles that had speeds of 0 so they didn't move.

We consolidated attacks into 2 different types:
- Waves which spawn attacks (waves or projectiles)
- Projectiles

Attacks and burst movement were also merged into the same inheritance structure allowing character controllers to alter them (via something like a pickup)

A similar thing was done to pickups consolidating 5 mutually exclusive kinds of powerup pickups into 1 kind so that a designer could mix and match them.

*Minor footnote that is probably the biggest plus for content creation in the project*
All of these systems are put through a custom event system and upgradable value system so that values don't have equations manually scripted in for modifications. 
`Damage = base -> ApplyMods(IsPlayerMod, LevelUpMods, HandicapMods)`