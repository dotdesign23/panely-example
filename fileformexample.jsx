import { Form, Button, CustomInput } from "@panely/components"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"

function FileFormExample() {
  // Define Yup schema for form validation
  const schema = yup.object().shape({
    file: yup
      .mixed()
      .required("You need to provide file")
  })

  const { control, handleSubmit, errors } = useForm({
    // Apply Yup as resolver for react-hook-form
    resolver: yupResolver(schema),
    // Define the default values for all input forms
    defaultValues: {
      file: undefined
    }
  })

  // Handle form submit event
  const onSubmit = data => {
    // Display array of file data
    console.log(data.file)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* BEGIN Form Group */}
      <Form.Group>
        <Controller
          control={control}
          name="file"
          render={({ onChange, name, ref }) => (
            <CustomInput
              type="file"
              id="file"
              label="Input you file"
              invalid={Boolean(errors.file)}
              onChange={e => onChange(e.target.files)}
              innerRef={ref}
            />
          )}
        />
      </Form.Group>
      {/* END Form Group */}
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  )
}

export default FileFormExample
