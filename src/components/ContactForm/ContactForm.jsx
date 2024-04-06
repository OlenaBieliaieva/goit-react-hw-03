import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const ContactFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "*Too short!")
    .max(50, "*Too long!")
    .required("*Required"),
  number: Yup.string()
    .min(3, "*Too short!")
    .max(50, "*Too long!")
    .required("*Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage
          component="span"
          className={css.errorMessage}
          name="name"
        />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage
          component="span"
          className={css.errorMessage}
          name="number"
        />
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
