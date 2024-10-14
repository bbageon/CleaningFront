import { useCreateUserAddress, useDeleteUserAddress, useGetOneUserAddress, useGetUserAddress, useGetUserAddresses, useUpdateUserAddress } from "hooks/UserAddressHooks";
import ComponentTestPresenter from "./ComponentTestPresenter"
import { useCreateUser, useDeleteUser, useGetProfile, useGetUser, useGetUsers, useUpdateUser } from "hooks/UserHooks";

const ComponentTestContainer = () => {

    // UserHooks
    const usersData = useGetUsers();
    const userData = useGetUser(1);
    const profileData = useGetProfile(1);
    const deleteUser = useDeleteUser();
    const updateUser = useUpdateUser();

    const {
        mutate: createUser,
        isLoading: isCreatingUser,
        isError: isCreateError,
    } = useCreateUser()

    const handleCreateUser = () => {
        createUser({
            "name": "김건우",
            "social_id": "249rddhfa2asd0asgjgh",
            "email": "tesafst@test.com",
            "pw": "1q2asdfw3e4r1!",
            "phone": "01016312323",
            "receive_event_method": "EMAIL",
            "is_receive_event": true,
            "is_push_notification": true,
        });
    };

    // UserAddressHooks
    const userAddressesData = useGetUserAddresses();
    const userAddressData = useGetUserAddress();
    const oneUserAddressData = useGetOneUserAddress();
    const createUserAddress = useCreateUserAddress();
    const updateUserAddress = useUpdateUserAddress();
    const deleteUserAddress = useDeleteUserAddress();



    return (
        <ComponentTestPresenter
            handleCreateUser={handleCreateUser}
        />
    );
};

export default ComponentTestContainer;