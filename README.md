# Website de Casamento - Jonathan & Bianca

Website responsivo criado para o casamento de **Jonathan Costa de Abrantes** e **Bianca Maria Silva Costa**.

## 🎨 Características

- **Design elegante** com tons creme, bege e dourado
- **Totalmente responsivo** para mobile e desktop
- **Contagem regressiva** até a data do casamento
- **Formulário de confirmação de presença** (RSVP)
- **Navegação suave** entre seções
- **Animações suaves** e efeitos visuais

## 📁 Estrutura de Arquivos

```
mariage/
├── index.html      # Página principal
├── styles.css      # Estilos e design responsivo
├── script.js       # Funcionalidades JavaScript
├── Dockerfile      # Configuração Docker
└── README.md       # Este arquivo
```

## 🐳 Executar com Docker

### Build e Run

```bash
# Build da imagem
docker build -t mariage-website .

# Executar container na porta 8080
docker run -d -p 8080:80 --name mariage-website mariage-website
```

O site estará disponível em: `http://localhost:8080`

### Comandos úteis

```bash
# Parar o container
docker stop mariage-website

# Iniciar o container
docker start mariage-website

# Remover o container
docker rm mariage-website

# Ver logs
docker logs mariage-website
```

## 🚀 Como Usar

1. **Personalizar a data do casamento:**
   - Edite a data em `script.js` (linha 2): `const weddingDate = new Date('2025-06-15T16:00:00');`
   - Edite também em `index.html` onde aparece a data

2. **Adicionar fotos na galeria:**
   - Substitua os placeholders em `index.html` pela tag `<img>` com suas fotos
   - Exemplo:
   ```html
   <div class="gallery-item">
       <img src="foto1.jpg" alt="Nossos momentos">
   </div>
   ```

3. **Personalizar local e endereço:**
   - Edite a seção "Data & Local" em `index.html`

4. **Configurar formulário RSVP:**
   - Atualmente o formulário salva no `localStorage` do navegador
   - Para produção, integre com um backend ou serviço de formulários (ex: Formspree, Google Forms)

## 🌐 Deploy no GitHub Pages

1. Faça commit e push dos arquivos:
   ```bash
   git add .
   git commit -m "Website de casamento"
   git push origin main
   ```

2. No GitHub:
   - Vá em Settings > Pages
   - Selecione a branch `main` como source
   - O site estará disponível em `https://seu-usuario.github.io/mariage/`

## 🎨 Personalização

### Cores
As cores podem ser ajustadas no arquivo `styles.css` na seção `:root`:
- `--cream`: Cor creme principal
- `--gold`: Cor dourada
- `--beige`: Cor bege

### Fontes
O site usa Google Fonts:
- **Playfair Display**: Títulos
- **Lato**: Texto geral

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile (iOS e Android)

## 📝 Notas

- O formulário RSVP atualmente salva dados no `localStorage` do navegador
- Para produção, recomenda-se integrar com um backend real
- As imagens da galeria são placeholders - substitua pelas fotos reais

---

**Criado com ❤️ para Jonathan & Bianca**

