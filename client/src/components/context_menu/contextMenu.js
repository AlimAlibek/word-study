import React from 'react';
import Context from '../react_context/context';
import ContextMenuItems from './ContextMenuItems';


function ContextMenu(props) {
    const propsFromMain = React.useContext(Context);
    const [state, setState] = React.useState({
        currentOperation: '',
    })

    function handleOperationClick(e) {
        props.onSubContextMenu()
        const operation = e.target.attributes.operation.value;

        setState({
            currentOperation: operation
        })

        props.onContextOperation(operation);

        if (operation === "delete few") {
            props.onEnableSelection();
        }
    }

    function handleConfirm() {
        const operation = state.currentOperation;
        propsFromMain.deleteClick(operation)

        props.closeContextMenu();
    }



    const buttons = (
        <div>
            <button onClick={() => {
                handleConfirm();
                props.closeContextMenu();
            }}>
                delete
                </button>
            <button onClick={props.closeContextMenu}>
                cancell
                </button>
        </div>
    )

    return (
        <React.Fragment>

            {state.currentOperation === ""
                ? <div
                    className="Context-menu"
                    style={{ top: `${props.position.y}px`, left: `${props.position.x}px` }}
                >
                    <ul>
                        <li onClick={handleOperationClick} operation="delete">delete</li>
                        <li onClick={handleOperationClick} operation="delete few">delete few</li>
                        <li onClick={handleOperationClick} operation="delete group">delete group</li>
                    </ul>
                </div>

                : state.currentOperation === "delete"
                    ? <ContextMenuItems.Delete buttons={buttons}/>
                     

                    : state.currentOperation === "delete few"
                        ? <ContextMenuItems.DeleteFew buttons={buttons} />

                        : state.currentOperation === "delete group"
                        && <ContextMenuItems.DeleteGroup buttons={buttons} />

            }

        </React.Fragment>
    )
}

export default ContextMenu;