import{Usuario} from "./Usuario";
let user :Usuario = new Usuario('');
export class Chat{

    public nomeChat : string;
    constructor(nomeChat : string){
        this.nomeChat = nomeChat;
    }
    //password ADM
    public Senha : number = 40028922;
    //Listas de Grupos
    public listaDeChats : any = [];
    
    //"Listas" de grupos que  usuário esta
    public GruposPorUser :  Map<any,any> = new Map<any,any>();
    
    // Grupos com usuarios
    public Grupos :  Map<any,any> = new Map<any,any>();

    //procurar se o chat já existe
    public buscarChat(nomeChat : string) : number{
        let i = 0;
        let u = 0;
        while (i < this.listaDeChats.length){
            if (this.listaDeChats[i] == nomeChat){
                u++;
                i = this.listaDeChats.length;
            }
            i++;
        }
        return u;

    }

    //método para criar um grupo
    public criarChat( nomeUser : string, nomeChat:string){   
        this.listaDeChats.push(nomeChat);
        this.Grupos.set(nomeChat , nomeUser );
        this.GruposPorUser.set(nomeUser , nomeChat );
        console.log(nomeUser," sua senha de administrador é: ",this.Senha);


    }
    
    
    //Método para adicionar usuários no grupo criado
    public addOnGroup (nome : string, chat : string) : void{

            let toStr : string = '';
            let toStr2: string = '';
            toStr = String(this.Grupos.get(chat))+' : '+nome ;
            this.Grupos.set(chat,toStr);
            toStr2 = String(this.GruposPorUser.get(nome))+' : '+chat ;
            this.GruposPorUser.set(nome , toStr2);
        

    }

    //método para mostrar os usuários no grupo criado
    public showUsersOnGroup(chat: Chat){
        console.log(this.Grupos.get(chat));
    }

    //mostrar todos os grupos
    public mostrarGrupos() : void{
        console.log(this.listaDeChats);
    }

    //Mostrar os grupos de um usuário específico
    public ShowUsersGroups(nome : string){
        console.log(String(this.GruposPorUser.get(nome)));


    }

    public ExitGroup( chat : string, usuario : string){
      
                let lista = String(this.Grupos.get(chat));
                let lista2= String(this.GruposPorUser.get(usuario)); 
                let b = lista2.split(':');
                let a = lista.split(':');
                let i = 0;
                let j =0;
                while (i < a.length){
                    if (a[i] == usuario){
                        while(j < b.length){
                            if (b[j] == chat){
                                b = b.slice(j);
                                j= b.length;
                            }
                            j++;
                        }
                        a=  a.slice(i);
                        this.Grupos.set(chat,a);
                        this.GruposPorUser.set(usuario,b);
                        console.log("Usuário removido com sucesso!!!");
                        i = a.length;
                        
                    }

                    i++;
                }



                


    }





        

    //fim
}