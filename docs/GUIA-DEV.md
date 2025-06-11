
# Guia para o desenvolvimento do APP

### Instalações necessárias:

- Git
- Node
- Expo GO(Celular)
- Expo CLI
- VSCode

**Antes de ler esse guia é importante que o git esteja instalado na sua máquina**. Minha recomendação é seguir o minicurso de git do código-fonte TV: https://www.youtube.com/watch?v=ts-H3W1uLMM

Como também estamos usando o node, é importante que instale ele na sua máquina. O link do site oficial do node para instalação: https://nodejs.org/en.
Caso tenha dúvidas no processo de instalação do node, recomendo que assista esse vídeo também: https://www.youtube.com/watch?v=522HiDiAf0w&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=2

Para instalação do VSCode: https://code.visualstudio.com/download

Para fins de testes das telas do aplicativo, **é importante que instale no seu celular o aplicativo Expo GO.**

E por fim, verifique as versões para confirmar a instalação correta, no seu terminal digite:

```bash
git --version
node --version
npm --version
```

#### Configuração inicial do git

Antes de usar o git, é importante que você configure ele inicialmente, no WINDOWS geralmente é instalado um git bash para executa os comandos do git:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

E siga esse outro guia para pode usar o git com chaves ssh na sua máquina: [Guia para criar o SSH](./GUIA-SSH.md)

#### Leituras recomendadas

Documentações das tecnologias usadas:

- https://docs.expo.dev/
- https://reactnative.dev/docs/getting-started

### Configurações iniciais do Projeto

Essa etapa de trabalho é executada somente uma vez, a não ser que você delete essa pasta futuramente. Caso não possua o repositório na sua máquina é desejável que clone ele em uma pasta do seu computador, para que consiga ter acesso aos arquivos do projeto.

Primeiro crie uma pasta para colocar seus projetos de programação, abra seu git bash e digite:

```bash
mkdir projetos-auto
cd projetos-auto
```

O diretório pode ter qualquer outro nome, desde que não esqueça onde ele está localizado. Agora, o segundo passo é clonar o repositório remoto do github.

```bash
git clone git@github.com:House-On/house-on.git
```

#### Resolvendo as dependências do projeto react native

Quando o repositório do github é clonado, ele ainda não está 100% pronto para rodar na sua máquina, ainda é preciso instalar as dependências com o uso do node.

Primeiro, entre na pasta do projeto:

```bash
cd house-on
```

Instale todas as dependências para rodar o projeto digitando:

```bash
npm install
```

### Práticas diárias para desenvolver o projeto

Quando usamos o git, ele nos permite versionar o código e nos mostrar uma linha do tempo do projeto com o objetivo de facilitar a manutenibilidade como um todo. No contexto de uma organização a colaboração de diferentes pessoas no mesmo código-fonte pode causar conflitos no processo de "merge"/junção desses códigos desenvolvidos. **Portanto, para diminuir esses conflitos siga essas práticas sempre que começar o seu desenvolvimento.**

Primeiro entre na pasta do projeto, usando git bash:

```bash
cd house-on
```

Execute esses comandos do git para manter o projeto da sua máquina atualizado com o projeto do repositório. SEMPRE EXECUTE ANTES DE DESENVOLVER SUAS DEMANDAS.

```bash
git checkout main
git pull origin main
```

### Branches/Commits e Iniciando Projeto

No desenvolvimento de um projeto a main do projeto, o código principal, geralmente só é usada para deploy (merge de códigos), portanto, **NUNCA desenvolva diretamente na main mas sim em outras branches**. Para criar uma branch e um commit no github geralmente se segue um padrão para melhorar a organização e manutenção do código, segue abaixo alguns links para entender mais sobre padrões para nomear suas branches e commits:

https://medium.com/prolog-app/nossos-padr%C3%B5es-de-nomenclatura-para-branches-e-commits-fade8fd17106

Quando for criar uma branch pense na demanda que lhe foi pedida. Por exemplo, imagine que te pediram para criar uma tela de cadastro. Essa demanda possui a categoria de uma nova feature, portanto siga o padrão do artigo acima:

{tipo da demanda}/{nome da funcionalidade}

**Seguindo o exemplo apresentado:**

feat/tela-cadastro

Quando for desenvolver, digite:

```bash
git checkout -b feat/tela-cadastro
```

Assim, você sairá da main e estará na sua branch para desenvolver sua feature especificada pela sua demanda.

Para criar e gerenciar seus commits eu recomendo ou usar o controle da sua IDE, como a seção de GIT do VSCode, ou aprender os comandos básicos do git caso não tenha visto o minicurso de git, como o ```git status```, ```git add``` e o ```git commit -m```.

Para rodar o projeto durante o seu desenvolvimento, digite:

```bash
npx expo start
```

Agora, pode usar o aplicativo Expo GO para rodar o projeto no seu celular. Para finalizar o servidor e parar a aplicação basta digitar: ```Ctrl + C``` no terminal que iniciou.

Quando terminar de desenvolver sua feature e ela estiver funcionando da forma que acha certa, execute o comando abaixo para que essa branch esteja no repositório remoto.

```bash
git push origin feat/tela-cadastro
```

Agora, entre no site do repositório do github e abra a Pull Request da sua branch, informe o que aquela sua branch adiciona no projeto e se quiser adicione uma descrição do que você fez no pull request. Depois de enviar o Pull Request, basta esperar que o administrador da sua organização aprove ele para que sua branch seja mesclada na main.