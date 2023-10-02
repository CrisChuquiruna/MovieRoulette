import { sendSVG } from '../../constants/icons';
import { useForm } from '../../hook/useForm';

export function EditForm ({ setDisplay, display, handleClick, placeholder }) {
  const { title, onInputChange, onResetForm } = useForm({
    title: placeholder || ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setDisplay(!display);
    if (!title) return;

    handleClick(title);

    onResetForm();
  };

  return (
    <form action="" onSubmit={onSubmit} className="edit_form">
      <div className='edit_form container_flex '>
        <input
          type="text"
          name="title"
          placeholder='Add a movie'
          onChange={onInputChange}
          autoComplete="off"
          value={title}
          autoFocus
        />
        <button className="btn_svg" >{sendSVG}</button>
      </div>
    </form>
  );
}
