import React from "react"

import Menu from "./haeader_menu/menuHeader";
import Body from "./body/Body"

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleCloseContextMenu = this.handleCloseContextMenu.bind(this);
        this.handleSubContextMenu = this.handleSubContextMenu.bind(this);
        this.state = {
            isMenuModalShown: false,
            isContextMenuShown: false,
            isSubContextMenuShown: false,
        }
    }

    handleMenuItemClick() {
        this.setState({
            isMenuModalShown: true
        })
    }
    handleCloseModal() { 
        this.setState({
            isMenuModalShown: false,
        })
    }

    handleContextMenu() {

        this.setState({
            isContextMenuShown: true
        })
    }

    handleSubContextMenu() {
        this.setState({
            isSubContextMenuShown: true
        })
    }

    handleCloseContextMenu() {

        this.setState({
            isContextMenuShown: false,
            isSubContextMenuShown: false
        })
        this.props.propsToBody.resetSelect();
    }

    render() {
        return (
            <React.Fragment>
                
                <Menu
                    closeModal={this.handleCloseModal}  
                    onMenuItemClick={this.handleMenuItemClick}
                    isMenuModalShown={this.state.isMenuModalShown} 
                    closeContextMenu={this.handleCloseContextMenu}
                    isSubContextMenuShown={this.state.isSubContextMenuShown}

                    {...this.props.propsToMenu}

                />
                
                <Body
                    onBodyClick={this.handleCloseModal} 
                    words={this.props.propsToBody.words}
                    group={this.props.propsToBody.group}
                    // {...this.props.propsToBody}

                    propsToBody={{
                        onContextMenu: this.handleContextMenu,
                        isContextMenuShown: this.state.isContextMenuShown,
                        onSubContextMenu: this.handleSubContextMenu,
                        isSubContextMenuShown: this.state.isSubContextMenuShown,
                        closeContextMenu: this.handleCloseContextMenu,
                        ...this.props.propsToBody
                    }}
                />
            </React.Fragment>
        )
    }
}

export default Container;