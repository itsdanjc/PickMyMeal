export default function GridItem(
    {
        children,
        className = "",
        gridColumn="",
        gridRow="",
        ...styles

    }
) {
    const baseStyles = {
        gridColumn: gridColumn,
        gridRow: gridRow,
        ...styles
    };

    return (
        <div className={className} style={baseStyles}>
            {children}
        </div>
    );
}