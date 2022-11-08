
import {Header,Footer,Container} from "../Compine";
import TypesTable from "./TypesTable";

const AppT = () => {
    return (
        <>
        
            <Header />
            <Container>
                <TypesTable/>
            </Container>
            <Footer />
        </>
    );
}

export default AppT;