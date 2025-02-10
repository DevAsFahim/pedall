import { Button, Modal, Space } from 'antd';
import { FaExclamation } from 'react-icons/fa6';

const { confirm } = Modal;


const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this Bicycle?',
    icon: <FaExclamation />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};


const DeleteModal= () => (
  <Space wrap>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
  </Space>
);

export default DeleteModal;