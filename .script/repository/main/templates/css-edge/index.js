module.exports = (argv)=>{
  const args = require('yargs')
  .option('infile', {
      alias: 'i',
      default:'./style/index.css',
      describe: 'input file'
    })
    .option('outfile', {
        alias: 'outfile',
        default:'./dist/style.css',
        describe: 'output file'
      })
  .argv;
  //Set Up file System requirements
  try{
    require('fs').mkdirSync(require('path').dirname(args.outfile));
  }catch(e){

  }
  return `node ./node_modules/postcss-cli/bin/postcss ${args.infile} --use postcss-cssnext -o ${args.outfile}`;
}
