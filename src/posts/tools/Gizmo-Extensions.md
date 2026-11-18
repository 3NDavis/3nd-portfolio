---
title: Gizmo Extensions
description: A set of gizmo extensions to draw shapes, complex lines, arcs, and gizmos at runtime
published: true
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
<script>
    import toolSrc from './Gizmos Extensions/Gizmos.png';
    import runtimeSrc from './Gizmos Extensions/RuntimeShape.gif';
</script>

See the <a href="https://github.com/3NDavis/Unity-Gizmos-Extensions">GitHub Here</a><br><br>

For certain projects in Unity I have wanted to draw more complex gizmos than lines. These gizmos are primarily for developer use (mainly designers) however, I have also been mindful of exposing them to the player level/character editors, so I added runtime compatible versions for some of them as well.<br><br>
## Included Editor Gizmos

<br><img src={toolSrc} alt="Included Gizmos"><br>

These are the basic gizmos included that are in the tool
- Rectangles (including squares, and triangles)
- Equilateral Polygons (pentagons, hexagons, heptagons, octagons, etc.)
- Circles
- Irregular Polygons
- Arcs
- Complex Lines
- Integers<br><br>

## Use Case Examples
- The circles and arcs are quite useful for drawing field of views for enemies.
- Triangles are really good for projectiles
- Complex lines are good for showing a projected path of something
- Using the equilateral polygons to highlight a position in the world with a different number of sides as well as colors can differentiate them.
- Integers are fantastic at labeling arrays of transforms so you don't have to keep cross referencing them.<br><br>

# Runtime Gizmos<br>

<br><img src={runtimeSrc} alt="Runtime Gizmos"><br>

Many of the tools I have made rely quite heavily on gizmos for designers and developers to be able to visualize what is happening more effectively. However, this breaks down for any player level editors since gizmos are completely stripped from builds.<br><br>

To solve this I made an object pooler specifically for managing line-renderers of gizmos designed to optimize default line gizmos and the custom ones above.<br><br>

In particular it was optimized for the complex lines and progressing lines so that it would only use 1 line renderer per shape/line or progress track, instead of using a line per segment of that shape or doubling up to show progress
> For example a rectangle uses 4 gizmos (1 between each point), but runtime uses 1 line renderer with the points at the corners. <br><br>

This allows the gizmos to be used in player editors without sacrificing parity or incurring a ridiculous performance hit.

Not all the gizmos have a runtime equivalent. Integers in particular I have decided against since they require significantly more points and logic rework, and a sprite is probably better/more performative.


