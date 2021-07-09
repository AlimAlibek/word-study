function MenuItem(props) {
    return (
        <div className="Menu-item" onClick={props.onClick}>
            <div>
                {props.children}
            </div>

        </div>
    )
}

export default MenuItem;