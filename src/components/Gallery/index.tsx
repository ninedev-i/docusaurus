const Gallery = ({ items }) => {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {items.map(([src, title]) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
          lineHeight: 1.4,
          gap: 8,
          borderRadius: 'var(--ifm-global-radius)',
          background: 'var(--ifm-menu-color-background-active)',
          padding: 8,
        }}>
          <img src={`/docusaurus/img/${src}`} alt={title} style={{ height: '100%', maxHeight: 170 }} />
          <span style={{ fontSize: 14 }}>{title}</span>
        </div>
      ))}
    </div>
  )
}

export default Gallery;
