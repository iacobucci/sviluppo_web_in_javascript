const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function mergePDFs(pdfPathsDir, outputPath) {
	const pdfPaths = fs.readdirSync(pdfPathsDir).map((pdfPath) => `${pdfPathsDir}/${pdfPath}`);

    const mergedPdf = await PDFDocument.create();

    for (const pdfPath of pdfPaths) {
        const pdfBytes = fs.readFileSync(pdfPath);
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputPath, mergedPdfBytes);
}

//TODO add outline


// Esempio di utilizzo
const pdfPaths = "./out";
const mergedPdfOutputPath = 'sviluppo_web_in_javascript.pdf';

mergePDFs(pdfPaths, mergedPdfOutputPath)
    .then(() => console.log('PDF uniti con successo!'))
    .catch((error) => console.error('Errore durante l\'unione dei PDF:', error));