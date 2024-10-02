import { Button, MainLayout, Modal } from "components"

const ComponentTestPresenter = ({
    handleCreateUser,
}) => {
    return (
        <MainLayout>
            <Button
                title={'고객 생성 버튼'}
                onClick={handleCreateUser}
            />

        </MainLayout>
    );
};

export default ComponentTestPresenter;