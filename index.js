import color from 'randomcolor';
import chalk from 'chalk';

const userHue = process.argv[2];
const userLum = process.argv[3];

const ranColor = color.randomColor({
  luminosity: userLum,
  hue: userHue,
});

if (userHue === 'ask') {
  console.log('what color did you want?');
} else {
  function poundSignDesign(str) {
    console.log(chalk.hex(ranColor).bold(str));
  }

  poundSignDesign(`###############################
###############################
###############################
#####                    #####
#####      ${ranColor}        #####
#####                     #####
###############################
###############################
###############################`);
}
