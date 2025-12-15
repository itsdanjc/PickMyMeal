export default function Grid(
    {
        children,
        className = "",
        gridRows = "",
        gridColumns = ""
    }
) {
    const baseStyles = {
        display: "grid",
        gridTemplateColumns: gridColumns,
        gridTemplateRows: gridRows,
    };


    return (
        <div className={className} style={baseStyles}>
            {children}
        </div>
    );
}