import './ListItem.css';
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

const ListItem = ({ item, setDone, deleteItem }) => {
    const { id, text, done } = item;
    return (
        <div className="list-item">
            <span onClick={() => setDone(id, !done)} className={`list-item__text ${done ? 'list-item__text_done' : ''}`}>{text}</span>
            <div className="list-item__btns">
                {done
                    ? <CloseOutlined className="btns__btn" onClick={() => setDone(id, false)} />
                    : <CheckOutlined className="btns__btn" onClick={() => setDone(id, true)} />}
                <DeleteOutlined className="btns__btn" onClick={() => deleteItem(id)} />
            </div>
        </div>
    )
}

export default ListItem;