const merger = require('pdf-merger-js');

var pdf = new merger();

const pdfMerger = async (p1,p2) => {
    let d = new Date().getTime()
  await pdf.add(p1);  //merge all pages. parameter is the path to file and filename.
  await pdf.add(p2);  

  await pdf.save(`public/merge/${d}.pdf`); //save under given name and reset the internal document
    return d;
};

module.exports = {pdfMerger}