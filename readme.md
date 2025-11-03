# 🏍️ Rednecks MC - Moto Clube (Landing Page)

Este projeto é a implementação de uma Landing Page responsiva para o Moto Clube **Rednecks MC**, focada em apresentar a história do clube, seus eventos e uma galeria de fotos dinâmica (simulada).

---

## 🌟 Funcionalidades

| Funcionalidade | Descrição Técnica |
| :--- | :--- |
| **Design Responsivo** | Layout adaptável via Media Queries, Flexbox e CSS Grid. |
| **Menu Fixo** | Cabeçalho (`<header>`) com `position: fixed` e navegação suave (*smooth scroll*) via JavaScript. |
| **Efeito Parallax** | Seção de boas-vindas com `background-attachment: fixed`. |
| **Eventos (Grid)** | Seção `#membros` formatada com **CSS Grid** (`membros-grid`) para exibição lado a lado. |
| **Formato Stories** | Imagens de eventos com formato retangular vertical e cantos arredondados (`border-radius: 15px`). |
| **Galeria Dinâmica (Simulada)** | Conteúdo inserido via **JavaScript (ES6)** com dados em JSON Mock, simulando a conexão com um feed de Instagram. Usa **CSS Grid** (`galeria-posts`) para o layout de fotos. |

---

## 💻 Tecnologias

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização, Flexbox, e **CSS Grid** (utilizado intensivamente para layout de eventos e galeria).
* **JavaScript (ES6):** Manipulação de DOM para menu (*toggle*) e injeção de conteúdo dinâmico (Galeria).

---

## 🚀 Como Executar Localmente

Este projeto é puramente *front-end* e não requer servidor.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LeorMolina/RednecksMc.git](https://github.com/LeorMolina/RednecksMc.git)
    cd RednecksMc
    ```
2.  **Verifique os Recursos:** Confirme que todos os arquivos de imagem (incluindo os mocks da galeria: `insta-post-1.jpg`, `insta-post-2.jpg`, etc.) estão presentes na pasta **`img/`**.
3.  **Execute:** Abra o arquivo `index.html` diretamente no seu navegador.

### ⚠️ Notas Importantes (Galeria)

A Galeria (`script.js`) usa dados simulados que assumem a extensão **`.jpg`** para as fotos. Se suas fotos de mock forem `.png`, edite o `script.js` para trocar a extensão nos dados JSON.

---

## ⚙️ Configuração do VS Code

Para garantir consistência na formatação do código, o repositório inclui configurações de espaço de trabalho:

### `settings.json`

Este arquivo configura o **Prettier** para formatar o código HTML, CSS e JavaScript automaticamente ao salvar (`editor.formatOnSave: true`).

**(Recomendação: Instale a extensão Prettier - Code formatter no VS Code.)**

---

## 🖋️ Contato

Se você tiver dúvidas ou sugestões, entre em contato:

* **Autor:** Leo Molina
* **GitHub:** [https://github.com/LeorMolina](https://github.com/LeorMolina)