import React from 'react'


type props ={
deparments: [Category],
handleSetSlud: any
}

type Category ={
  id: number,
  name: string,
  slug: string,
}

const DeparmentGroup = ({ deparments, handleSetSlud }: props) => {
  console.log("mi grupo de departamentos es:", deparments);

const onHandleSetSlug = (event: any ) => {
  handleSetSlud(`${event.targe.value}/$\{term\}&map=ft`)

}

const deparmentOptions: any = deparments.map((deparment: Category) => {

 return (
  <option
  value={deparment.slug}
  key={deparment.id}
  >
  {deparment.name}
  </option>
 )
})

return (
  <select
  onChange = {onHandleSetSlug}
  defaultValue = "value0"
  >

  <option disabled value="value0">
  Categorias
  </option>

  {deparmentOptions}

  </select>
)
}

export default DeparmentGroup
