import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('public', 'assets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 55, right: 55 }
});

const destPath = path.join(outputDir, 'Tulika_Shree_Resume.pdf');
const aliasPath = path.join(outputDir, 'resume.pdf');

const writeStream = fs.createWriteStream(destPath);
doc.pipe(writeStream);

// Styling constants
const primaryColor = '#1e1b4b'; // Deep Indigo
const accentColor = '#6d28d9';  // Violet
const textColor = '#334155';    // Slate
const lightGray = '#64748b';

// Header
doc.fontSize(24).fillColor(primaryColor).font('Helvetica-Bold').text('TULIKA SHREE', { characterSpacing: 1 });
doc.fontSize(11).fillColor(accentColor).font('Helvetica').text('Creative Designer  |  Digital Creator  |  Aspiring Developer', { lineGap: 6 });

doc.fontSize(9.5).fillColor(textColor).font('Helvetica')
  .text('Location: Barh, Patna, Bihar, India   |   Email: shreetulika64@gmail.com   |   Phone: +91 9905966498');

doc.moveDown(0.8);
doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(55, doc.y).lineTo(540, doc.y).stroke();
doc.moveDown(1);

// Helper for section headings
function addSectionHeader(title) {
  doc.moveDown(0.8);
  doc.fontSize(12).fillColor(accentColor).font('Helvetica-Bold').text(title.toUpperCase(), { characterSpacing: 0.8 });
  doc.strokeColor('#e2e8f0').lineWidth(0.75).moveTo(55, doc.y + 2).lineTo(540, doc.y + 2).stroke();
  doc.moveDown(0.6);
}

// Career Objective
addSectionHeader('Career Objective');
doc.fontSize(10).fillColor(textColor).font('Helvetica')
  .text('Seeking a good professional job opportunity where I can develop my skills, gain practical experience, and contribute creatively. Passionate about learning, creative thinking, and exploring the intersection of modern technology and visual design.', {
    lineGap: 4,
    align: 'justify'
  });

// Education
addSectionHeader('Education');
doc.fontSize(11).fillColor(primaryColor).font('Helvetica-Bold').text('Bachelor of Science (B.Sc.) in Zoology');
doc.fontSize(10).fillColor(accentColor).font('Helvetica').text('A.N.S. College, Barh');
doc.fontSize(9.5).fillColor(lightGray).font('Helvetica-Oblique').text('Current Status: 3rd Year (Ongoing)  |  Expected Completion: 2028');
doc.moveDown(0.4);

// Additional Professional Development / Internship
addSectionHeader('Internship Experience');
doc.fontSize(11).fillColor(primaryColor).font('Helvetica-Bold').text('SKMT Trust');
doc.fontSize(10).fillColor(accentColor).font('Helvetica').text('Internship Experience');
doc.fontSize(9.5).fillColor(textColor).font('Helvetica')
  .text('An opportunity to gain exposure, learn through experience, and develop practical skills in an organized professional environment.');
doc.moveDown(0.4);

// Skills
addSectionHeader('Key Competencies & Skills');

doc.fontSize(10.5).fillColor(primaryColor).font('Helvetica-Bold').text('Creative Skills:');
doc.fontSize(9.5).fillColor(textColor).font('Helvetica').text('• Graphic Design  • Art & Craft', { indent: 10, lineGap: 3 });

doc.moveDown(0.4);
doc.fontSize(10.5).fillColor(primaryColor).font('Helvetica-Bold').text('Technology & Digital Tools:');
doc.fontSize(9.5).fillColor(textColor).font('Helvetica').text('• Vibe Coding (Modern AI-assisted development)  • Computer Applications (ADCA)', { indent: 10, lineGap: 3 });

doc.moveDown(0.4);
doc.fontSize(10.5).fillColor(primaryColor).font('Helvetica-Bold').text('Professional Strengths:');
doc.fontSize(9.5).fillColor(textColor).font('Helvetica').text('• Leadership  • Clear Communication  • Adaptability & Fast Learning', { indent: 10, lineGap: 3 });

// Portfolio Note
addSectionHeader('Online Portfolio & Contact');
doc.fontSize(9.5).fillColor(textColor).font('Helvetica')
  .text('Portfolio: Tulika Shree Personal Brand  |  Contact: shreetulika64@gmail.com / +91 9905966498', { lineGap: 4 });
doc.fontSize(8.5).fillColor(lightGray).font('Helvetica-Oblique')
  .text('Verified Curriculum Vitae  •  Barh, Patna, Bihar');

doc.end();

writeStream.on('finish', () => {
  // Also copy to resume.pdf
  fs.copyFileSync(destPath, aliasPath);
  console.log('Successfully generated Tulika_Shree_Resume.pdf and resume.pdf');
});
