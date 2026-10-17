const pdfTitle = 'Agustin_Aguilera_Conti_Cloud_Engineer_CV';
const pageTitle = document.title;

// The PDF file name comes from the title; keep the SEO title on screen
window.addEventListener('beforeprint', () => { document.title = pdfTitle; });
window.addEventListener('afterprint', () => { document.title = pageTitle; });

document.getElementById('download-pdf').addEventListener('click', () => window.print());

// index.html links here with ?print to open the print dialog straight away
if (location.search.includes('print')) window.addEventListener('load', () => window.print());
