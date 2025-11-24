export default function GridItem(
    {
        children,
        className = "",
        gridColumn="",
        gridRow="",

    }
) {
    const baseStyles = {
        gridColumn: gridColumn,
        gridRow: gridRow,
    };

    return (
        <div className={className} style={baseStyles}>
            {children}
        </div>
    );
}