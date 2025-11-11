# ✅ Checklist de Acessibilidade para Pull Requests

Use este checklist **antes de enviar cada Pull Request** para garantir que as mudanças mantêm a conformidade de acessibilidade do projeto.

---

## 📝 Checklist PRÉ-COMMIT

### 1. HTML Semântico
- [ ] Usei tags semânticas corretas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] Não tenho `<div>` aninhadas desnecessariamente
- [ ] Estrutura de headings é lógica (`<h1>` → `<h2>` → `<h3>`, sem pular níveis)
- [ ] Apenas um `<h1>` por página
- [ ] Links têm textos descritivos (não apenas "clique aqui", "leia mais")

### 2. Imagens
- [ ] Todas as imagens têm atributo `alt`
- [ ] `alt` descreve o conteúdo (não é genérico como "imagem" ou "logo")
- [ ] Imagens puramente decorativas têm `alt=""` + `aria-hidden="true"`
- [ ] Imagens com texto incorporado têm alt que inclui o texto relevante
- [ ] SVGs possuem `<title>` ou `aria-label` descritivos

### 3. Formulários
- [ ] Cada `<input>` tem um `<label for="id">` associado
- [ ] Labels estão próximos ou visíveis ao lado do input
- [ ] Campos obrigatórios têm `required` + `aria-required="true"`
- [ ] Mensagens de erro estão associadas com `aria-describedby`
- [ ] Tipo de input correto (`type="email"`, `type="search"`, etc.)

### 4. Botões & Links
- [ ] Botões têm texto visível descritivo
- [ ] Links externos têm `rel="noopener noreferrer"` (segurança)
- [ ] Links que abrem nova aba têm `aria-label` indicando "(abre em nova aba)"
- [ ] Botões/links têm foco visível (testado com Tab)
- [ ] Não usei `<div onclick>` ou `<span>` para ações — uso `<button>` ou `<a>`

### 5. ARIA (Accessible Rich Internet Applications)
- [ ] ARIA usada apenas quando HTML semântico não é suficiente
- [ ] `role` atribuído corretamente (não duplica HTML semântico)
- [ ] `aria-label` e `aria-labelledby` são descritivos
- [ ] `aria-hidden="true"` usado em elementos decorativos apenas
- [ ] Não tenho `aria-label` vago ou duplicado

### 6. Cores & Contraste
- [ ] Texto tem contraste mínimo 4.5:1 (WCAG AA) com fundo
- [ ] Informações não são comunicadas **apenas por cor** (ex: "clique no botão vermelho")
- [ ] Sem reliance em cores para diferenciar links visitados vs não-visitados

### 7. Navegação por Teclado
- [ ] Testei com TAB — todos os botões/links são alcançáveis
- [ ] Ordem de tabulação é lógica (de esquerda para direita, top-down)
- [ ] Modais/menus têm foco gerenciado (`tabindex="-1"` quando apropriado)
- [ ] Nenhum `outline: none` sem substituição visual

### 8. Leitores de Tela
- [ ] Testei com NVDA, JAWS ou VoiceOver
- [ ] Conteúdo é compreensível quando lido linearmente
- [ ] Pontos de referência (landmarks) são anunciados
- [ ] Não há ruído de elementos `aria-hidden` desnecessários

### 9. Componentes Dinâmicos (Angular)
- [ ] `*ngIf` usado em lugar de `display: none` (melhor semântica)
- [ ] Modals/popovers têm `role="dialog"` ou `role="alertdialog"`
- [ ] Live regions (`aria-live="polite"` ou `"assertive"`) para atualizações
- [ ] Mudanças de página são anunciadas (ex: skip link auto-focado)

### 10. Responsividade & Mobile
- [ ] Teste no mobile — toque é preciso (hit targets mínimo 44x44px)
- [ ] Sem scroll horizontal (layout em coluna em mobile)
- [ ] Zoom não é desabilitado (`maximum-scale` removido ou ≥ 2)

---

## 🧪 Teste de Aceitação (Mínimo)

Antes de enviar a PR:

1. **Teste com Teclado**
   ```
   1. Abra no navegador
   2. Pressione Tab, Shift+Tab, Enter, Escape
   3. Verifique se pode ativar botões e links
   4. Confirme foco visível
   ```

2. **Teste com Leitor de Tela** (escolha uma)
   ```
   # NVDA (Windows)
   Alt+N para ativar, espaço para ler item, setas para navegar
   
   # VoiceOver (Mac)
   Cmd+F5 para ativar, Vo+Seta para navegar
   
   # TalkBack (Android)
   Três dedos para ativar, deslizar com dois dedos
   ```

3. **Validador Automático**
   ```bash
   # Se instalado (axe-core ou pa11y)
   npm run test:a11y  # (quando implementado)
   
   # Ou use axe DevTools extensão no Chrome/Edge
   ```

---

## 🚫 Anti-padrões — Não Faça Isso

| ❌ Evite | ✅ Faça Assim |
|----------|--------------|
| `<div onclick>` | `<button>` ou `<a>` |
| `alt=""` sem `aria-hidden` | `alt=""` + `aria-hidden="true"` |
| `<img alt="Imagem">` | `<img alt="Descrição específica">` |
| `<h1>`, `<h2>`, `<h1>` | `<h1>`, `<h2>`, `<h3>` |
| Cores apenas | Cores + ícones/padrões |
| `outline: none` sem foco | Foco visível com `outline` |
| `placeholder` como label | `<label>` + `placeholder` |
| `<a href="#">Clique aqui</a>` | `<a href="/page">Conteúdo da página</a>` |
| `target="_blank"` sem aviso | `aria-label="(abre em nova aba)"` |

---

## 📂 Exemplo de Mudança Acessível

### ❌ Antes (Problemático)
```html
<div class="card" onclick="navigate('/page')">
  <img src="photo.jpg">
  <a href="#">Saiba mais</a>
</div>
```

### ✅ Depois (Acessível)
```html
<article class="card">
  <img src="photo.jpg" alt="Descrição da foto">
  <a href="/page">Saiba mais sobre [tópico específico]</a>
</article>
```

---

## 🔗 Links Rápidos para Referência

- **WCAG 2.1 Checklist:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA 1.2 Spec:** https://www.w3.org/TR/wai-aria-1.2/
- **MDN Web Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **WebAIM:** https://webaim.org/

---

## 📋 Modelo de Descrição de PR

Ao enviar, inclua na descrição:

```markdown
## Acessibilidade
- [ ] Segui o Checklist de Acessibilidade
- [ ] Testei com teclado (Tab, Enter, Escape)
- [ ] Testei com [NVDA / VoiceOver / autre]
- [ ] Validei com axe DevTools / pa11y
- [ ] Não há regressões em acessibilidade

### Mudanças de Acessibilidade (se houver)
- Adicionado alt em 2 imagens
- Corrigido heading hierarchy em [página]
- etc.
```

---

## 🎓 Recursos de Treinamento

### Vídeos Curtos (5-10 min)
- [A11ycasts by Google](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvePng7V)
- [WebAIM Videos](https://webaim.org/articles/)

### Artigos
- [WebAIM: Articles](https://webaim.org/articles/)
- [The A11Y Project: Resources](https://www.a11yproject.com/resources/)

### Ferramentas Úteis
- **axe DevTools** — https://www.deque.com/axe/devtools/
- **WAVE** — https://wave.webaim.org/
- **Lighthouse (Chrome)** — Built-in (Dev Tools → Lighthouse)

---

## ❓ Dúvidas Frequentes

**P: Preciso testar TUDO com leitor de tela?**  
R: Não, mas teste as mudanças críticas (navegação, formulários, novos componentes). Para PRs menores, o validador automático é suficiente.

**P: E se não tiver imagem alt porque é decorativa?**  
R: Use `alt=""` (vazio) + `aria-hidden="true"`. Assim o leitor de tela ignora completamente.

**P: Foco visível deixa meu design ruim. Posso remover?**  
R: Não, é obrigatório em WCAG AA. Customize o `outline` para caber no design (cor, espessura, offset).

**P: Qual a diferença entre `aria-label` e `aria-labelledby`?**  
R: `aria-label` define um rótulo direto. `aria-labelledby="id"` aponta para um elemento que atua como rótulo.

---

## 🔄 Processo de Revisão

### O Revisor Deve
1. ✅ Confirmar que mudanças HTML/CSS não quebram acessibilidade
2. ✅ Pedir testes se PR modificar navegação/formulários
3. ✅ Sugerir melhorias usando este checklist
4. ✅ Bloquear PRs que degradem acessibilidade (com educação)

### O Autor Deve
1. ✅ Completar o checklist antes de enviar
2. ✅ Responder a comentários sobre acessibilidade
3. ✅ Rodar validadores localmente

---

**Versão:** 1.0  
**Atualizado:** 10 de Novembro de 2025  
**Conformidade:** WCAG 2.1 AA
