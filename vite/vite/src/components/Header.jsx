export default function Header(props) {
  return (//here we are using props to pass data from parent component to child component, we can use props to pass any type of data like string, number, array, object etc. and we can access that data in child component using props keyword
    <header>
        <h1> {props.title}</h1>

      <nav>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
      </nav>
    </header>
  );
}