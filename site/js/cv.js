document.getElementById('download-pdf').addEventListener('click', () => window.print());

// index.html links here with ?print to open the print dialog straight away
if (location.search.includes('print')) window.addEventListener('load', () => window.print());
