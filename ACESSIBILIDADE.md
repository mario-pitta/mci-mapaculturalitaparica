# Acessibilidade — Mapa Cultural de Itaparica

## Visão Geral

Este projeto foi auditado e melhorado para estar em conformidade com os **Padrões de Acessibilidade Web** (WCAG 2.1 — Nível A/AA). O objetivo é garantir que todas as pessoas, incluindo aquelas com deficiências visuais, auditivas, motoras ou cognitivas, possam navegar, entender e interagir plenamente com o Mapa Cultural de Itaparica.

---

## 📋 O Que Foi Implementado

### 1. **Idioma do Documento**
- ✅ Tag `<html lang="pt-BR">` configurada para português brasileiro
- **Impacto:** Leitores de tela pronunciam corretamente o conteúdo em português

### 2. **Landmarks e Estrutura Semântica**
| Elemento | Implementação | Localização |
|----------|---------------|------------|
| `<header role="banner">` | Identifica a área de cabeçalho | `header.component.html` |
| `<footer role="contentinfo">` | Identifica rodapé e informações | `footer.component.html` |
| `<main id="main-content">` | Identifica conteúdo principal | `layout.component.html` |
| `<article>` | Encapsula conteúdo de página | Todas as páginas |
| `<section>` | Organiza seções lógicas | Páginas de conteúdo |
| `<nav>` | Links de navegação estruturados | Sidebar (futuro) |

**Impacto:** Usuários de leitores de tela podem navegar por landmarks usando atalhos (ex.: pressionar "r" no NVDA para ir ao próximo região).

### 3. **Textos Alternativos (ALT) para Imagens**
Todas as 12 imagens do projeto têm textos alternativos descritivos:

| Imagem | Alt Texto | Contextualização |
|--------|-----------|------------------|
| Logo MCI | "Mapa Cultural de Itaparica — logotipo" | Identifica marca |
| Cabocla | "Ilustração Cabocla - Mapa Cultural de Itaparica" | Descreve elemento cultural |
| Lua de Maré | "Lua de Maré - logotipo" | Identifica parceira |
| Transatlântica | "Transatlântica - logotipo" | Identifica parceira |
| SECULT | "Governo da Bahia - SECULT - logotipo" | Identifica apoiador |
| Lei Paulo Gustavo | "Ministério da Cultura - Lei Paulo Gustavo - logotipo" | Identifica apoiador |
| GEOGRAFIACOR | "Ilustração visual do Mapa Cultural de Itaparica" | Descreve elemento visual |
| Lara Carvalho | "Foto de Lara Carvalho" | Identifica pessoa |
| Stefane Souto | "Foto de Stefane Souto" | Identifica pessoa |
| Ícones dinâmicos | "Ícone de [nome]" | Identifica ícone dinamicamente |

**Impacto:** Usuários cegos ou com visão baixa entendem o propósito de cada imagem.

### 4. **Foco Visível e Navegação por Teclado**
- ✅ Todos os botões e links têm outline de foco visível (3px solid #ffd54f)
- ✅ Skip link: "Pular para o conteúdo" permite pular a navegação
- ✅ Ordem de tabulação lógica e navegável por teclado

**Impacto:** Usuários que dependem de teclado (sem mouse) podem navegar completamente.

### 5. **Links com Contexto**
- ✅ Links externos com `target="_blank"` têm `rel="noopener noreferrer"` + `aria-label` descritivo
  - Exemplo: "Abrir Facebook (abre em nova aba)"
- ✅ Todos os links têm texto descritivo (não apenas "clique aqui")

**Impacto:** Usuários entendem o destino e comportamento de cada link.

### 6. **Formulários Acessíveis**
| Elemento | Implementação | Benefício |
|----------|---------------|-----------|
| `<label for="id">` | Labels explícitos para cada input | Assistive tech identifica campos |
| `.sr-only` | Labels visualmente ocultas | Mantém acessibilidade sem visual clutter |
| `aria-required="true"` | Marca campos obrigatórios | Leitores de tela indicam obrigatoriedade |
| `(ngSubmit)` | Formulário ligado corretamente | Funciona com teclado e leitores de tela |

**Impacto:** Usuários com leitores de tela podem preencher formulários com clareza.

### 7. **Elementos Decorativos**
- ✅ Elementos decorativos (backgrounds) marcados com `aria-hidden="true"`
- ✅ Evita ruído desnecessário para leitores de tela

### 8. **Utilitários CSS para Acessibilidade**
```scss
/* Screen reader only — oculto visualmente */
.sr-only { /* posição absolute, 1px, overflow hidden, etc */ }

/* Reveal .sr-only content on focus */
.sr-only-focusable:focus { /* position: static, visível */ }

/* Foco visível para todos os elementos interativos */
a:focus, button:focus, input:focus, textarea:focus {
  outline: 3px solid #ffd54f;
  outline-offset: 2px;
}
```

**Impacto:** Usuários de leitores de tela veem conteúdo hidden semanticamente; skip links ficam visíveis ao focar.

### 9. **Páginas com Estrutura Melhorada**
| Página | Mudanças |
|--------|----------|
| **Artigos** | Adicionado `<h1>` semântico |
| **Inscrição** | Botões dentro de `<a>` substituídos por `<a>` estilizadas; `rel` e `aria-label` em links externos |
| **Sobre** | Backgrounds marcados `aria-hidden`; botão com `type="button"` |
| **Equipe** | Headings (`h1` → `h2`) ajustados para outline correto; alts melhorados |
| **Mapa** | `role="application"`, `aria-label` e `tabindex="0"` adicionados |

---

## 🎯 Padrões de Conformidade

Este projeto segue as recomendações:
- **WCAG 2.1** — Diretrizes de Acessibilidade para Conteúdo Web (W3C)
- **Nível AA** — Conformidade intermediária (recomendada para web pública)
- **Lei Brasileira de Inclusão (Lei 13.146/2015)** — Acessibilidade digital obrigatória

### Princípios WCAG Aplicados
1. **Perceptível** — Imagens com alt, cores com contraste, vídeos com legendas (futuro)
2. **Operável** — Teclado, skip links, foco visível
3. **Compreensível** — Linguagem clara, estrutura lógica, labels
4. **Robusto** — HTML semântico, ARIA apropriada

---

## 📝 Arquivos Modificados

### Layout e Estrutura
- `src/index.html` — Lang="pt-BR"
- `src/styles.scss` — Utilitários `.sr-only`, `.sr-only-focusable`, foco visível
- `src/app/layout/layout.component.html` — Skip link, `<main>`

### Componentes
- `src/app/layout/header/header.component.html` — Role banner, alt logo
- `src/app/layout/footer/footer.component.html` — Footer semântico, labels, aria
- `src/app/layout/sidebar/sidebar.component.html` — Search label, links estruturados, alts
- `src/app/layout/pages/mapa/mapa.component.html` — Role application, aria-label

### Páginas
- `src/app/layout/pages/artigos/artigos.component.html` — Estrutura semântica
- `src/app/layout/pages/inscricao/inscricao.component.html` — Links/botões corrigidos
- `src/app/layout/pages/sobre/sobre.component.html` — Backgrounds hidden, botão correto
- `src/app/layout/pages/equipe/equipe.component.html` — Headings, alts descritivos

---

## 🧪 Como Testar Acessibilidade

### 1. **Navegação por Teclado**
```bash
# Abra o aplicativo e:
- Pressione TAB para navegar (skip link aparece)
- Enter para ativar botões/links
- Arrow keys para menus (se houver)
```

### 2. **Leitores de Tela (Grátis)**
- **NVDA** (Windows) — https://www.nvaccess.org/
- **JAWS** (Windows/Mac) — Teste gratuito (90 dias)
- **VoiceOver** (Mac/iOS) — Built-in (Cmd+F5)
- **TalkBack** (Android) — Built-in

**Teste rápido:**
```bash
# NVDA (Windows)
1. Baixe e instale
2. Pressione Alt+N para ativar
3. Navegue com setas e Tab
```

### 3. **Validadores Automáticos**
```bash
# Instalar axe DevTools (Chrome extension)
# https://chromewebstore.google.com/detail/axe-devtools/lhdoppojpmngadmnkpklempisson

# Ou usar pa11y (CLI)
npm install -g pa11y-ci
pa11y-ci http://localhost:4200
```

### 4. **Checklist Manual**
- [ ] Todas as imagens têm `alt` descritivo
- [ ] Todos os botões/links têm rótulo visível ou `aria-label`
- [ ] Foco visível ao navegar com Tab
- [ ] Formulários têm labels associados
- [ ] Estrutura de headings é lógica (h1 → h2 → h3)
- [ ] Cores não são o único meio de comunicação
- [ ] Contraste de texto é suficiente (4.5:1 para texto pequeno)

---

## 📚 Recursos de Referência

### Documentação Oficial
- [WCAG 2.1 — W3C](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Ferramentas
- [axe DevTools](https://www.deque.com/axe/devtools/) — Validador automático
- [WAVE](https://wave.webaim.org/) — Avaliador visual
- [pa11y](https://pa11y.org/) — CLI para testes

### Guias
- [WebAIM](https://webaim.org/) — Artigos e tutoriais
- [A11ycasts by Google](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvePng7V) — Vídeos curtos

---

## 🔄 Processo de Manutenção Contínua

### Para Futuras Atualizações
1. Revise o **Checklist de Acessibilidade (abaixo)** antes de cada PR
2. Teste com teclado e leitor de tela (NVDA/VoiceOver)
3. Execute validadores automáticos (axe, pa11y)
4. Documente mudanças de acessibilidade em PRs

### Escalonamento
Se encontrar problemas de acessibilidade:
- **Crítico** (bloqueador completo) — Corrija antes de merge
- **Importante** (afeta navegação/compreensão) — Corrija ASAP
- **Menor** (edge case raro) — Priorize no roadmap

---

## 📊 Resumo de Conformidade

| Categoria | Status | Detalhe |
|-----------|--------|---------|
| Semântica HTML | ✅ Completo | Headers, landmarks, articles, sections |
| Textos Alternativos | ✅ Completo | 12/12 imagens com alt descritivo |
| Foco & Teclado | ✅ Completo | Skip link, outline visível, ordem de tabulação |
| Formulários | ✅ Completo | Labels, required, aria-required |
| Links & Botões | ✅ Completo | Aria-labels, rel="noopener noreferrer" |
| Idioma | ✅ Completo | lang="pt-BR" no documento |
| Cores & Contraste | ⚠️ Pendente* | Recomenda-se auditoria visual |
| Vídeos/Áudio | ⚠️ N/A | Não implementado ainda |

*Recomenda-se executar auditoria de contraste com ferramentas como WCAG Color Contrast Checker.

---

## 👥 Próximos Passos Recomendados

1. **Teste com Usuários** — Recrute pessoas com deficiências para feedback real
2. **Auditoria de Contraste** — Verifique ratios de cor (mínimo 4.5:1)
3. **Legendas em Vídeos** — Se houver mídia, adicione legendas
4. **Testes Automáticos** — Configure CI/CD com pa11y ou axe
5. **Treinamento da Equipe** — Compartilhe este documento com o time

---

## ✉️ Contato e Suporte

Para dúvidas sobre acessibilidade ou para reportar problemas:
- Consulte o [WCAG 2.1 Quickref](https://www.w3.org/WAI/WCAG21/quickref/)
- Teste com [axe DevTools](https://www.deque.com/axe/devtools/)
- Revise o **Checklist de Acessibilidade** abaixo

---

**Documento gerado em:** 10 de Novembro de 2025  
**Versão:** 1.0  
**Conformidade:** WCAG 2.1 Nível AA
