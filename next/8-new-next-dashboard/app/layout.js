export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div style={{ background: 'lightblue', padding: '1rem' }}>
          <h1>This is app /homepage layout</h1>

          {children}
        </div>
      </body>
    </html>
  );
}
