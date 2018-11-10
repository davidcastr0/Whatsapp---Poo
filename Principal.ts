import {Usuario} from "./Usuario";
import { Chat } from "./Chat";
declare function require(msg : string) : any;
var readline = require('readline-sync');

let user : Usuario = new Usuario('');
let chat : Chat = new Chat('');

let teste : boolean = true;

let n : any= '';
let m : any = '';
console.log("\nDigite 'exit' para sair\nDigite 'help' para mostrar o menu novamente\nDigite 'add' para adicionar um usuário\nDIgite 'users' para mostrar a lista de usuários\nDigite 'del' para exluir um usuário\nDigite 'cg' para Criar um grupo\nDigite 'sg' para mostrar os integrantes de um grupo eséficifo\nDigite 'su' para mostrar os grupos de um usuario específico\nDigite 'addg' para adicionar alguém em um grupo existense(ADM)\nDigite 'chats' para mostrar todos os grupos existentes\nDigite 'eg' para sair de um grupo: ");
while(teste){
    
    let cmd : string = readline.question("\nComando: ");
    switch (cmd){

        case 'exit':
            teste = false;
            break;
        case 'help':
            console.log("\nDigite 'exit' para sair\nDigite 'help' para mostrar o menu novamente\nDigite 'add' para adicionar um usuário\nDIgite 'users' para mostrar a lista de usuários\nDigite 'del' para exluir um usuário\nDigite 'cg' para Criar um grupo\nDigite 'sg' para mostrar os integrantes de um grupo eséficifo\nDigite 'su' para mostrar os grupos de um usuario específico\nDigite 'addg' para adicionar alguém em um grupo existense(ADM)\nDigite 'chats' para mostrar todos os grupos existentes\nDigite 'eg' para sair de um grupo: ");
            break;
            case 'add':
            n = readline.question("Digite o nome do usuário: ");
            user.adicionarUsuario(n); 
            break;
        case 'users':
            user.mostrarUsuario();
            break;
        case 'del':
            n = readline.question("\nDigite o nome do usário a ser removido: ");
            user.removerUsuario(n);
            break;
        case 'cg':
            m = readline.question("\nDigite seu nome de usuário: ");
            if(user.pesquisarUsuario(m) == 1){
                n = readline.question("\nDigite o nome do grupo a ser criado: ");
                if(chat.buscarChat(n) == 0){
                    chat.criarChat(m,n);
                }else{
                    console.log("O Chat já existe!!!");
                }
            }else{
                console.log("Usuário inxistente!!!");
            }
            break;
        case 'sg':
            n = readline.question("Digite o nome do grupo para ver seus usuários: ");
            chat.showUsersOnGroup(n);
            break;
        
        case 'su':
            n = readline.question("Digite o nome do usuário para ver seus grupos: ");
            
            break;
        case 'chats':
            chat.mostrarGrupos();
            break;
        case 'addg': 
            m = readline.question("Digite o nome do grupo no qual o usuário será adicionado: ");
            if(chat.buscarChat(m) == 1){
                let adm = readline.question("Digite seu nome de usuário(ADM): ");
                let lista = String(chat.Grupos.get(m));
                let lista2 = lista.split(":");
                    if (lista2[0]==adm){
                        let pssw = readline.question("Digite sua senha de Administrador: ");
                        if (pssw == chat.Senha){
                            n = readline.question("Digite o nome do usuário a ser adicionado: ");
                            if(user.pesquisarUsuario(n) == 1 ){ 
                                chat.addOnGroup(n,m);
                            }else{
                                console.log("O usuário a ser adicionado não existe!!!");
                            }
                        }else{
                            console.log("Senha incorreta!!!");
                        }
                    }else{
                        console.log("O usuário não é o administrador ou o usuário não existe!!!");
                    }
                }else{
                    console.log("O chat não existe!!!");
                }
            break;
        case 'eg':
            m = readline.question("Digite o nome do grupo: ");
            if(chat.buscarChat(m)== 1){
                n = readline.question("Digite o nome do usuário: ");
                if (user.pesquisarUsuario(n) == 1){
                    chat.ExitGroup(m,n); 
                }else{
                    console.log("O usuário não existe!!!");
                }
            }else{
                console.log("O chat não existe!!!");
            }
            
            break;

        default:
            console.log("\nDigite o comando corretamente!!!");
            break;
    
    }

}




