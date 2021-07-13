import React from 'react'
import Search from './Search';
import AddWord from './AddWord';
import Groups from './Groups';
import CreateGroup from './CreateGroup';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleGroupsClick = this.handleGroupsClick.bind(this);
        this.handleCreateGropeClick = this.handleCreateGropeClick.bind(this);
        this.handleClick = this.handleClick.bind(this)
        // this.handleWindowScroll = this.handleWindowScroll.bind(this);
        this.state = {
            isSearchInput: false,
            isAddForm: false,
            isGroupsList: false,
            isCreateGropeForm: false,
            menuClass: "Menu"
        }
    }

    handleSearchClick() {
        if (this.props.isSubContextMenuShown) return;

        this.props.onMenuItemClick();
        this.setState({
            isSearchInput: true,
            isAddForm: false,
            isGroupsList: false,
            isCreateGropeForm: false
        })
    }

    handleAddClick() {
        if (this.props.isSubContextMenuShown) return;

        this.props.onMenuItemClick();
        this.setState({
            isAddForm: true,
            isSearchInput: false,
            isGroupsList: false,
            isCreateGropeForm: false
        })
    }

    handleGroupsClick() {
        if (this.props.isSubContextMenuShown) return;

        this.props.onMenuItemClick();
        this.setState({
            isGroupsList: true,
            isSearchInput: false,
            isAddForm: false,
            isCreateGropeForm: false
        })
    }

    handleCreateGropeClick() {
        if (this.props.isSubContextMenuShown) return;

        this.props.onMenuItemClick();
        this.setState({
            isCreateGropeForm: true,
            isSearchInput: false,
            isAddForm: false,
            isGroupsList: false
        })
    }

    handleClick(e) {
        if (!this.props.isSubContextMenuShown){
            this.props.closeContextMenu()
        }
    }

    componentDidMount() {
        let scroll = 0;
        window.addEventListener("scroll", () => {
           
            if (!this.props.isSubContextMenuShown) {
                this.props.closeContextMenu();
            }
            

            const currentScroll = window.scrollY;
            if (currentScroll > 110 && currentScroll < scroll) {
                this.setState({
                    menuClass: "Menu Menu-scroll scroll-up"
                })
            } else if (
                (currentScroll > 110 && currentScroll > scroll) 
                || (currentScroll < 110 && currentScroll > 85)
            ) {
                this.setState({
                    menuClass: "Menu Menu-scroll scroll-down"
                })
            } else {
                this.setState({
                    menuClass: "Menu"
                })
            }
            scroll = currentScroll;
        })
    }
    
    render() {
        
        return (
                
            <div className="Menu-container">
            <div className={this.state.menuClass} onClick={this.handleClick}>
                <Search
                    isSearchInput={this.state.isSearchInput}
                    onSearchClick={this.handleSearchClick}
                    searchText={this.props.searchText}
                    onSearchInputChange={this.props.onSearchInputChange}
                    isMenuModalShown={this.props.isMenuModalShown} 
                    closeModal={this.props.closeModal}
                />
                <AddWord
                    isAddForm={this.state.isAddForm}
                    onAddClick={this.handleAddClick}
                    onAddFormSubmit={this.props.onAddFormSubmit}
                    words={this.props.words}
                    isMenuModalShown={this.props.isMenuModalShown} 
                    closeModal={this.props.closeModal}
                />
                <Groups
                    isGroupsList={this.state.isGroupsList}
                    onGroupsClick={this.handleGroupsClick}
                    words={this.props.words}
                    onChooseGroupe={this.props.onChooseGroupe}
                    currentGroup={this.props.currentGroup}
                    isMenuModalShown={this.props.isMenuModalShown}
                />
                <CreateGroup
                    isCreateGropeForm={this.state.isCreateGropeForm}
                    onCreateGropeClick={this.handleCreateGropeClick}
                    onCreateGroupFormSubmit={this.props.onCreateGroupFormSubmit}
                    
                    words={this.props.words}

                    isMenuModalShown={this.props.isMenuModalShown}
                    closeModal={this.props.closeModal}
                />
            </div>
            </div>
            
        )
    }


}


export default Menu;