import React from "react";
import Item from "./Item";


class ItemsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        
        this.handleCloseContextMenu = this.handleCloseContextMenu.bind(this);

        this.handleEnableSelection = this.handleEnableSelection.bind(this);
        this.handleContextOperation = this.handleContextOperation.bind(this);
        
        this.state = {
            positionContextMenu: {
                x: '',
                y: ''
            },
            
            contextMenuTarget: "",
            isSelectingEnabled: false,
            backgroundGroup: "",
        }
    }


    handleContextMenu(e, id) {

        this.setState({
            positionContextMenu: {
                x: e.pageX,
                y: e.pageY
            },
            contextMenuTarget: id
        })
        this.props.onContextMenu()

    }

    

    handleEnableSelection() {
        this.setState({
            isSelectingEnabled: true
        })
    }

    

    handleContextOperation(operation) {
       if (operation === "delete group") {
            this.setState({
                backgroundGroup: "gray"
            })
       } 
    }
    
    handleCloseContextMenu() {
        this.setState({
            
            isSelectingEnabled: false,
            backgroundGroup: "",
            
        })
        this.props.closeContextMenu();
    }

    render() {
        const words = [];
        if (this.props.words.length) {
            this.props.words.forEach(item => {
                if (item.word.indexOf(this.props.searchText) !== -1 || item.translate.indexOf(this.props.searchText) !== -1) {
                    words.push(item);
                }
            })
        }


        return (
            words.length
                ? <ul className="Items-container" style={{background: this.state.backgroundGroup}}>
                    {
                        words.map(item => {
                            return (
                                <Item
                                    
                                    onContextMenu={this.handleContextMenu}
                                    
                                    onSubContextMenu={this.props.onSubContextMenu}
                                    
                                    positionContextMenu={this.state.positionContextMenu}
                                    isContextMenuShown={this.props.isContextMenuShown}

                                    isSubContextMenuShown={this.props.isSubContextMenuShown}
                                    
                                    contextMenuTarget={this.state.contextMenuTarget}
                                    closeContextMenu={this.handleCloseContextMenu}
                                    
                                    onEnableSelection={this.handleEnableSelection}
                                    isSelectingEnabled={this.state.isSelectingEnabled}
                                    onSelectWordsForRemove={this.props.onSelectWordsForRemove}
                                    wordsIdForRemove={this.props.wordsIdForRemove}
                                    onContextOperation={this.handleContextOperation}
                                    backgroundItem={this.state.backgroundItem}

                                    item={item}
                                    key={item.id}

                                />
                            )
                        })
                    }
                </ul>

                : <div style={{ padding: "70px 50px 40px", color: "white" }}>
                    <span style={{ color: "red" }}>"{this.props.searchText}"</span> - not found
              </div>
        )
    }
}

export default ItemsContainer;