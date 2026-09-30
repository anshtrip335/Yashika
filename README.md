# Our Little Corner

A static, three-file (HTML/CSS/JS) personal website: a birthday surprise gate that unlocks a permanent relationship site underneath.

## Files

```
index.html        structure of every screen and section
style.css         all styling (colors, layout, animations)
script.js         all content + logic (edit siteConfig etc. here)
assets/images/    put your photos here
assets/videos/    put your video here
assets/audio/     put a song here (optional)
```

## What you need to edit first

Open **script.js** — everything personal is at the top, in plain objects:

- `siteConfig` — your name, the two cities, the love letter (already written for you — read it and tweak anything you'd like), the album link
- `timelineEntries` — "Our Story" milestones. One entry (9th — month not specified) is missing its month; fill that in along with anything else you remember about that day.
- `loveReasons` — the flip cards in "Things I Love About You"
- `memories` — the photo scrapbook grid
- `openWhenMessages` — the "Open When…" envelope cards (the "miss us" one is still incomplete — finish that message whenever you're ready)

You don't need to touch anything below the line that says the logic starts.

## Adding your photos

Drop files into `assets/images/` using the exact filenames already referenced in `script.js` / `index.html` — for example `assets/images/birthday-photo.jpg`, `assets/images/main-photo.jpg`, `assets/images/memory-story-photo.jpg` (this is the one photo used in the "Our Story" timeline, for 8 July). Until a real file is in place, that spot shows a soft placeholder box instead of a broken image.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push these files (keep the folder structure as-is).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/(root)**.
4. Save — GitHub gives you a URL like `https://yourusername.github.io/repo-name/` a minute or two later.

Because everything uses relative paths, it will work as-is on GitHub Pages with no configuration changes.

## Notes

- The name-entry step is a playful gate, not real security — anyone with the link can technically view the page. That's expected for a static GitHub Pages site.
- The birthday sequence only plays in full on the very first visit (tracked via `localStorage` in the browser). After that, returning visitors get a "Welcome back" screen with a button to replay it whenever they want.
- Live location sharing was intentionally left out for privacy/safety reasons — the "Distance Between Us" section calculates a real distance from fixed city coordinates instead, which is simple and completely safe to ship.
- The whole site respects `prefers-reduced-motion` for anyone who has that turned on.
