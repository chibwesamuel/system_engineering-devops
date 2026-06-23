#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const directories = [".", "../boot"];

directories.forEach((dir) => {
    console.log(`\n${dir}:`);

    try {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach((file) => {
            const fullPath = path.join(dir, file.name);
            const stats = fs.statSync(fullPath);

            console.log(
                `${stats.isDirectory() ? "d" : "-"}` +
                `${stats.size.toString().padStart(8)} ` +
                `${file.name}`
            );
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}: ${err.message}`);
    }
});