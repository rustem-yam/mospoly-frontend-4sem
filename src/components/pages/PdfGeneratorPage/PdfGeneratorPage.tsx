import { FC } from "react";
import PdfGeneratorForm from "./pdfGenerator-form/PdfGeneratorForm";

const PdfGeneratorPage: FC = () => {
  return (
    <>
      <h1>Генерация PDF-файла</h1>
      <PdfGeneratorForm />
    </>
  );
};

export default PdfGeneratorPage;
