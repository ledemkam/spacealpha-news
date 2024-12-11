import { Form, Link } from "react-router-dom";
import { Button } from "../ui/button";
import FormInput from "./FormInput";

type FilterProps = {
    item: string;
    mode: string;
}

const FiltersForm = ({item,mode}: FilterProps) => {
  console.log(mode);
  
  return (
    <Form className="my-6 py-2 flex flex-col gap-2">
      <FormInput type="search" label="search" name="item" defaultValue={item} placeholder="'m45'  'neutron' 'starship' "/>
      <div className="self-end flex gap-2">
        <Button type="submit" size="lg">Search</Button>
        <Button type="button" variant="outline" size="lg">
          <Link to="/news">Reset</Link>
        </Button>
      </div>
    </Form>
  )
}
export default FiltersForm