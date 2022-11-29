import './styles.css';
import BlueCard from '../BlueCard';
import { Outlet } from 'react-router-dom';

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
