import {PageWrapperStyled} from "./styles.js";


const PageWrapper = ({children}) => {
  return(
      <PageWrapperStyled>
          {children}
      </PageWrapperStyled>

  )
}

export default PageWrapper