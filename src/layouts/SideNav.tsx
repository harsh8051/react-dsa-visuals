import { Link } from 'react-router-dom';
type CompConfig={
    
        name:string,
        url:string,
    
}
interface ModalRendererProps {
    componentsList: CompConfig[];
}


function SideNav(props:Readonly<ModalRendererProps>) {
    const {componentsList}= props;
  return (
    <nav>
        {
            componentsList.map((item: CompConfig,index:number) => <Link key={`${index+1}`} to={item.url}>{item.name}</Link>)
        }
    </nav>
  )
}


export default SideNav
