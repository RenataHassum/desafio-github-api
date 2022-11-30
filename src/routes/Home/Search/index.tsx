import { Outlet } from 'react-router-dom';
import BlueCard from '../../../components/BlueCard';

export default function Search() {
  return (
    <>
      <BlueCard />
      <Outlet />
    </>
  );
}
