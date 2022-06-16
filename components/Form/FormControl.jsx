import Input from '../UI/Input';
const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
  }
};

export default FormControl;
