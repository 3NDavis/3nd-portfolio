export const slugFromPath = (path: string) =>{
	// console.log(path);
	return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
}