import {IconLinkedln} from "../../components/icons/icons";
import './modal.css'

export default function Modal({closeModal}){
    const dadosPessoais = {
        nome:"Alana Almeida Silva",
        idade:"19",
        sexo:"feminino",
        cidade:"São Paulo"
    }
    
    const cursos = [
        {
            nome:"Compotência Transversal - Lógica de Programação"
        },
        {
            nome:"Finanças Pessoais"
        },
        {
            nome:"Logística"
        }
    ]

    return (
        <div className="background">
        <div className="modal">
            <button onClick={closeModal}>X</button>
            <div className="dados">
                <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="Foto de perfil" width='50' height='50'/>
                <h2>{dadosPessoais.nome}</h2>
                <p>{dadosPessoais.idade} anos - {dadosPessoais.sexo} - {dadosPessoais.cidade}</p>
                <p>candidato empregado, aceitando propostas</p>
                <hr/>
            </div>
            <div className="cursos">
                {
                    cursos.map((curso)=>{
                      return (
                        <p key={curso.nome}> - {curso.nome}</p>
                      ) 
                    })
                }
                <hr/>
            </div>
            <div className="curriculo">
                <p>- Acessar currículo </p>
            </div>
            <div className="contato">
                <div>
                    <p>(11) 9999-9999</p>
                    <p>Conversar no WhatsApp</p>
                </div>
                <div>
                    <p>teste@gmail.com</p>
                    <p>enviar email</p>
                </div>
                <div>
                    <p>Abrir instragram</p>
                </div>
                <div>
                    <IconLinkedln/>
                    <p>Abrir Linkedin</p>
                </div>
            </div>
        </div>
        </div>
    )
}