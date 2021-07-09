import React from 'react';
import ContextMenu from '../context_menu/contextMenu';
import question from "../../images/question.png"

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleContextOperation = this.handleContextOperation.bind(this);
        this.state = {
            isWordShown: false,
            isTranslateShown: false
        }
        
    }
    handleClick(e) {
        if (this.props.isSelectingEnabled) {
            this.props.onSelectWordsForRemove(this.props.item.id)
        }

        if (this.props.isSubContextMenuShown) return;

        if (this.props.isContextMenuShown) {
            this.props.closeContextMenu()
            return;
        }


        this.state.isTranslateShown 
            ? this.setState({
                isWordShown: false,
                isTranslateShown: false
            }) 
            : this.state.isWordShown 
                ? this.setState({
                    isTranslateShown: true
                })
                : this.setState({
                    isWordShown: true
                })
    }


    handleContextMenu(e) {
        e.preventDefault();

        if (this.props.isSubContextMenuShown) return;

        this.props.onContextMenu(e, this.props.item.id);
    }

    handleContextOperation(operation) {
        if (operation === "delete") {
            this.props.onSelectWordsForRemove(this.props.item.id)
            return;
        }
        
        this.props.onContextOperation(operation)
        
    }

    

    render() {
        const wordsIdForRemove = this.props.wordsIdForRemove;
        return (
            <React.Fragment>
                <li
                    onClick={this.handleClick}
                    onContextMenu={this.handleContextMenu}
                    className="Item"
                    style={{
                        background: wordsIdForRemove.find(id => id === this.props.item.id)
                        && "gray"
                    }}
                >
                    <div className="img-container">
                        <img src={this.props.item.img || question} alt="img" />
                    </div>
                    {
                        this.state.isWordShown && <div className="word-container">

                            <p>{this.props.item.word}</p>

                            {this.state.isTranslateShown &&
                                <p>{this.props.item.translate}</p>
                            }
                        </div>
                    }

                </li>

                {
                    this.props.isContextMenuShown && this.props.contextMenuTarget === this.props.item.id
                    && <ContextMenu
                        position={this.props.positionContextMenu}
                        closeContextMenu={this.props.closeContextMenu}
                        onSubContextMenu={this.props.onSubContextMenu}
                        onEnableSelection={this.props.onEnableSelection}
                        onContextOperation={this.handleContextOperation}
                    />
                }

            </React.Fragment>
        )
    }

}

export default Item;