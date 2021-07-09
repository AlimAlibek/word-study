function SubContextMenu(props) {

    return (
        <div className="sub-context-menu">
            <div>
                {props.children}
            </div>
            {props.buttons}
        </div>
    )
}

export default SubContextMenu;