import SubContextMenu from "./SubContexMenu";


const ContextMenuItems = {
    Delete(props) {
        return (
            <div className="Delete">
                <SubContextMenu buttons={props.buttons}>
                     delete this word?
                </SubContextMenu>
            </div>
        )
    },

    DeleteFew(props) {
        return (
            <div className="Delete-few">
                <div>
                    <SubContextMenu buttons={props.buttons}>
                        choose words which you want to delete
                    </SubContextMenu>
                </div>
    
            </div>
        )
    },

    DeleteGroup(props) {
        return (
            <div className="Delete-group">
                <SubContextMenu buttons={props.buttons}>
                    delete this group?
                </SubContextMenu>
    
            </div>
    
        )
    }
}

export default ContextMenuItems;