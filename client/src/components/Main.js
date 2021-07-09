import React from 'react';
import Container from './MainContainer';
import Context from './react_context/context';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
        this.handleChooseGroup = this.handleChooseGroup.bind(this);
        this.handleCreateGroupFormSubmit = this.handleCreateGroupFormSubmit.bind(this);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleSelectWordsForRemove = this.handleSelectWordsForRemove.bind(this);
        this.resetSelect = this.resetSelect.bind(this);
        this.state = {
            words: {},
            searchText: '',
            currentGroup:  null ,
            wordsIdForRemove: [],

        }
    }

    async componentDidMount() {
        
        const data = await this.props.getData();
        if (data) {
            this.setState({
                words: data,
                currentGroup: Object.keys(data)[0] 
            })
        }
    }

    handleSearchInputChange(value) {
        this.setState({
            searchText: value
        })
    }
    

    handleAddFormSubmit(obj) {
        const words = Object.assign({}, this.state.words);
        const currentGroup = this.state.currentGroup;
        words[currentGroup] = [...words[currentGroup], { ...obj }]
        this.setState({
            words: words
        })
        this.props.setData(words);
    }

    handleChooseGroup(groupName) {
        this.setState({
            currentGroup: groupName
        })
    }

    handleCreateGroupFormSubmit(newGroupName) {
        const words = { ...this.state.words };
        words[newGroupName] = [];

        this.setState({
            words: words,
            currentGroup: newGroupName
        })
        this.props.setData(words);
    }


    handleDeleteClick(operation) {
        const words = { ...this.state.words };
        const currentGroup = this.state.currentGroup;

        if (operation === "delete group") {
            delete words[currentGroup];
            const firstGroup = Object.keys(this.state.words)[0];
            const secondGroup = Object.keys(this.state.words)[1];
            this.setState({
                words: words,
                currentGroup: currentGroup !== firstGroup
                    ? firstGroup : secondGroup
            })
            this.props.setData(words);
            return;
        }

        this.state.wordsIdForRemove.forEach(i => {
            words[currentGroup] = words[currentGroup].filter(item => item.id !== i)
        })
        this.setState({
            words: words,
            wordsIdForRemove: []
        })
        this.props.setData(words);
    }


    handleSelectWordsForRemove(id) {
        const wordsIdForRemove = [...this.state.wordsIdForRemove];

        const hasId = wordsIdForRemove.findIndex(item => item === id);

        if (hasId === -1) {
            wordsIdForRemove.push(id);
        } else {
            wordsIdForRemove.splice(hasId, 1);
        }
        this.setState({
            wordsIdForRemove: wordsIdForRemove
        })
    }

    resetSelect() {
        this.setState({
            wordsIdForRemove: []
        })
    }



    render() {
        const propsToMenu = {
            searchText: this.state.searchText,
            onSearchInputChange: this.handleSearchInputChange,
            onAddFormSubmit: this.handleAddFormSubmit,
            words: this.state.words,
            currentGroup: this.state.currentGroup,
            onChooseGroupe: this.handleChooseGroup,
            onCreateGroupFormSubmit: this.handleCreateGroupFormSubmit
        }
        const propsToBody = {
            
            words: this.state.words[this.state.currentGroup],
            group: this.state.currentGroup,
            searchText: this.state.searchText,
            onSelectWordsForRemove: this.handleSelectWordsForRemove,
            wordsIdForRemove: this.state.wordsIdForRemove,
            resetSelect: this.resetSelect
        }
        return (

            <div className='Main' >
            
                <Context.Provider value={{
                    deleteClick: this.handleDeleteClick,
                }}>
                    <Container
                        propsToMenu={propsToMenu}
                        propsToBody={propsToBody}
                    />
                </Context.Provider>

            </div>

        )
    }
}


export default Main;


