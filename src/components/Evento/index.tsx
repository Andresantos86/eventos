import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../../state/atom';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento,  }> = ({ evento }) => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }
  const excluirEvento = () => {
    //chama o seter da lista , recebe a list antiga retorna lista nova sem o item clicado
    // filtra todos os eventos recebendo somante os de id diferente do selecionado.
    setListaEventos(listaAntiga => listaAntiga.filter(evevt=> evevt.id !== evento.id))
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={excluirEvento}></i>
  </div>)
}

export default Evento