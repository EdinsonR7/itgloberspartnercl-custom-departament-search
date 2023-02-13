import React, { useState }  from 'react';
import { useQuery } from 'react-apollo';
import  QUERY_VALUE from '../graphql/getDeparmentGroup.graphql'
import DeparmentGroup from './DeparmentGroup'
import { SearchBar } from 'vtex.store-components'
import {useCssHandles} from "vtex.css-handles";
import './styles.css'


const DeparmentSearch = () => {

  const CSS_HANDLES = ["container"]
  const handles = useCssHandles(CSS_HANDLES)

const { data, loading } = useQuery(QUERY_VALUE)
const [slug, setSlug] = useState("")

console.log("Mi slug seleccionado es", slug)
return loading
?
  <div>loading...</div>
 :
 <div className={handles.container}>

 <DeparmentGroup deparments={data?.categories[0]?.children}
 handleSetSlud={setSlug}

 />

<SearchBar
 customSearchPageUrl={slug}
 placeholder="¿Que buscas en Oportunidades?"
 displayMode= "serach-and-clear-buttons"
 />

 </div>

}

export default  DeparmentSearch
