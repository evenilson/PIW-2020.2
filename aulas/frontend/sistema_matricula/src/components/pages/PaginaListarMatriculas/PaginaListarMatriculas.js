import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { listar } from '../../../api/disciplinasAPI';
import { inserirMatriculas, listarMatriculas } from '../../../api/matriculasAPI';
import { AuthContext } from '../../../App';

import { Navegador } from "../../commom/navegador/Navegador";


function FormularioMatricula({addMatric}){
    const [disciplinas, setDisciplinas] = useState([])
    
    const {auth} = useContext(AuthContext); 

    const { register, handleSubmit } = useForm();

    const onSubmiter = (data) => {
        addMatric(data)
    }

    useEffect(()=>{
        listar(auth.token).then(
            (response) => {
                setDisciplinas(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
 
    return(
        <form onSubmit={handleSubmit(onSubmiter)}>
            Disciplina: 
            <select name="disciplina" id="" ref={register}>
                {disciplinas.map(
                    (disciplina) => (
                        <option value={disciplina.id} name="disciplina">{disciplina.nome}</option>
                    )
                )}
            </select><br />
            <button type="submit">Matricular</button>
        </form>
    )
}

function ListarMatriculas({matriculas}) {
    return (
        <ul>
            {    
                matriculas.map((matricula) => (
                    <li>{matricula.aluno.nome} - {matricula.disciplina.nome}</li>
                ))
            }
        </ul>
    )
}

export function PaginaListarMatriculas() {

    const [matriculas, setMatriculas] = useState([])

    const { auth } = useContext(AuthContext)

    function atualizarMatriculas(){
        listarMatriculas(auth.token).then(
            (response)=>{
                setMatriculas(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        atualizarMatriculas();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    function addMatric(matricula) {
        inserirMatriculas(auth.token, matricula).then(
            (response) => {
                atualizarMatriculas();
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    return (
        <div>
            <Navegador></Navegador>

            <ListarMatriculas matriculas={matriculas}/>
            <FormularioMatricula addMatric={addMatric}/>
        </div>
    )
}