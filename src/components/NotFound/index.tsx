import './styles.css';
import Button from '../Button';
import BlueCard from '../BlueCard';

export default function NotFound() {
  return (
    <>
      <main>
        <section className="container-title-not-found">
          <BlueCard />
          <h1 className="title-not-found">Erro ao buscar usuário</h1>
        </section>
      </main>
    </>
  );
}
