export const Square = ({ children, isSelected, updateBoard, index }) => {
    const squareClassName = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    }

    return (
        <div onClick={handleClick} className={squareClassName}>
        {children}
        </div>
)
}