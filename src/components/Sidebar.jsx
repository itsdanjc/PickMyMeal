import {useState, useEffect} from "react";

export default function Sidebar({useMobileVariant = false}) {
    const CLASS_NAME = "sidebar";
    const CLASS_NAME_MOBILE = `${CLASS_NAME} ${CLASS_NAME}-mobile`;

    async function getHistoryObjects() {
        return [{}];
    }

    return (
        <nav className={useMobileVariant ? CLASS_NAME_MOBILE : CLASS_NAME}>
            <SidebarItemList/>
        </nav>
    )
};

function SidebarItemList() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems([]);
    }, []);

    if (items == null) {
        // Render loading state
        return <div>Loading...</div>;
    }
    else if (!items || !items.length) {
        // Render empty state
        return <div>Empty</div>;
    }

    // Populated state
    return (
        <ul>{items.map(i => <li>{i}</li>)}</ul>
    );
}