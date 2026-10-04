# CM — Career Manager (OFFLINE EDITION)

This edition is designed to run without runtime internet requests.

Included locally:
- CM black-only interface
- career simulation
- characteristics-first OVR
- age-driven outcomes
- academy probability pool
- manager/tactical fit
- transfer/departure reputation
- final football-world legacy
- original meme/caption bank
- original UI sound effects
- local SVG CM icon
- PWA manifest
- service worker/offline cache
- GitHub Actions build artifact
- GitHub Pages deployment

## Phone → GitHub → Actions

Upload the CONTENTS of this folder to a GitHub repository.
Commit to `main`.
Open Actions → CM Offline Build & Deploy.
The workflow copies the site into `dist`, uploads it as an artifact, and deploys it to GitHub Pages.

There is no npm install step and no third-party runtime dependency.
