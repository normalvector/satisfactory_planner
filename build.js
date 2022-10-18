#!/usr/bin/node

const sassPlugin = require('esbuild-sass-plugin')

// Process command line args
const yargs = require('yargs')
const args = yargs
    .option('watch', {
        description: "Continually watch for changes",
        type: 'boolean'
    })
    .help()
    .alias('help', 'h')
    .argv
const watch = args.watch
console.log(
    "Building",
    (watch ? " (Watch)" : " (Simple)")
)


// Build the options for ESBuild
const watchOptions = watch ?
    {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        }
    } : null;

const options = {
    entryPoints: ['./src/_main.tsx'],
    outfile: './build/satisfactory_planner.js',
    bundle: true,
    sourcemap: 'external',
    watch: watchOptions,
    logLevel: 'debug',
    plugins: [
        sassPlugin.sassPlugin({ cache: true, type: 'style' }),
    ]
}

// Perform the build
require('esbuild')
    .build(options)
    .catch(() => process.exit(1))
console.log("Build complete")