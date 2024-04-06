import css from "../ContactList/ContactList.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contact} key={id}>
      <div>
        <p className={css.name}>
          <IoPerson />
          {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
