const { PDFDocument, PDFName } = require('pdf-lib');
const fs = require('fs');

// Funzione per unire i documenti PDF
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

// Funzione per aggiungere la outline con i nomi dei file
async function addOutlineToPDF(pdfPath, outlineTitle, outputPath) {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Aggiungi la nuova outline con il titolo specificato
    const root = pdfDoc.context.obj({
        Type: 'Outlines',
        First: pdfDoc.context.obj({
            Title: outlineTitle,
            Parent: pdfDoc.context.obj({}),
        }),
    });
    pdfDoc.catalog.set(PDFName.of('Outlines'), root);

    const newPdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, newPdfBytes);
}


// Esempio di utilizzo
const pdfPaths = "./out";
const mergedPdfOutputPath = 'sviluppo_web_in_javascript.pdf';
const pdfWithOutlineOutputPath = 'merged_with_outline.pdf';
const outlineTitle = 'Merged PDF with Outline';

mergePDFs(pdfPaths, mergedPdfOutputPath)
    .catch((error) => console.error('Errore durante l\'unione dei PDF:', error));