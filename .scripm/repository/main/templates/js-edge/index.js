module.exports = (argv)=>{
  const args = require('yargs')
  .option('infile', {
      alias: 'i',
      default:'./script/index.js',
      describe: 'input file'
    })
    .option('outfile', {
        alias: 'outfile',
        default:'./dist/script.js',
        describe: 'output file'
      })
  .argv;
  //Set Up file System requirements
  try{
    require('fs').mkdirSync(require('path').dirname(args.outfile));
  }catch(e){

  }
  //
  return `node ./node_modules/browserify/bin/cmd.js -t [babelify --presets [es2015] ] ${args.infile} > ${args.outfile}`;
}
