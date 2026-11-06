---
title: Auto Licenser (PowerShell)
description: A powershell script to append a license to scripts
published: false
highlight: false
---

One of my biggest issues when writing code is not licensing the actual code file properly.

As a post solution I made a powershell script:
- look for all the scripts in a folder
- loop through all those scripts
- check if a script has a license
- if the script **hasn't** been licenesed adding the one provided

This tool was meant to solve the issue of retroactively licensing many scripts that weren't setup from a template with a license or didn't have one included.


```PowerShell

```