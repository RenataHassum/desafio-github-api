import './styles.css';
import { DataDTO } from '../../models/data';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/system';

type Props = {
  info: DataDTO;
};

export default function DetailsCard({ info }: Props) {
  return (
    <>
      <section className="container-title-info">
        <div className="container-content-info">
          <div className="img-info">
            <img src={info.avatar_url} alt={info.name} />
          </div>
          <div className="container-bg-info">
            <h2 className="title-info">Informações</h2>
            <ul className="container-list-info">
              <li className="list-info">
                <strong>Perfil:</strong>{' '}
                <Link to={info.html_url} className="link-info">
                  {info.url}
                </Link>
              </li>
              <li className="list-info">
                <strong>Seguidores:</strong> {info.followers}
              </li>
              <li className="list-info">
                <strong>Localidade:</strong> {info.location}
              </li>
              <li className="list-info">
                <strong>Nome:</strong> {info.name}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
