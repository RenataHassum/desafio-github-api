import './styles.css';
import { useState } from 'react';
import * as dataService from '../../services/data-service';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import DetailsCard from '../DetailsCard';
import { DataDTO } from '../../models/data';
import NotFound from '../NotFound';

export default function BlueCard() {
  const [component, setComponent] = useState<DataDTO>();

  const [formLoginUser, setFormLoginUser] = useState({
    loginUser: '',
  });

  const params = useParams();

  const navigate = useNavigate();

  function handleClickSubmit(event: any) {
    event.preventDefault();

    dataService
      .findByLogin(formLoginUser.loginUser)
      .then((response) => {
        console.log('RESPONSE ', response);
        setComponent(response.data);
      })
      .catch((error) => {
        navigate('*');
        console.log('erro ' + error);
      });

    console.log('LOGIN DATAL', String(params.loginGit));
    console.log('LOGIN COMPON', component);
    console.log('LOGIN FORM', formLoginUser);
  }

  function handleInputChange(event: any) {
    setFormLoginUser({ ...formLoginUser, loginUser: event.target.value });
  }

  return (
    <>
      <main>
        <section>
          <form onSubmit={handleClickSubmit} className="container-title-card">
            <div className="container-content-card">
              <h1 className="title-card">Encontre um perfil Github</h1>
              <input
                name="loginUser"
                value={formLoginUser.loginUser}
                className="input-card"
                type="text"
                placeholder="Usuário Github"
                onChange={handleInputChange}
              />
              <button type="submit">Encontrar</button>
            </div>
          </form>
          {component && <DetailsCard info={component} />}
        </section>
      </main>
    </>
  );
}
