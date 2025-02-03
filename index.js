const { createFileTracker } = require('git-file-tracker');

// Create a file tracker instance
const tracker = createFileTracker({
    watchPath: './src',          // Change this to watch different directories
    gitDir: process.cwd(),       // Change the Git repository location
    ignorePaths: ['*.log'],      // Add patterns to ignore
    autoCommit: true,            // Set to false to disable automatic commits
    autoPush: true,             // Set to false to disable automatic pushing
    branch: 'main'        // Change the target branch
});

console.log('File tracker started! Try making some changes in the src directory.');

// Handle process termination
process.on('SIGINT', async () => {
    console.log('\nStopping file tracker...');
    await tracker.stop();
    process.exit(0);
});