import { Fragment } from "react"
import { useTypeSelector } from "../hooks/use-typed-selector"
import AddCell from "./add-cell"
import CellListItem from "./cell-list-item"

const CellList:React.FC = () => {
  const cells = useTypeSelector(({ cells: { order, data } }:any) =>  order.map((id:string) => data[id] ))

  const renderedCells = cells.map((cell:any) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell}/>
      <AddCell previousCellId={cell.id}/>
    </Fragment>
  )) 
  

  return <div>
    <AddCell forceVisible={ cells.length === 0 } previousCellId={null}/>
    {renderedCells}
    </div>
}

export default CellList