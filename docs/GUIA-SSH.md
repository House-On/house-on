# Guia para Criar e Gerenciar Chaves SSH no GitHub (Windows)

Este guia é para desenvolvedores que usam **Windows** e desejam colaborar com o projeto utilizando autenticação via **SSH no GitHub**, evitando a necessidade de digitar usuário e token pessoal a cada operação `git`.

---

## Por que Usar Chaves SSH?

As chaves SSH oferecem uma forma segura de autenticação com o GitHub, substituindo o uso de login e senha ou personal access token (PAT) em cada operação Git, como `clone`, `pull` e `push`.

---

## 1. Gerar uma Nova Chave SSH

> Use o **Git Bash** (instalado junto com o Git for Windows). Evite usar o Prompt de Comando ou PowerShell.

### Passos:

1. Abra o Git Bash.
2. Execute o comando abaixo, substituindo pelo seu e-mail do GitHub:
```bash
ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
```
3. Quando for perguntado onde salvar a chave, pressione Enter para aceitar o local padrão:

```
    Enter a file in which to save the key (/c/Users/SeuUsuario/.ssh/id_ed25519):
```

**Dica:** Se quiser manter múltiplas chaves (não importante), forneça um nome diferente (ex: `/c/Users/SeuUsuario/.ssh/github_key_ed25519`).

4. Defina uma passphrase segura quando solicitado:

```
    Enter passphrase (empty for no passphrase):  
    Enter same passphrase again:
```

- É recomendável definir uma frase secreta forte.
- Se não quiser usar, apenas pressione Enter duas vezes (menos seguro).

---

## 2. Adicionar a Chave Pública ao GitHub

### Copiando a chave pública:

No Git Bash, execute:
```bash
clip < ~/.ssh/id_ed25519.pub
```
> Caso tenha salvo com outro nome, substitua `id_ed25519.pub` pelo nome correto.

**Alternativa manual:**  
Abra o arquivo `.pub` no caminho onde você salvou a chave (ex: `C:\Users\SeuUsuario\.ssh\id_ed25519.pub`) com um editor de texto e copie todo o conteúdo.

### Adicionando ao GitHub:

1. Acesse [github.com](https://github.com) e faça login.
2. Clique na sua foto de perfil (canto superior direito) > **Settings**.
3. No menu lateral, clique em **SSH and GPG keys**.
4. Clique no botão **New SSH key**.
5. Preencha os campos:
    - **Title:** Nome descritivo, como "Laptop Pessoal" ou "Máquina de Trabalho".
    - **Key:** Cole o conteúdo da sua chave pública.
6. Clique em **Add SSH key** e confirme sua senha, se necessário.

---

## 3. Usar ssh-agent para Não Digitar a Passphrase Sempre

O `ssh-agent` armazena suas chaves na sessão atual, evitando que você tenha que digitar a passphrase repetidamente.

### Passos no Git Bash:

1. Inicie o agente com:
```bash
eval "$(ssh-agent -s)"
```
2. Adicione sua chave privada ao agente:

```bash
ssh-add ~/.ssh/id_ed25519
```
> Se você usou outro nome para a chave, substitua o caminho corretamente.

Se sua chave tiver passphrase, será solicitado que você a digite neste momento.

---

## 🧪 4. Testar Conexão com o GitHub

Para verificar se tudo está funcionando corretamente:

```bash
ssh -T git@github.com
```

Caso apareça uma mensagem pedindo para confirmar a identidade do host, digite:

    yes

Se tudo estiver certo, você verá:

    Hi username! You've successfully authenticated, but GitHub does not provide shell access.

---

## (Opcional) Automatizar o ssh-agent ao abrir o Git Bash

Para evitar executar os comandos manualmente toda vez que abrir o terminal, adicione as linhas abaixo ao seu arquivo `~/.bash_profile` ou `~/.bashrc`:

    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519

---

## Próximo Passo

Agora que a autenticação SSH está funcionando, volte para o guia principal do projeto:

[Voltar para o Guia de Desenvolvimento](./GUIA-DEV.md)

---
