import { createFileTracker } from 'git-file-tracker';

const tracker = createFileTracker({
    watchPath: './src',
    autoCommit: true,
    autoPush: true,
    branch: 'main'
});

// The tracker will automatically monitor files and create commits
// To stop tracking:
await tracker.stop();