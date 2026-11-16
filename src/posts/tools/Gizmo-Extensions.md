---
title: Gizmo Extensions
description: A set of gizmo extensions to draw shapes, complex lines, arcs, and gizmos at runtime
published: false
highlight: false
priority: 0
backgroundColor: "#350A0CCC"
borderColor: "#FD763FFF"
titleColor: "#FD763FFF"
textColor: "#FD763FFF"
iconsrc: gizmo-extensions
iconAltText: Gizmo Extensions
skills:
  - Unity
  - C#
  - Object Pooling
  - Design Tool
---
For certain projects in Unity I have wanted to draw more complex gizmos than lines. These gizmos are primarily for developer use (mainly designers) however, I have also been mindful of exposing them to the player level/character editors, so I made them runtime compatible as well.

These are the basic gizmos included that are in the tool
- Rectangles (squares, and triangles)
- Equilateral Polygons (pentagons, hexagons, heptagons, octagons, etc.)
- Circles
- Irregular Polygons
- Arcs
- Complex Lines

Many of the tools I have made rely quite heavily on gizmos for designers and developers to be able to visualize what is happening more effectively. However, this breaks down for any player level editors since gizmos are completely stripped from builds. To solve this I made an object pooler specifically for managing line-renderers of gizmos designed to optimize basic gizmos and the ones above.

In particular it was optimized for multi-point lines and progressing lines so that it would only use 1 line renderer per shape or progress track, instead of however many segments that shape would have or doubling up to show progress
> For example a rectangle uses 4 gizmos (1 between each point), but runtime uses 1 line renderer with the points at the corners. 

This allows the gizmos to be used in player editors without sacrificing parity or a ridiculous performance hit.




<a href="https://github.com/3NDavis/Unity-Gizmos-Extensions">GitHub</a>