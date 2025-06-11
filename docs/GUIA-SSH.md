
# Guia para Criar e Gerenciar Chaves SSH no GitHub

As chaves SSH fornecem um canal seguro para autenticação e comunicação com o GitHub, permitindo que você interaja com seus repositórios sem a necessidade de digitar seu nome de usuário e Personal Access Token (PAT) a cada operação.

## Gerando uma Nova Chave SSH

Se você não tem chaves SSH ou prefere criar um novo par:

Abra o Terminal (Linux/macOS) ou Git Bash (Windows).
Execute o comando ssh-keygen. É altamente recomendado usar o algoritmo ed25519 por ser mais seguro e eficiente. Substitua "seu_email@exemplo.com" pelo e-mail associado à sua conta do GitHub.

```bash
ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
```

-t ed25519: Especifica o tipo de algoritmo da chave. Se você estiver em um sistema mais antigo que não suporta ed25519, pode usar rsa com um tamanho de bits maior: ssh-keygen -t rsa -b 4096 -C "seu_email@exemplo.com".

-C "seu_email@exemplo.com": Adiciona um comentário à sua chave pública, que é útil para identificar a chave no GitHub.

Local para Salvar a Chave: O sistema irá perguntar onde você deseja salvar a chave.

```
Enter a file in which to save the key (~/.ssh/id_ed25519):
```

Pressione Enter para aceitar o local padrão (~/.ssh/id_ed25519). Isso é geralmente o ideal.
**Importante: Se você já tem uma chave com esse nome e quer criar uma nova separadamente, digite um novo nome de arquivo (ex: ~/.ssh/github_key_ed25519).**

Definindo uma Passphrase (Frase Secreta):

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

**Recomendado: Digite uma frase secreta forte. Essa frase adiciona uma camada extra de segurança à sua chave privada. Você precisará digitá-la sempre que usar a chave (a menos que use um ssh-agent, que explicaremos a seguir).**
Opcional: Se você não quiser uma passphrase (menos seguro), apenas pressione Enter duas vezes.

Após a geração, o terminal mostrará informações sobre sua chave, como o "fingerprint" e o "randomart image".

## Adicionando a Chave Pública à sua Conta do GitHub

Agora que você tem um par de chaves, precisa informar ao GitHub sobre sua chave pública.

Copie sua Chave Pública para a Área de Transferência:

- Windows (Git Bash):
```bash
clip < ~/.ssh/id_ed25519.pub
```

**Alternativa para qualquer OS:** Se os comandos acima não funcionarem, abra o arquivo ~/.ssh/id_ed25519.pub (ou o nome da sua chave pública) em um editor de texto simples e copie todo o conteúdo.

**Adicione a Chave Pública ao GitHub:**
- Acesse o GitHub.com e faça login.
- No canto superior direito, clique na sua foto de perfil e depois em Settings (Configurações).
- No menu lateral esquerdo, navegue até SSH and GPG keys (Chaves SSH e GPG).
- Clique no botão New SSH key (Nova chave SSH) ou Add SSH key (Adicionar chave SSH).
- No campo "Title" (Título), dê um nome descritivo para sua chave (ex: "Laptop Pessoal", "Máquina de Trabalho", "MacBook Pro"). Isso ajuda a identificar de onde a chave está sendo usada.
- No campo "Key" (Chave), cole o conteúdo da sua chave pública que você copiou anteriormente.
- Clique em Add SSH key (Adicionar chave SSH). Se for solicitado, confirme sua senha do GitHub.

## Gerenciando Chaves com ssh-agent (Recomendado para Conveniência)

O ssh-agent é um programa que gerencia suas chaves SSH, permitindo que você digite a passphrase apenas uma vez por sessão, em vez de a cada operação Git.

- Inicie o ssh-agent:

**Linux/macOS:**

```bash
eval "$(ssh-agent -s)"
```

**Windows (Git Bash):** O ssh-agent geralmente inicia automaticamente. Se não, use o mesmo comando acima.

Adicione sua chave privada ao ssh-agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

Se sua chave privada tiver uma passphrase, ele pedirá para você digitá-la neste momento. Digite a passphrase e pressione Enter. A chave será adicionada ao agente.

Se sua chave privada tiver um nome ou caminho diferente, substitua ~/.ssh/id_ed25519 pelo caminho correto.

Para garantir que o ssh-agent persista entre as sessões: A maneira de fazer isso varia um pouco entre sistemas operacionais e shells. No macOS, usar UseKeychain yes no ~/.ssh/config (ver abaixo) é uma boa opção. No Linux, você precisará adicionar os comandos de ssh-agent ao seu arquivo de inicialização do shell (ex: ~/.bashrc ou ~/.zshrc).

## Testando sua Conexão SSH com o GitHub

Para verificar se tudo está configurado corretamente:

Abra o Terminal (ou Git Bash).
Execute o seguinte comando:

```bash
ssh -T git@github.com
```

Você pode ser perguntado se deseja continuar conectando. Digite yes e pressione Enter.
Se a conexão for bem-sucedida, você verá uma mensagem como esta (substituindo username pelo seu nome de usuário do GitHub):

Hi username! You've successfully authenticated, but GitHub does not provide shell access.

Esta mensagem significa que sua chave SSH está funcionando perfeitamente!

Agora pode voltar para o guia de desenvolvimento: [Guia DEV](./GUIA-DEV.md)