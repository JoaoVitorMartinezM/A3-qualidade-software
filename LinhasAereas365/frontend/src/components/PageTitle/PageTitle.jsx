import { PageTitleStyled } from "./styles";

function PageTitle({children}) {
    return ( 
        <PageTitleStyled>
            <h1 className="page-title-text">{children}</h1>
            <hr /> 
        </PageTitleStyled>        
    );
}

export default PageTitle;