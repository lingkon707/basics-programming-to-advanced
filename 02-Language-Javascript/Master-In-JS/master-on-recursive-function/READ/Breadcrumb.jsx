const path = {
  name: "Home",
  child: {
    name: "Products",
    child: {
      name: "Electronics",
      child: { name: "Mobile" }
    }
  }
};

function Breadcrumb({ node }) {
  if (!node) return null;
  return (
    <span>
      {node.name}
      {node.child && <> → <Breadcrumb node={node.child} /></>} {/* recursion */}
    </span>
  );
}

export default function App() {
  return <Breadcrumb node={path} />;
}
