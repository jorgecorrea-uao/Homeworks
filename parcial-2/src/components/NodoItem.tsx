import type { Nodo } from '../tree/Nodo';

interface Props {
  nodo: Nodo;
  seleccionado: string;
  onSeleccionar: (id: string) => void;
}

const NodoItem = ({ nodo, seleccionado, onSeleccionar }: Props) => {
  return (
    <li>
      <div
        className={nodo.valor.id === seleccionado ? 'nodo activo' : 'nodo'}
        onClick={() => onSeleccionar(nodo.valor.id)}
      >
        <span className={`icono ${nodo.valor.tipo}`} />
        <span>{nodo.valor.nombre}</span>
        <small>{nodo.valor.creadoPor}</small>
      </div>

      {!nodo.isLeaf() && (
        <ul>
          {nodo.hijos.map((hijo) => (
            <NodoItem key={hijo.valor.id} nodo={hijo} seleccionado={seleccionado} onSeleccionar={onSeleccionar} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NodoItem;