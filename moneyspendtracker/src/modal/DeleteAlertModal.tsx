import './alertModal.css';

export enum DeleteItemModalAnswerType {
    YES = 'YES',
    NO = 'NO'
}

function DeleteAlertModal(param: {onBtnClick: (answer: DeleteItemModalAnswerType) => void}) {
    return (
        <div className='backdrop'>
            <div className='modal'>
                <div className='content'>
                    <div className='questionTitle'>Are you sure you want to delete the item?</div>
                    <div className='btnContainer'>
                        <button className='btns' onClick={() => {param.onBtnClick(DeleteItemModalAnswerType.YES)}}>Yes</button>
                        <button className='btns' onClick={() => {param.onBtnClick(DeleteItemModalAnswerType.NO)}}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteAlertModal;