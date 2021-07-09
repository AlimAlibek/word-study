import Modal from "./MenuModal";
import MenuItem from "./MenuItem";

function AddWord(props) {

    function handleSubmit(e) {
        e.preventDefault();
        const newWord = {};

        new FormData(e.target).forEach((value, key) => {
            newWord[key] = value;
        })

        newWord["id"] = newWord.word.replace(/\s/g, '$') + Date.now();

        if (newWord.word.trim() && newWord.translate.trim()) {
            props.onAddFormSubmit(newWord);
        }
        props.closeModal();
    }

    return (
        <div>
           
            <MenuItem onClick={props.onAddClick}>
                add word
            </MenuItem>

            {(props.isAddForm && props.isMenuModalShown) &&
                <Modal>
                    {Object.keys(props.words).length 
                    ? 
                    <form onSubmit={handleSubmit}>
                        <div> 
                            <p><small>word</small></p>
                            <input name="word" placeholder="enter word..." required/>                        
                        </div>
                        <div>
                            <p><small>translate</small></p>
                            <input name="translate" placeholder="enter translate..." required/>                           
                        </div>
                        <div>
                            <p><small>picture</small></p>
                            <textarea name="img" placeholder="copy the URL or drag the picture here..." />
                        </div>
                        
                        {/* <div><img src="https://media-cdn.tripadvisor.com/media/photo-s/19/f4/54/37/wilson-island.jpg" style={{ width: "50px" }} /></div> */}
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

export default AddWord;