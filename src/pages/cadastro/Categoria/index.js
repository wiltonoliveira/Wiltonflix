import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
    const { value } = infosDoEvento.target;
    setValor(
      getAttribute('name'),
      value,
    );
  }

  /*
    function handleChange(infosDoEvento) {
      const {getAttribute, value} = infosDoEvento.target;
      setValor(
      getAttribute('name'),
      value
      );
    }
    */

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>
      <br />
      <h1>
        {valores.nome}
        {' '}
        <br />
        {valores.descricao}
        {' '}
        <br />
        {valores.cor}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          tipo="text"
          name="nome"
          valor={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          tipo="textarea"
          name="descricao"
          valor={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          tipo="color"
          name="cor"
          valor={valores.cor}
          onChange={handleChange}
        />

        {/* }
      <div>
        <label>
          Cor:
          <input
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
          />
        </label>
      </div>
    */}
        <Button>
          Cadastrar!
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`{$categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
