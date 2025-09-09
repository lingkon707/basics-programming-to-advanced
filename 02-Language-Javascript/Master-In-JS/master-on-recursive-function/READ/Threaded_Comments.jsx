const comments = [
  { text: "Nice post!", replies: [] },
  { text: "Thanks!", replies: [{ text: "Welcome!", replies: [] }] }
];

function CommentList({ data }) {
  return (
    <ul>
      {data.map((c, i) => (
        <li key={i}>
          {c.text}
          {c.replies.length > 0 && <CommentList data={c.replies} />} {/* recursion */}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return <CommentList data={comments} />;
}
