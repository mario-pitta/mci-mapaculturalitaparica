# Mapa Cultural de Itaparica

Um portal interativo para mapear agentes, instituições e eventos culturais da ilha de Itaparica.

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Status de acessibilidade](#status-de-acessibilidade)
- [Como testar localmente](#como-testar-localmente)
- [Documentação de acessibilidade](#documentacao-de-acessibilidade)
- [Desenvolvimento](#desenvolvimento)
- [Contribuição](#contribuicao)
- [Contato](#contato)

---

## Sobre o projeto

Este repositório contém a aplicação Angular do "Mapa Cultural de Itaparica". O objetivo é centralizar informações sobre a produção cultural local e oferecer uma interface acessível para descoberta e cadastro de agentes e instituições.

Durante a última entrega, o projeto passou por uma auditoria e recebeu melhorias de acessibilidade seguindo as diretrizes **WCAG 2.1 Nível AA**.

## Status de acessibilidade

- Idioma do documento: `pt-BR`
- Landmarks semânticos (`header`, `main`, `footer`) adicionados
- Textos alternativos (`alt`) verificados e padronizados
- Skip link e foco visível implementados
- Formulários com labels e `aria-required` onde aplicável

Para o relatório completo e instruções, veja a seção "Documentação de acessibilidade" abaixo.

## Como testar localmente

1. Instale dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm start
# ou
ng serve --open
```

3. Abra `http://localhost:4200` no navegador e verifique:

- Navegação por teclado (Tab, Shift+Tab)
- Skip link ("Pular para o conteúdo")
- Foco visível em botões e links
- Teste com leitor de tela (NVDA/VoiceOver)

## Documentação de acessibilidade

Os documentos gerados com a auditoria e instruções estão no diretório raiz:

- [`ACESSIBILIDADE.md`](ACESSIBILIDADE.md) — Documentação técnica detalhada
- [`CHECKLIST_ACESSIBILIDADE.md`](CHECKLIST_ACESSIBILIDADE.md) — Checklist para PRs
- [`SUMARIO_EXECUTIVO.md`](SUMARIO_EXECUTIVO.md) — Resumo executivo para clientes


## Desenvolvimento

Alguns comandos úteis:

- `npm start` — inicia o servidor de desenvolvimento
- `npm run build` — constrói para produção
- `npm test` — executa testes unitários

Este projeto foi criado com Angular CLI. Para detalhes do framework, consulte a documentação oficial em https://angular.dev.

## Contribuição

Ao abrir um Pull Request, execute o checklist de acessibilidade (`CHECKLIST_ACESSIBILIDADE.md`) e inclua na descrição da PR quais verificações foram feitas (teclado, leitor de tela, validador automático).

## Contato

Se precisar de suporte sobre as alterações de acessibilidade, abra uma issue ou contate o responsável pelo projeto.

---

Obrigado por contribuir para uma web mais inclusiva. ❤️

