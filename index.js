#!/usr/bin/env Node

/**
 * Dependencies
 * Requires Node v7.x or higher
 */

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const YAML = require('yamljs');


/**
 * Functions
 */

// Pads a number. For example, PadNumber(2, 4) returns 0002
function PadNumber(num, padlen, padchar) {
    var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
    var pad = new Array(1 + padlen).join(pad_char);
    return (pad + num).slice(-pad.length);
}
function UrlSlugify(url) {
    return url
        .replace(/https:\/\//, '')
        .replace(/http:\/\//, '')
        .replace(/\//g, '!')
        // .replace(/[<>:"\/\\|?*\x00-\x1F]/g, '-') // MSWindows safe
        .replace(/[<>:"\/\\|*\x00-\x1F]/g, '-')
}
function ResetDir(path) {
    if (fs.existsSync(path)) { fs.removeSync(path); } fs.mkdirSync(path);
}


/**
 * Prepare Config and output directories
 */

if (fs.existsSync('config.yml'))
    var config = YAML.load('config.yml');
else 
    var config = YAML.load('config-example.yml');

// Parse urls
config.urls = config.urlsRaw.replace( /\t/g, '' ).replace( / /g, '' ).replace( /\n/g, " " ).split( " " );

// Prepare output directory
if (config.outPdfDir) ResetDir(config.outPdfDir);
if (config.outJpgDir) ResetDir(config.outJpgDir);


/**
 * Main
 */

// Create Snapshots
(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();

for (let [i,url] of config.urls.entries()) {
    var snapshotFileName = PadNumber(i, config.padding) + '.' + UrlSlugify(url);

    console.log("Getting " + snapshotFileName);

    await page.emulateMedia('screen');
    await page.goto(url, {waitUntil: 'networkidle' + config.networkIdleLevel}); // networkidle0 = wait until 0 connections left; networkidel2 = wait until 2 connections left.

    for (let screenSize of config.screenSizes) {

        if (config.outJpgDir) {
            await page.setViewport({width:screenSize, height:1024 });
            await page.screenshot({
                path: config.outJpgDir + '/' + snapshotFileName + '.' + screenSize + '.jpg', 
                fullPage:true, 
                quality:config.quality 
            });
        }
        
        if (config.outPdfDir) {
            await page.pdf({
                path: config.outPdfDir + '/' + snapshotFileName + '.' + screenSize + '.pdf',
                width:screenSize, 
                displayHeaderFooter:true, 
                printBackground:true, 
            });
        }
    }
}

await browser.close();

})();