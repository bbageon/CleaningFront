import { Content, MainLayout } from 'components/Layouts';

const NotFound = () => {
    return (
        <MainLayout
            full={true}
        >
            <Content
                gap={50}
            >
                <span>존재하지 않는 페이지입니다.</span>
                <a
                    href='/'
                    style={{
                        textDecoration: 'none',
                        color: 'var(--primary-color)',
                    }}    
                >홈으로</a>
            </Content>
        </MainLayout>
    );
};

export default NotFound;