import { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { offerDetails, personalInfo } = req.body;
    
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on('data', chunks.push.bind(chunks));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'application/pdf');
      res.send(pdfBuffer);
    });

    // Generate PDF content
    doc.fontSize(20).text('Job Offer Letter', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Dear ${personalInfo.firstName} ${personalInfo.lastName},`);
    doc.moveDown();
    doc.text('We are pleased to offer you the position of Software Engineer...');
    
    // Add offer details
    doc.moveDown();
    doc.text(`Position: ${offerDetails.position}`);
    doc.text(`Salary: ${offerDetails.salary}`);
    doc.text(`Location: ${offerDetails.location}`);
    
    // Add signature line
    doc.moveDown(4);
    doc.text('_______________________', 100, doc.y);
    doc.text('Signature', 100, doc.y + 10);
    
    doc.end();
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
