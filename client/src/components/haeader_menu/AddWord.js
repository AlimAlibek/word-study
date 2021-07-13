import React from "react";
import Modal from "./MenuModal";
import MenuItem from "./MenuItem";

class AddWord extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImgLoad = this.handleImgLoad.bind(this);

        this.state = {
            word: "",
            translate: "",
            img: ""
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImgLoad(e) {
        if (!e.target.files.length) {
            return;
        }
        const reader = new FileReader();

        reader.onload = ev => {
            this.setState({
                img: ev.target.result
            })
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    handleSubmit(e) {
        e.preventDefault();
        const wordObject = {
            ...this.state
        };

        wordObject.id = this.state.word.replace(/\s/g, '$') + Date.now();

        if (wordObject.word.trim() && wordObject.translate.trim()) {
            this.props.onAddFormSubmit(wordObject);
        }
        this.setState({
            word: "",
            translate: "",
            img: ""
        })

        this.props.closeModal();
    }

    render() {
        return (
            <div>

                <MenuItem onClick={this.props.onAddClick}>
                    add word
                </MenuItem>

                {(this.props.isAddForm && this.props.isMenuModalShown) &&
                    <Modal>
                        {Object.keys(this.props.words).length
                            ?
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <p><small>word</small></p>
                                    <input
                                        name="word"
                                        placeholder="enter word..."
                                        value={this.state.word}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <p><small>translate</small></p>
                                    <input
                                        name="translate"
                                        placeholder="enter translate..."
                                        value={this.state.translate}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <p><small>picture</small></p>

                                    <label className="input-file">
                                        <input
                                            type="file"
                                            onChange={this.handleImgLoad}
                                            accept=".png, .jpg"
                                        />
                                        {
                                            this.state.img
                                                ? <div className="input-img">
                                                    <div className="input-img-change">change</div>
                                                    <img src={this.state.img} alt="load-img" />
                                                </div>

                                                : <div className="load-img">
                                                    <span>image</span>
                                                </div>

                                        }

                                    </label>


                                </div>

                                <div className="modal-button-container"><button>add</button></div>
                            </form>
                            :
                            <div>
                                There are no groups created. Click "create group" to create a group.
                            </div>
                        }
                    </Modal>
                }

            </div>
        )
    }
}

export default AddWord;