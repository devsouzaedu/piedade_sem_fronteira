# 🚀 Instruções de Deploy - Piedade Sem Fronteira

## 📋 Pré-requisitos

- [x] Projeto buildado com sucesso
- [x] Commit inicial realizado
- [ ] Conta no GitHub
- [ ] Conta na Vercel

## 🐙 Passo 1: Criar Repositório no GitHub

1. **Acesse o GitHub**: https://github.com
2. **Faça login** na sua conta
3. **Clique em "New repository"** (botão verde no canto superior direito)
4. **Configure o repositório**:
   - **Repository name**: `piedade-sem-fronteira`
   - **Description**: `Site oficial da ONG Piedade Sem Fronteira - Transformando vidas através da solidariedade`
   - **Visibility**: Public (recomendado para projetos de ONGs)
   - **NÃO** marque "Add a README file" (já temos um)
   - **NÃO** adicione .gitignore (já temos um)
   - **NÃO** adicione license por enquanto

5. **Clique em "Create repository"**

## 🔗 Passo 2: Conectar Repositório Local ao GitHub

Após criar o repositório, execute os seguintes comandos no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/piedade-sem-fronteira.git

# Renomear a branch para main (padrão atual do GitHub)
git branch -M main

# Fazer push do código para o GitHub
git push -u origin main
```

## 🌐 Passo 3: Deploy na Vercel

### Opção A: Via GitHub (Recomendado)

1. **Acesse a Vercel**: https://vercel.com
2. **Faça login** com sua conta do GitHub
3. **Clique em "New Project"**
4. **Selecione o repositório** `piedade-sem-fronteira`
5. **Configure o projeto**:
   - **Project Name**: `piedade-sem-fronteira`
   - **Framework Preset**: Next.js (deve detectar automaticamente)
   - **Root Directory**: `.` (raiz do projeto)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `npm install` (padrão)

6. **Clique em "Deploy"**

### Opção B: Via CLI da Vercel

```bash
# Instalar CLI da Vercel (se não tiver)
npm i -g vercel

# Fazer login na Vercel
vercel login

# Deploy do projeto
vercel

# Para deploys futuros
vercel --prod
```

## ⚙️ Passo 4: Configurações Adicionais (Opcional)

### Domínio Personalizado
1. Na Vercel, vá em **Settings > Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

### Variáveis de Ambiente
Se precisar adicionar variáveis de ambiente:
1. Na Vercel, vá em **Settings > Environment Variables**
2. Adicione as variáveis necessárias

### Analytics
1. Na Vercel, vá em **Analytics**
2. Ative o Web Analytics para monitorar o site

## 🔄 Passo 5: Workflow de Deploy Automático

Após configurar, o workflow será:

1. **Desenvolvimento local**: `npm run dev`
2. **Commit das mudanças**: `git add .` → `git commit -m "descrição"`
3. **Push para GitHub**: `git push`
4. **Deploy automático**: Vercel detecta e faz deploy automaticamente

## 📊 URLs do Projeto

Após o deploy, você terá:

- **GitHub Repository**: `https://github.com/SEU_USUARIO/piedade-sem-fronteira`
- **Vercel Preview**: `https://piedade-sem-fronteira.vercel.app`
- **Domínio Personalizado**: (se configurado)

## 🛠️ Comandos Úteis

```bash
# Ver status do git
git status

# Ver histórico de commits
git log --oneline

# Fazer pull das mudanças do GitHub
git pull

# Ver repositórios remotos
git remote -v

# Ver informações da Vercel
vercel ls

# Ver logs de deploy
vercel logs
```

## 🆘 Troubleshooting

### Erro de Build
- Verifique se `npm run build` funciona localmente
- Confira se todas as dependências estão no `package.json`

### Erro de Deploy
- Verifique os logs na Vercel
- Confirme se o repositório está público
- Verifique se as variáveis de ambiente estão configuradas

### Imagens não carregam
- Confirme se as imagens estão na pasta `public/images`
- Verifique se os caminhos estão corretos nos componentes

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Docs**: https://docs.github.com

---

✅ **Checklist Final**:
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] Deploy realizado na Vercel
- [ ] Site acessível via URL da Vercel
- [ ] Domínio personalizado configurado (opcional)
- [ ] Analytics configurado (opcional) 