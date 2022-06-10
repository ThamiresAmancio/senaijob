import { useState } from "react";
import { IconArrow,IconContratei,IconDetalhes,IconReload } from "../../components/icons/icons";
import Menu from "../../components/menu";
import Modal from "../../components/modal";
import './home.css'

export default function Home(){

    const [isModal,setIsModal] = useState(false);

    function openModal(){
        setIsModal(true)
    }
    
    function closeModal () {
        setIsModal(false);
    };
    
    const vagas = {
        nome:"Auxiliar de manutenção manutenção predial/industrial",
        quantidade:"1",
        site:"https://www.sp.senai.br/",
        local:"Rua Elton Silva, 905 - Centro, Jandira - SP, 06600-025",
        horario:"De segunda a Domingo sendo 8h diárias, com 1hr de intervalo e duas folgas semanais conforme escalas.",
        beneficio:"Não informado",
        salario:"1981",
        conhecimento:"Conhcecimento básicos ena área de manutenção predial, podendo compreender as áreas de : Pinturas, Instalações Eletricas e Instalações hidraulicas"
    }

    const candidatos = [
        {
            nome:"Alana Silva",
            curso:"Tecnologia da informação",
            ano:"2019",
            uf:"São Paulo",
            idade:"20"
            
        },
        {   nome:"Pedro Silva",
            curso:"Sistema da informação",
            ano:"2022",
            uf:"São Paulo",
            idade:"30"
        },
        {
            nome:"Bernado Silva",
            curso:"Tecnologia da informação",
            ano:"2019",
            uf:"Pernabuco",
            idade:"19"
            
        },
        {
            nome:"Fernando Silva",
            curso:"Tecnologia da informação",
            ano:"2019",
            uf:"São Paulo",
            idade:"40"
        }
    ]


    return(
        <>
         <Menu/>
        <main className="container">
            <header className="titulo-vaga">
                <div className="vaga">
                    <IconArrow/>
                    <p>Emprego - {vagas.nome}</p>
                </div>
                <div className="vaga">
                    <p>{vagas.quantidade} vaga</p>
                    <IconReload/>
                 </div>
            </header>
            <section className="informacoes">
                <div className="informacoes-items">
                    <h4 className="">Responsabilidade e atribuições</h4>
                    <p>{vagas.site}</p>
                    <h4>Local de trabalho</h4>
                    <p>{vagas.local}</p>
                    <h4>Horário</h4>
                    <p>{vagas.horario}.</p>
                    <h4>Benefícios</h4>
                    <p>{vagas.beneficio}</p>
                </div>
                <div className="informacoes-items">
                    <div className="infomacoes-pre-requisitos">
                        <h4>Pré-requisitos</h4>
                        <p>{vagas.conhecimento}</p>
                        <p>{vagas.site}</p>
                    </div>
                    <h4>Salário</h4>
                    <p>{vagas.salario}</p>
                    <h4>Observações</h4>
                    <p>Inscreva-se nesse site {vagas.site} </p>
                </div>
            </section>
            <section className="informacoes-vagas-disponiveis">
                <div className="titulo-candidatos">
                    <h1> 
                        <span>
                            15
                        </span>
                        candidatos de 
                        <span>
                            407
                        </span>

                        alunos vinculados
                    </h1>
                </div>
                <div className="informacoes-novos-candidatos">
                    <h3>Novos:</h3>
                    <p>Ainda não temos nenhum novo candidato</p>
                    <hr/>
                </div>
                <div className="painel-vagas">
                    <h3>Vistos:</h3>
                        {
                            candidatos.map((candidato) => (
                                <>
                                 <div className="painel">
                                    <h3 className="titulo-painel">{candidato.nome}</h3>
                                        <p>
                                        {candidato.idade} anos mora em {candidato.uf}
                                        </p>
                                        <h3>último curso:</h3>
                                        <p>{candidato.curso} - {candidato.ano}</p>
                                        <hr/>
                                        <div className="buttons">
                                            <button type="button" className="detalhes" onClick={openModal}>
                                                <IconDetalhes/>
                                                Detalhes
                                            </button>
                                            <button type="button" className="contratei" >
                                                <IconContratei/>
                                                Contratei!
                                            </button>
                                        </div>
                                 </div>
                                </>
                            ))
                        }
                </div>
            </section>
        </main>
            {
                isModal ? <Modal closeModal={closeModal}/> : null
            }
        </>
    )
}