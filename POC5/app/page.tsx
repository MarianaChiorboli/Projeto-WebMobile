import SimpleComponent from "./components/SimpleComponent";
import "./globals.css";
import Print from "./components/Print";
export default function HomePage() {
  return (
    <main>
      <h1> Explicando React </h1>
      <ul>
        <li>
          <a href="#estrutura">Estrutura de Projeto</a>
        </li>
        <li>
          <a href="#create">Criação de compontentes</a>
        </li>
        <li>
          <a href="#estilo">Estilo CSS</a>
        </li>
      </ul>

      <SimpleComponent
        nameSection="estrutura"
        title="Estrutra de projeto em Next.js"
        text="O Next.js 14 oferece uma estrutura mais modular e escalável, com foco em desempenho e experiência do usuário. A pasta app é a peça central dessa nova organização, facilitando a criação de aplicações complexas e bem estruturadas. Ao utilizar as novas funcionalidades e seguir as melhores práticas, você poderá construir aplicações web robustas e de alta performance."
      />
      <Print url="https://i.ibb.co/RpPRbNx/print-Estrutura.png" />
      <SimpleComponent
        nameSection="create"
        title="Criação de componentes simples"
        text="A criação de componentes simples em React envolve a definição de funções que retornam elementos da interface de usuário, sem a necessidade de gerenciar dados dinâmicos ou reativos. Esses componentes são ideais para exibir informações estáticas ou para compor a interface de maneira reutilizável.Desse modo você pode definir uma função JavaScript que retorna JSX, a sintaxe que permite escrever elementos HTML dentro do JavaScript."
      />
      <Print url="https://i.ibb.co/16xXNz0/print-component.png" />
      <SimpleComponent
        nameSection="estilo"
        title="Estilo CSS Global"
        text="O CSS global em Next.js permite que você aplique estilos que afetem toda a aplicação, garantindo uma aparência consistente em todas as páginas. Para usar o CSS global, você deve criar um arquivo CSS (geralmente chamado de globals.css) e importá-lo no arquivo page.tsx. Esse arquivo serve como o ponto de entrada para estilos globais e é onde você pode definir regras que se aplicam a todos os componentes, como cores de fundo, fontes, margens e paddings."
      />
      <Print url="https://i.ibb.co/0s2dVnK/print-global.png" />
      <SimpleComponent
        nameSection="estilodois"
        title="Estilo CSS Modulo"
        text="Os módulos CSS em Next.js oferecem uma maneira de aplicar estilos a componentes de forma isolada, evitando conflitos entre estilos globais e permitindo um escopo específico para cada componente. Essa abordagem é especialmente útil em projetos grandes, onde diferentes partes da aplicação podem ter estilos semelhantes que não devem interferir umas nas outras."
      />
      <Print url="https://i.ibb.co/JcQSb1W/print-modulo.png" />
    </main>
  );
}
