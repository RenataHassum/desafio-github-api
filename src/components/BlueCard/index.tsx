import './styles.css';
import { useEffect, useState } from 'react';
import * as dataService from '../../services/data-service';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DetailsCard from '../DetailsCard';
import { DataDTO } from '../../models/data';

export default function BlueCard() {
  const [component, setComponent] = useState<DataDTO>();
  const [formLoginUser, setFormLoginUser] = useState({
    loginUser: '',
  });
  const params = useParams();
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

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

    console.log('cliclou');
    console.log('PARAMS', String(params.loginGit));
    console.log('COMPONENT', component);
    console.log('FORMINPUT', formLoginUser);
  }

  function handleInputChange(event: any) {
    const user = event.target.value;
    if (user) {
      setSearchParams({ user });
    } else {
      setSearchParams({});
    }

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
                // value={formLoginUser.loginUser}
                value={searchParams.get('user') || ''}
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
