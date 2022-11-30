import './styles.css';
import BlueCard from '../../../components/BlueCard';

export default function NotFound() {
  return (
    <>
      <main>
        <section>
          <BlueCard />
          <h1 className="title-not-found">Erro ao buscar usuário</h1>
        </section>
      </main>
    </>
  );
}
