import './styles.css';
import Button from '../../../components/Button';

export default function HomeBody() {
  return (
    <>
      <div className="container-title-home-body">
        <h1 className="title-home-body">Desafio Github API</h1>
        <p className="subtitle-home-body">DevSuperior - Escola de programação</p>
        <Button text="Começar" />
      </div>
    </>
  );
}
