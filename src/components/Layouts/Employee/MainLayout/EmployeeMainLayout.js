import MainLayout from "components/Layouts/MainLayout"
import EmployeeFooter from "../Footer/EmployeeFooter";
import Top from "components/Layouts/Top";

const EmployeeMainLayout = ({
    children,
    footer,

    isShowTop,
    title,
    notShowIcon,
    background,
    iconColor,
    absolute,
    top,
    paddingBottom,
}) => {
    return (
        <>
            {
                isShowTop &&
                <Top
                    title={title}
                    notShowIcon={notShowIcon}
                    background={background}
                    iconColor={iconColor}
                    absolute={absolute}
                    top={top}
                    paddingBottom={paddingBottom}
                />
            }
            <MainLayout
                footer={false}
            >
                {children}
                {
                    footer ?
                        <EmployeeFooter /> :
                        <></>
                }
            </MainLayout>
        </>
    )
}

export default EmployeeMainLayout;