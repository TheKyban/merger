(async () => {
  await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('2.pdf');  //merge all pages. parameter is the path to file and filename.
  
  await merger.save('merged.pdf'); //save under given name and reset the internal document
  

})();