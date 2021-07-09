import React from "react";
import MenuItem from "./MenuItem";
import Modal from "./MenuModal";


class CreateGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: "",
            isNewGroupNameRepeated: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleInputChange(e) {
        this.setState({
            groupName: e.target.value,
            isNewGroupNameRepeated: false
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.groupName.length) return;

        
        if (this.props.words.hasOwnProperty(this.state.groupName)) {
            this.setState({
                isNewGroupNameRepeated: true
            })
            return;
        }
        
        this.props.onCreateGroupFormSubmit(this.state.groupName)
        this.setState({
            groupName: "", 
        })
        this.props.closeModal();
    }
    render() {
        
        return (
            <div className="last-menu-item">
                <MenuItem onClick={this.props.onCreateGropeClick}>
                    create group
                </MenuItem>

                {(this.props.isCreateGropeForm && this.props.isMenuModalShown) &&
                    <Modal>
                        <form onSubmit={this.handleSubmit}>
                            <div> 
                                <p><small>group name</small></p>
                                <input 
                                    placeholder="enter group name..." 
                                    onChange={this.handleInputChange} 
                                    value={this.state.groupName}
                                    required
                                /> 
                            </div>
                            {this.state.isNewGroupNameRepeated && <p>group with the same name alreadi created</p>}
                            <div className="modal-button-container"><button>create</button></div>
                        </form>
                    </Modal>
                }

            </div>
        )
    }

}

export default CreateGroup;