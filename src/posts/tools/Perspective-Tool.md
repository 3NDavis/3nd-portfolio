---
title: "Perspective Builder"
description: "A tool to keep an object's perspective's position the same while changing its world position"
published: true
highlight: false
---

In Shooting Stars, we decided that a mechanic we wanted to use was perspective puzzle(s). 
A perspective is made of 2 parts:
- A Position
- A Facing Direction
This was all that was needed for the solve detection. However, players were given no feedback as to the right position or facing direction. 

Designers used decals to hint at the proper configuration of elements, and changed the world position of certain objects to make them line up only when the player was in the correct position, and looking in the correct direction.

This led to one major issue. It was unnecessarily challenging to build perspective puzzles that were not immediately solvable. A designer would line up the world objects for the solution, but they would usually end up being on the same plane, making the solution trivial. Moving the objects off of that plane led to trial and error and inaccuracies, since the transforms didn't align with the perspective.

To solve this I made a tool that lets the designer move an object along the line that starts at the solved camera position, and continues through the objects position. The designer can then move the object along that line, and scale it resulting in the same configuration from the solution's perspective, but changing the world-space values.

![[PerspectiveTool.gif|484]]