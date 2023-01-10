import color from 'randomcolor';
import chalk from 'chalk';

const userHue = process.argv[2];
const userLum = process.argv[3];

const ranColor = color.randomColor({
    luminosity: userLum,
    hue: userHue,
});

function poundSignDesign(str) {
    console.log(chalk.hex(ranColor).bold(str));
}

poundSignDesign('###############################');
poundSignDesign('###############################');
poundSignDesign('###############################');
poundSignDesign('#####                     #####');
poundSignDesign(`#####      ${ranColor}        #####`);
poundSignDesign('#####                     #####');
poundSignDesign('###############################');
poundSignDesign('###############################');
poundSignDesign('###############################');

//console.log(ranColor);