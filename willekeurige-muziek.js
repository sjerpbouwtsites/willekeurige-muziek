var fs = require('fs');
var path = require('path');

const muziekmap = '\\\\sjerp-nas\\sjerp-gedeeld\\Muziek';

fs.readdir(muziekmap, (err, bestanden) => {
  if (err) return console.log(err);
  const pakMapIndex = Math.floor(bestanden.length * Math.random());
  const gekozenMapPadEinde = bestanden[pakMapIndex];
  const gekozenMapPad = path.normalize(`${muziekmap}/${gekozenMapPadEinde}`);
  
  require('child_process').exec(`start "" "${gekozenMapPad}"`);
  
});
