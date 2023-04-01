# briq Frontend Starter

This template provides ready-to-go frontend functionality using:
- Vite 2 + Vue 3 for easy frontend development
- Typescript to sane javascript for logic development
- Vitest for testing
- Linting using ESLint
- Tailwind CSS 3 for sane CSS
- Vue Router to handle pages. This repository demonstrates how vite uses dynamic script importing to split code chunks, which is a lifesaver for efficient SPAs.
- Bundled are an SVG extension and rollup analyzer extensions, so that you can easily figure out which library ends up in what code chunk.
- FontAwesome 6 is bundled optionally, and a dynamic import file is provided. Just include that wherever you use it. You can also directly import the stuff.

## How to use

The repository is explicitedly split by feature-commit so that you can use only what you want. Note that you'll likely run into some light merge conflicts if you drop earlier commits. You also shouldn't keep a reference to it because I _will_ force push.
The feature-commit split also makes it easy to see exactly what I'm adding at every step, should you just want a random feature.

Assuming you are running on an empty git repo, simply:
1. `git remote add starter https://github.com/briqNFT/frontend-starter.git`
2. `git fetch starter main`
3. `git pull starter main`
4. `git rebase -i --root` (if your repo is _not_ empty, you may want to use an explicit commit hash instead of `--root`)
5. `git remote remove starter`

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- ESLint

Then use the "Take Over" mode to get `.vue` support in TS: 
1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette (hit ctrl + shift + p, or command + shift + p on mac), look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.
