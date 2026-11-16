---
title: Perspective Builder
description: A tool to keep an object's perspective's position the same while changing its world position
published: true
highlight: false
backgroundColor: "#E6F1F698"
borderColor: "#353B6BFF"
textColor: "#000000FF"
titleColor: "#E6F1F6FF"
iconsrc:
iconAltText: icon
skills:
  - Unity
  - C#
  - Level Design Tool
priority: 0
---

<script>
    import toolSrc from './Perspective Tool/PerspectiveTool.gif';
</script>

# The Project
Shooting stars is a first person cozy game where you have to repair constellations. This involved picking up fallen/falling stars and shooting them into a "socket". This is not enough to repair a constellation.
A constellation is a trick of perspective. Our constellations will not be the same a million years from now since our perspective of them has shifted. We wanted to emulate this somewhat by requiring the player to use perspective to get the constellation to appear on top of putting all the stars back.

## Perspective
We determined that a perspective is made of 2 parts:
- A Position
- A Facing Direction

<br>This was all that was needed for the solve detection, a collider was used for position, and whenever it detected the player within it, it checked the angle of the camera to (with some forgiveness) for the facing angle.<br><br> 

However, players were given no feedback as to the right position or facing direction. <br><br>

## Player Direction
Decals, and environment art was used to hint at the proper configuration of stars. This meant that the player knew what the target constellation was.

## Constellation
To build a constellation the sockets could not be on the same plane, otherwize there would be no paralax effect between them and the solution would be too obvious. This mean that the sockets had to have their world coordinates altered while keeping the constellation the same. Orinially this meant eye-balling the world positions and scales so that they roughly matched up. This led to inacuracies, and a lot of wasted time and frustration.

# Solution
I realized that in order to preserve the constellation you needed to get the line between the solved perspecive camera position, and the objects position. By storing that line, you could then move the object along that line and update the scale accordingly. This perfectly preserved the perspective, while letting the designer adjust the world position making the solution more difficult.<br><br>

<div-center>
  <img src={toolSrc} alt="" class="mdImage"/>
</div-center>

<br><br>Now designers can build along the same plane then adjust the positions leading to much faster puzzle creation.