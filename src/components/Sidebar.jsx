export default function Sidebar({useMobileVariant = false}){
    const CLASS_NAME = "sidebar";
    const CLASS_NAME_MOBILE = `${CLASS_NAME} ${CLASS_NAME}-mobile`;

    async function getHistoryObjects() {
        return [{}];
    }

    return (
        <nav className={useMobileVariant ? CLASS_NAME_MOBILE : CLASS_NAME}>
            <div className={"spinner"}>Loading...</div>
        </nav>
    )
};