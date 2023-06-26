export default function Layout({ children }) {
  return (
    <div style={{ background: 'lightyellow', padding: '1rem' }}>
      <h3>this is dashoard layout</h3>
      {children}
    </div>
  );
}
