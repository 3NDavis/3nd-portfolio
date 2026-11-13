---
title: Auto Licenser
description: A PowerShell/Terminal script to append a license (or anything) to files
published: true
highlight: false
priority: -1
Skills:
  - PowerShell
  - Terminal
---
# The Problem
When creating scripts for packages or projects making sure they are all licensed properly not only with a license file within the project, but also at the top of the scripts themselves.

Creating a template is a good preventative solution. However it does not fix previously made scripts that don't have the right license attatched. Trying to do it manually is tedious and imprecise since you may miss a script.

# The Solution
To append a license I made a powershell script for windows and a bash script for linux:
- look for all the scripts in a specified file path
- loop through all those scripts
- check if a script has a license
- if the script **hasn't** been licenesed adding the one provided

This prevents overriding a license if it has already been given one, and significantly cuts down on the time required.

```PowerShell
$foundFiles = 0
$modifiedFiles = 0

$path = ""
$fileType = "*.cs"
$lisense = 
"
   Replace this with license using ""use double quotes when quotes are needed in the license""
   
   
"

$files = Get-ChildItem $path -filter $fileType -recurse 

foreach($file in $files) {
	$filePath = Select-Object -ExpandProperty $file.FullName
	
	$foundFiles = $foundFiles + 1
	
	$SEL = Select-String -Path $file.FullName -Pattern "Copyright"
	If ($SEL -ne $null)
	{

	}
	else
	{
		$message = "Modified: " + $file.FullName

		echo $message
		$modifiedFiles = $modifiedFiles + 1
		$license + (Get-Content $file.FullName -Raw) | Set-Content $file.FullName
	}
}
$skippedFiles = $foundFiles - $modifiedFiles
Write-Host "Skipped $skippedFiles"	
Write-Host "Modified $modifiedFiles/$foundFiles"	
```