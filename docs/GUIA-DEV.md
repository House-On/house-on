# Guia para Desenvolvimento do App

## Instalações Necessárias

1. **Git**: Para versionamento de código.
2. **Node.js**: Necessário para rodar o projeto.
3. **Expo GO (Celular)**: Para testar o app no celular.
4. **Expo CLI**: Ferramenta para iniciar o projeto Expo.
5. **VSCode**: Editor de código.

Antes de começar, **verifique se o Git está instalado**. Se não tiver, recomendo seguir o minicurso de Git da Código Fonte TV:  
[Minicurso de Git - Código Fonte TV](https://www.youtube.com/watch?v=ts-H3W1uLMM)

Também **instale o Node.js**. Se tiver dúvidas, siga este tutorial:  
[Instalar Node.js](https://nodejs.org/en)

**Instale o VSCode** através deste link:  
[Download VSCode](https://code.visualstudio.com/download)

**Para testar as telas do app**, instale o **Expo GO** no seu celular (disponível na Play Store/App Store).

Após instalar, **verifique se tudo está correto** com os seguintes comandos no terminal:

```bash
git --version
node --version
npm --version
```

### Configuração Inicial do Git

Antes de usar o Git, lembre-se de usar o git bash que veio instalado junto do Git, assim, configure suas informações de usuário:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**CONFIGURE O SEU GIT PARA USAR CHAVES SSH**: [Guia SSH](./GUIA-SSH.md).

### Leitura Recomendada

1. [Documentação do Expo](https://docs.expo.dev/)

2. [Documentação do React Native](https://reactnative.dev/docs/getting-started)


## Configuração Inicial do Projeto

### Clonando o Repositório

Se você ainda não tem o repositório, clone-o com os seguintes comandos:

```bash
mkdir projetos-auto
cd projetos-auto
git clone git@github.com:House-On/house-on.git
```

### Instalando Dependências

Entre na pasta do projeto e instale as dependências:

```bash
cd house-on
npm install
```

Agora, você consegue rodar o projeto.

## Práticas Diárias de Desenvolvimento

**Mantenha seu repositório atualizado antes de começar a trabalhar**. No terminal, execute:

```bash
git checkout main
git pull origin main
```

**Nunca trabalhe diretamente na branch main. Crie uma nova branch para cada nova tarefa (ex: criação de tela de cadastro)**.

### Criando Branches e Commits

Para criar uma branch de uma nova feature, **use a convenção:
feat/nome-da-feature**

Por exemplo, para a tela de cadastro:

```bash
git checkout -b feat/tela-cadastro
```

**Com isso, você sai da main e entra na sua branch para trabalhar.**

Para fazer commits no seu código, use no seu git bash(WINDOWS):

```bash
git status       # Verifica alterações
git add .        # Adiciona todas as alterações
git commit -m "Descrição do que foi feito"
```

### Rodando o Projeto

Durante o desenvolvimento, use o comando abaixo para rodar o projeto no terminal da sua IDE:

```bash
npx expo start
```

Abra o Expo GO no seu celular para visualizar a aplicação. Para parar o servidor, pressione Ctrl + C no terminal.
Enviando a Branch para o Repositório

Quando a funcionalidade estiver pronta, envie sua branch para o GitHub:

```bash
git push origin feat/tela-cadastro
```

Após isso, crie uma Pull Request no GitHub, descreva o que foi feito e envie para revisão. Quando aprovado, sua branch será mesclada à main.

## Resumo das Etapas

1. Instale as ferramentas (Git, Node, Expo GO, VSCode).

2. Clone o repositório e instale as dependências.

3. Crie uma branch para sua tarefa, desenvolva, e faça commits regulares.

4. Rodar e testar o projeto com Expo GO.

5. Envie sua branch para o GitHub e abra uma Pull Request.