# Instruções para Agentes de IA — Pilates Fitness Studio

Este projeto é um site moderno e responsivo para um estúdio de Pilates, desenvolvido em React, com agendamento integrado e foco em experiência visual.

## Visão Geral da Arquitetura
- **Componentização**: O projeto segue padrão React, com componentes para cada seção principal (`App.jsx` importa componentes como Header, Hero, Schedule, Gallery, Video, Contact).
- **Estilização**: Utiliza TailwindCSS e um arquivo customizado (`Styless/styless.css`) para variáveis de cor e estilos globais. Priorize classes utilitárias e variáveis CSS para manter o padrão visual.
- **Agendamento**: O componente `Shedule.jsx` implementa a lógica de horários, limites de alunos e integração com Calendly e WhatsApp. Botões de agendamento abrem links externos.
- **Dados**: Não há backend; dados de horários e regras são definidos em arrays locais e variáveis. Use localStorage para persistência simples se necessário.

## Fluxos de Desenvolvimento
- **Build/Dev**: Use scripts do Vite:
  - `npm run dev` — inicia servidor de desenvolvimento
  - `npm run build` — gera build de produção
  - `npm run preview` — visualiza build local
- **Estrutura de arquivos**:
  - Componentes principais devem estar em `components/` (crie se não existir)
  - Estilos customizados em `Styless/styless.css`
  - Página principal: `App.jsx` e `index.jsx`

## Convenções Específicas
- **Cores e Layout**: Siga as variáveis CSS do arquivo de estilos para manter o padrão verde/preto.
- **Agendamento**: Respeite regras de funcionamento (dias úteis, intervalo de almoço, máximo de alunos por turma) conforme implementado em `Shedule.jsx`.
- **Integrações**: Links para WhatsApp e Calendly devem ser abertos em nova aba (`window.open`).
- **Responsividade**: Utilize grid e flexbox conforme exemplos em `styless.css`.

## Exemplos de Padrões
- Botão de agendamento:
  ```jsx
  <button onClick={() => window.open('https://calendly.com/seu-usuario/pilates', '_blank')} className="btn-agendar">Agendar</button>
  ```
- Uso de variáveis CSS:
  ```css
  color: var(--primary-green);
  background-color: var(--black);
  ```

## Pontos de Atenção
- Não há testes automatizados ou backend.
- Componentes podem ser criados conforme necessidade, seguindo o padrão dos existentes.
- Atualize regras de negócio diretamente nos arrays/variáveis dos componentes.

## Referências
- `README.md` — visão geral, regras de negócio e tecnologias
- `Shedule.jsx` — lógica de agendamento e regras
- `Styless/styless.css` — estilos e variáveis visuais
- `App.jsx` — estrutura principal do app

---

Se alguma seção estiver incompleta ou pouco clara, peça feedback ao usuário para ajustes.
