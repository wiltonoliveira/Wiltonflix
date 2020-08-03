import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);
    

    
    
    function setValor(chave, valor){
      setValores({
        ...valores,
        [chave]: valor, //nome: 'valor'
      })
    }

    function handleChange(infosDoEvento){
      const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
      const { value } = infosDoEvento.target;
      setValor(
        getAttribute('name'),
        value
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
    return (
      <PageDefault>
        <h1>Cadastro de Categoria:</h1>
        <br/>
        <h1>
          {valores.nome} <br/>
          {valores.descricao} <br/>
          {valores.cor}
        </h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);
        setValores(valoresIniciais);
      }}>
      
      
      <FormField
        label="Nome da categoria"
        tipo = "text"
        name = "nome"
        valor = {valores.nome}
        onChange={handleChange}
      />
      
      <FormField
        label="Descrição"
        tipo = "text"
        name = "descricao"
        valor = {valores.descricao}
        onChange={handleChange}
      />
       
      <FormField 
        label = "Cor"
        tipo = "color"
        name = "cor"
        valor = {valores.cor}
        onChange={handleChange}
      />

      {/*}
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
        <button>
          Cadastrar!
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`{$categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
     )
  }

  export default CadastroCategoria;