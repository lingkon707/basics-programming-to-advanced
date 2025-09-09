const menu = [
  { name: "Home" },
  { name: "About" },
  { name: "Services", children: [{ name: "Web" }, { name: "Mobile" }] }
];

function Menu({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item.name}
          {item.children && <Menu items={item.children} />} {/* recursion */}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return <Menu items={menu} />;
}
