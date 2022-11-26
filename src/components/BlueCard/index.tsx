import './styles.css';
import { useState } from 'react';
import * as dataService from '../../services/data-service';
import { useParams } from 'react-router-dom';
import { DataDTO } from '../../models/data';
import DetailsCard from '../DetailsCard';

export default function BlueCard() {
  const [formData, setFormData] = useState({
    login: '',
  });
  const params = useParams();
  const [data, setData] = useState<DataDTO>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleClickSubmit(event: any) {
    event.preventDefault();
    dataService.findByLogin(String(params.loginGit)).then((response) => {
      console.log(response.data);
      setData(response.data);
      console.log('cliclou no button ' + formData.login);
    });
  }

  // useEffect(() => {
  //   dataService
  //     .findByLogin(String(params.loginGit))
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, []);

  return (
    <>
      <main>
        <section>
          <form onSubmit={handleClickSubmit} className="container-title-card">
            <div className="container-content-card">
              <h1 className="title-card">Encontre um perfil Github</h1>
              <input
                name="login"
                value={formData.login}
                className="input-card"
                type="text"
                placeholder="Usuário Github"
                onChange={handleInputChange}
              />
              <button type="submit">Encontrar</button>
            </div>
          </form>

          {data ? (
            <DetailsCard info={data} />
          ) : (
            <h1>Erro ao buscar o usuário</h1>
          )}
        </section>
      </main>
    </>
  );
}
