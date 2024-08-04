// eslint-disable-next-line react/prop-types
function Tree({ istree, onToggle }) {
    return (
      <button
        className={`hidden-button ${istree ? 'tree' : 'T'}`}
        onClick={onToggle}
        data-active={istree ? 'true' : 'false'}
      >
        {istree ? '​†' : 'T'}
      </button>
    );
  }
  
  export default Tree;