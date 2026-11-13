---
title: Scriptable Object Character Controller
description: A codeless reprogrammable character controller
published: true
highlight: true
priority: 1
backgroundColor: "#350A0CCC"
borderColor: "#FD763FFF"
textColor: "#FD763FFF"
titleColor: "#FD763FFF"
iconsrc:
iconAltText: icon
skills:
  - Unity
  - C#
  - Inheritance
  - Polymorphism
---
<script>
  import inheritanceSrc from './SO Char Controller/CharacterActionInheritance.png' ;
  import testInspectorSrc from './SO Char Controller/CustomInspector.png' ;
  import waveGizmosSrc from './SO Char Controller/WaveGizmos.png' ;
</script>

# Attack Visualizer Tool Demo
If the tool isn't loading: <a href="https://3ndavis.itch.io/attack-visualizer">Click Here</a>

<div-center>
	<iframe frameborder="0" src="https://itch.io/embed-upload/20383989?color=bfbfbf" allowfullscreen="" width="980" height="640"><a href="https://3ndavis.itch.io/attack-visualizer">Play Attack Visualizer on itch.io</a></iframe>
</div-center>

# The Project
Right As Rain is a top-down asymmetric PVP weather themed bullet-hell.<br><br>

# The Problem
For Right As Rain we wanted a character controller that was:
- Expandable, meaning content for the controller was easy to create, and swap between
- Generic, meaning that every component could work with every character
- Independent, meaning the controller could react to gamepad or keyboard inputs, ai controller inputs or more and have the same response.

We had a few other requirements for it (such as leveling up), but if the above requirements were fulfilled then the others would be automatic.

This was a challenge because some characters don't move the same way, aim the same way, or react to button presses in the same way. 

Some characters have a movement ability while others don't. 

Some have 9 attacks, while others have 2. 

Some teleport, some accelerate, some just set a velocity. 

Some aim by pointing at the target, some are action specific, some aim the direction they are facing etc. 

And more. 

We wanted a way to have 1 character controller able to handle all of these behaviors.

# The Pillars
Lets look at the design constraints we wanted for the controller in the order they were solved
## Independent
To separate the controller from the input an abstraction layer between the controller and the input was added. 

To pass in all the necessary values for the controller to work: the ai, or the player would set values in a context container, which would then be passed to the character controller.

## Generic
This constraint was a reaction to the initial prototypes of Right as Rain, where we had a different character controller for every different kind of character.

To make the controller generic we had a few components that were optional on each character, a `move controller`, `aim controller`, and `action controller`. These alone can't do anything; you drag in ScriptableObjects that had different values and logic to change the way they work.

## Expandable
As alluded to in Generic, ScriptableObjects play a role in this tool. No MonoBehaviour in this tool works on its own, you have to give it a behavior from a ScriptableObject. We landed on having two kinds of ScriptableObjects: Behaviors and Actions.

> Behaviors are logic that will be called via update

> Actions are  logic that is called once (like a button press or an attack trigger)

# Details
## Components

Even when all the logic is contained in a ScriptableObject, something has to call it within the game loop. Hence the use of MonoBehavior. The components in this tool are relatively simple compared to others. All they will do is tell their `Behavior` to do the polymorphic `DoBehavior()`
```CSharp
//Example
public class MovementControllerComponent : MonoBehavior
{
	[SerializeField] MovementBehavior movementBehavior;
	
	void Update()
	{	
		if(movementBehaviour)
			movementBehavior.DoBehavior(behaviorParams);
	}
}
```
The behavior can be set via script, or inspector. This allows the same component to have multiple behaviors. To change a characters behavior you don't have to add and destroy a component or set a plethora of values, you just set the current behavior SO.

## Behaviors
In most character controllers you are be able to change the speed, jump force, aim sensitivity, etc. However, modifying those values does not change the way those values are applied.

Behaviors were my solution to letting me change the controller logic on the same character controller in addition to changing the values. 

For example:
>
`VelocityMovementbehavior`: sets <u>velocity</u> to based on $input * speed$.
>
`TeleportMovementbehavior`: sets <u>position</u> based on $input * distance$
>
Both the behaviors above inherit from `MovementBehavior`, so the `MovementControllerComponent` could use either of them, and even change the one its using at runtime.

The tool contains behaviors for the following:
- movement: velocity, teleport in direction, teleport to position.
- aiming: pointer position, in direction, to a transform

## Actions
Unlike behaviors which are meant to be called from `Update`, actions are meant to be called from an event callback(like a button or a behavior trigger), they can be called from different parts of a button press, have cooldowns, delays, trigger effects using my [SOEffects] tool, and more.

<img src={inheritanceSrc} alt="" class="mdImage"/>

Actions are where the majority of this tools versatility lie. Especially the attacks. In the prototype of Right As Rain every single attack had its own script. All attacks are now one of two attacks
- A projectile, something that can damage
- A wave, something that spawns projectiles.
Backwards compatibility with the old system had to be preserved as well.
This led to the number of combinations available in just projectiles to be in the <u>trillions</u> including just booleans and enums.

One of the early issues I ran into with actions especially attacks, was that it was getting annoying to test values.I was instantiating the `CharacterActions` so I couldn't even change the values at runtime. this meant stopping, setting the value and replaying to change 1 value. 

I ended up with 2 solutions to this, both of which are still used. 
1. Not instantiating the SOs. The reason I was doing it was so that each action's timer was self contained, not a bad idea, but instantiating SOs makes them impossible to set in the inspector, and instantating such big data classes was probably not the best practice. I ended up moving the timer to the `action controller`.
2. The more useful change was creating an extensive gizmo drawing system for the attacks that allowed me to see the attack without even having to enter playmode. You can see a demo in action <a href="https://3ndavis.itch.io/attack-visualizer">here</a>. The gizmos use almost the **exact same logic** as runtime which means changing a function or value will update the gizmos accordingly with almost perfect parity.
	1. Gizmos in particluar led to some incredibly fast testing, fixing, and iterating of attacks, and some "Modern Art"<br><br>

Some other issues are that there is some dependencies on other namespaces that could and should be removed. 
- I have a toolbox namespace full of useful function that I bring into projects that this tool references. I'd like this to be as standalone as possible.
- It is dependent on PrimeTween for timings and editor functions. I want to use corouitines and editor coroutines to remove this dependency. Since others may have a different tween library they like to use
- I'm not happy with the SOEffect dependency, I would rather have events that trigger when the attack reaches thresholds that effects could listen to, but I can't figure out how to connect it in a nice way.
	- As an alternative I have considered making it an optional dependency using Assembly Definition Asset Version defines.
- The randomness in some of the attacks doesn't work with online multiplayer at the moment.