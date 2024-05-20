import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PdfGeneratorDocument from "../pdfGenerator-document/PdfGeneratorDocument";
import styles from "./PdfGeneratorForm.module.scss";

interface IFormInput {
  title: string;
  image: FileList;
}

const PdfGeneratorForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const [task, setTask] = useState<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    setTask(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>
          Заголовок PDF-файла
        </label>
        <input
          id="title"
          data-testId="input-update"
          className={styles.input}
          {...register("title", { required: "Это поле обязательно" })}
        />
        {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="image" className={styles.label}>
          Загрузите изображение
        </label>
        <input
          id="image"
          type="file"
          className={styles.input}
          {...register("image", { required: "Это поле обязательно" })}
        />
        {errors.image && <p className={styles.errorMessage}>{errors.image.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Сохранить
      </button>
      {!!task?.title && (
        <PDFDownloadLink
          document={<PdfGeneratorDocument title={task.title} image={URL.createObjectURL(task.image[0])} />}
          fileName="file.pdf"
        >
          {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </form>
  );
};

export default PdfGeneratorForm;
