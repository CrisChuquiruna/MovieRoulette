import { useContext } from 'react';
import { UserContext } from '../../context/userState';
import { useForm } from '../../hook/useForm';
import './CreateListForm.css';
import { sendSVG, svgClose } from '../../constants/icons';
import { createList } from '../../services/movie_list_crud';

export default function CreateListForm ({ handleClick, reloader }) {
  const { user } = useContext(UserContext);
  const { created_by, is_public, movies_list, shared_users, title, onInputChange, onResetForm } = useForm({
    title: '',
    movies_list: '',
    created_by: user.user_id,
    is_public: true,
    shared_users: []
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const list = {
      title,
      movies_list,
      is_public,
      created_by,
      shared_users
    };

    createList({ list, reloader });
    handleClick();
    onResetForm();
  };

  return (
    <div className='pop-up' >
      <button className='btn_svg close' onClick={handleClick}>{svgClose}</button>
      <form onSubmit={onSubmit} className="createListForm_container">
        <div className='form_input'>
          <input
            type="text"
            name="title"
            placeholder="List name"
            value={title}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
        </div>
        <button className='btn_svg'>{sendSVG}</button>
      </form>
    </div>
  );
}
