// eslint-disable-next-line react/prop-types
function HiddenButton({ isSnowman, onToggle }) {
  return (
    <button
      className={`hidden-button ${isSnowman ? 'snowman' : 'o'}`}
      onClick={onToggle}
      data-active={isSnowman ? 'true' : 'false'}
    >
      {isSnowman ? '☃' : '⚙'}
    </button>
  );
}

export default HiddenButton;