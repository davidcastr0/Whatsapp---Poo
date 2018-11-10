export class  Usuario{

    private nomeUser : string;
    public ListaUsers : String[] = [];
    
    public constructor (nomeUser : string){
        this.nomeUser = nomeUser;
        
    }

    public getNomeUser() : string{
        return this.nomeUser;
    }

    public setNomeUser(nomeUser : string) : void{
        this.nomeUser = nomeUser;
    }
    //set
    //método para adicionar usuários
    public adicionarUsuario(nome: string) :  void{
        let a =this.pesquisarUsuario(nome);
        if(a == 1) {
            console.log("O usuário ja foi adicionado!!!");
        }
        else{
        this.ListaUsers.push(nome);
        console.log("Usuário adicionado com sucesso!!!");
        }
    }
    
    //método para remover usuário
    public removerUsuario(usuario : string): void{  
    let i: number  = 0;
    while(i <this.ListaUsers.length){
        if(this.ListaUsers[i] == usuario){
            this.ListaUsers.splice(i);
            console.log("\nUsuário removido com sucesso!!!");
            i = this.ListaUsers.length;
            
        }else{
            console.log("O usuário não encontrado!!!")
        }   
    i = i +1; 
    }
    }

    //método para mostrar os usuários
    public mostrarUsuario() : void{
        console.log(this.ListaUsers + '('+this.ListaUsers.length+')');
    }

    public pesquisarUsuario (nomeUser: string) : number{
        let i: number  = 0;
        let a : number = 0;
        while(i <this.ListaUsers.length){
            if(this.ListaUsers[i] == nomeUser){
                a = 1;
                i = this.ListaUsers.length;
            }
            i = i + 1; 
        }
        return a;
    }
}
   

    







