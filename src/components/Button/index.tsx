import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <Link to="/search" className="button">
        <button type="submit">{text}</button>
      </Link>
    </>
  );
}
